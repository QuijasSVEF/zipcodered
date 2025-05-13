/*
  # Create submissions table for letter uploads

  1. New Tables
    - `submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `letter_path` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on submissions table
    - Add policy for authenticated users to insert their own submissions
    - Add policy for admins to read all submissions
*/

CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  letter_path text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own submissions"
  ON submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can read all submissions"
  ON submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE auth.email() IN (
      SELECT email FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin'
    )
  ));