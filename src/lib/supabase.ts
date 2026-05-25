import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Publication = {
  id: string
  title: string
  content: string
  image_url: string | null
  category: string
  is_published: boolean
  created_at: string
  updated_at: string
  user_id: string
}

export type SiteImage = {
  id: string
  section: string
  image_url: string
  alt_text: string | null
  created_at: string
  updated_at: string
  user_id: string
}
