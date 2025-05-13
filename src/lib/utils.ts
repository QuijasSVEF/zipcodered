import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function that combines Tailwind CSS classes with proper precedence.
 * Uses clsx for conditional class joining and tailwind-merge for proper handling
 * of Tailwind CSS class conflicts.
 * 
 * @param inputs - Array of class values, objects, or arrays
 * @returns Merged and deduped className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}