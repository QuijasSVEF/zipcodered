/*
  # Create storage bucket for letter uploads

  1. New Storage Bucket
    - Create 'letters' bucket for storing support letter files
  
  2. Security
    - Enable public access for authenticated users to upload files
    - Restrict access to admins for viewing files
*/

-- Create the storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('letters', 'letters', false)
ON CONFLICT (id) DO NOTHING;

-- Allow authenticated users to upload files
CREATE POLICY "Users can upload letters"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'letters' AND
  auth.role() = 'authenticated'
);

-- Only allow admins to read files
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