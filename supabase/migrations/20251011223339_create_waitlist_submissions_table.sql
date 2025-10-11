/*
  # Create Waitlist Submissions Table

  1. New Tables
    - `waitlist_submissions`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `waitlist_type` (text) - 'Faces Waitlist', 'Creator Waitlist', or 'Brands & Studios Waitlist'
      - `motivation1` (text) - Used by Faces and Creator waitlists
      - `motivation2` (text) - Used by Faces and Creator waitlists
      - `project_types` (text) - Used by Brands & Studios waitlist
      - `frustration` (text) - Used by Brands & Studios waitlist
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `waitlist_submissions` table
    - Add policy to allow anonymous users to insert their own submissions
    - Add policy to allow authenticated users to read their own submissions
*/

CREATE TABLE IF NOT EXISTS waitlist_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text DEFAULT '',
  last_name text DEFAULT '',
  email text NOT NULL,
  phone text DEFAULT '',
  waitlist_type text NOT NULL,
  motivation1 text DEFAULT '',
  motivation2 text DEFAULT '',
  project_types text DEFAULT '',
  frustration text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit to waitlist"
  ON waitlist_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can read own submissions"
  ON waitlist_submissions
  FOR SELECT
  TO authenticated
  USING (auth.jwt()->>'email' = email);