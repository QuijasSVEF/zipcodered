/*
  # Add file URL column to submissions table

  1. Changes
    - Add file_url column to store public URLs of uploaded files
    - Make letter_path nullable to support legacy records
  
  2. Security
    - Maintains existing RLS policies
*/

-- Add file_url column to submissions table
ALTER TABLE submissions 
ADD COLUMN IF NOT EXISTS file_url text;

-- Update letter_path to be nullable for backward compatibility
ALTER TABLE submissions 
ALTER COLUMN letter_path DROP NOT NULL;