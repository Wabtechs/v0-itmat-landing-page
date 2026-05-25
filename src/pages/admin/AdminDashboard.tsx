import { useState, useEffect } from "react"
import { supabase, type Publication, type SiteImage } from "../../lib/supabase"
import { FileText, Image, Eye, Clock } from "lucide-react"

export function AdminDashboard() {
  const [stats, setStats] = useState({
    publications: 0,
    publishedPosts: 0,
    images: 0,
  })
  const [recentPosts, setRecentPosts] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    // Get publications count
    const { count: pubCount } = await supabase
      .from("publications")
      .select("*", { count: "exact", head: true })

    const { count: publishedCount } = await supabase
      .from("publications")
      .select("*", { count: "exact", head: true })
      .eq("is_published", true)

    const { count: imgCount } = await supabase
      .from("site_images")
      .select("*", { count: "exact", head: true })

    // Get recent posts
    const { data: recent } = await supabase
      .from("publications")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5)

    setStats({
      publications: pubCount ?? 0,
      publishedPosts: publishedCount ?? 0,
      images: imgCount ?? 0,
    })
    setRecentPosts(recent ?? [])
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Tableau de bord</h1>
        <p className="text-muted-foreground mt-1">Bienvenue dans l&apos;administration ITMAT</p>
      </div>

      {/* Stats cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Publications</p>
              <p className="text-3xl font-bold text-foreground">{stats.publications}</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Eye className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Publications publiees</p>
              <p className="text-3xl font-bold text-foreground">{stats.publishedPosts}</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Image className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Images du site</p>
              <p className="text-3xl font-bold text-foreground">{stats.images}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent posts */}
      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Publications recentes</h2>
        
        {recentPosts.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">Aucune publication pour le moment</p>
        ) : (
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground truncate">{post.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.created_at).toLocaleDateString("fr-FR")}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${post.is_published ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                      {post.is_published ? "Publie" : "Brouillon"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
