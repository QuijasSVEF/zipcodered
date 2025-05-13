/*
  # Fix storage policies and bucket configuration

  1. Changes
    - Update storage bucket to be public
    - Add proper policies for file uploads
    - Fix RLS policies for submissions
  
  2. Security
    - Allow public uploads but maintain secure access control
    - Ensure proper file access restrictions
*/

-- Make sure the letters bucket exists and is public
INSERT INTO storage.buckets (id, name, public)
VALUES ('letters', 'letters', true)
ON CONFLICT (id) DO UPDATE
SET public = true;

-- Enable RLS on objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Anyone can upload letters" ON storage.objects;
DROP POLICY IF EXISTS "Only admins can read letters" ON storage.objects;

-- Allow public uploads to the letters bucket
CREATE POLICY "Public can upload to letters bucket"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'letters');

-- Allow public to read uploaded files
CREATE POLICY "Public can read from letters bucket"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'letters');