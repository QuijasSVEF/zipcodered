import { createClient } from '@supabase/supabase-js';

// Environment variables for Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate required environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

/**
 * Singleton Supabase client instance.
 * Used for all database operations and file storage.
 * Configured with environment variables for the project.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);