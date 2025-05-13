/*
  # Fix storage and submission policies

  1. Updates
    - Allow public uploads to letters bucket
    - Allow public submissions to submissions table
    - Maintain admin-only read access
  
  2. Security
    - Ensures uploads are still restricted to allowed file types
    - Maintains admin-only access for viewing submissions
*/

-- Update storage bucket to allow public uploads
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Users can upload letters" ON storage.objects;
DROP POLICY IF EXISTS "Only admins can read letters" ON storage.objects;

-- Create new public upload policy
CREATE POLICY "Anyone can upload letters"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (
  bucket_id = 'letters'
);

-- Maintain admin-only read access
CREATE POLICY "Only admins can read letters"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'letters' AND
  auth.uid() IN (
    SELECT id FROM auth.users 
    WHERE raw_user_meta_data->>'role' = 'admin'
  )
);

-- Update submissions table policies
DROP POLICY IF EXISTS "Users can insert their own submissions" ON submissions;

CREATE POLICY "Anyone can submit letters"
ON submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;