import { useState, useEffect } from "react"
import { supabase, type Publication } from "../../lib/supabase"
import { useAuth } from "../../lib/auth-context"
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Eye, 
  EyeOff, 
  X,
  Save,
  FileText
} from "lucide-react"

export function AdminPublications() {
  const { user } = useAuth()
  const [publications, setPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingPost, setEditingPost] = useState<Publication | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image_url: "",
    category: "actualite",
    is_published: false,
  })

  useEffect(() => {
    loadPublications()
  }, [])

  const loadPublications = async () => {
    const { data } = await supabase
      .from("publications")
      .select("*")
      .order("created_at", { ascending: false })
    
    setPublications(data ?? [])
    setLoading(false)
  }

  const openModal = (post?: Publication) => {
    if (post) {
      setEditingPost(post)
      setFormData({
        title: post.title,
        content: post.content,
        image_url: post.image_url ?? "",
        category: post.category,
        is_published: post.is_published,
      })
    } else {
      setEditingPost(null)
      setFormData({
        title: "",
        content: "",
        image_url: "",
        category: "actualite",
        is_published: false,
      })
    }
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setEditingPost(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingPost) {
      await supabase
        .from("publications")
        .update(formData)
        .eq("id", editingPost.id)
    } else {
      await supabase
        .from("publications")
        .insert({ ...formData, user_id: user?.id })
    }

    closeModal()
    loadPublications()
  }

  const togglePublish = async (post: Publication) => {
    await supabase
      .from("publications")
      .update({ is_published: !post.is_published })
      .eq("id", post.id)
    
    loadPublications()
  }

  const deletePost = async (id: string) => {
    if (confirm("Etes-vous sur de vouloir supprimer cette publication ?")) {
      await supabase.from("publications").delete().eq("id", id)
      loadPublications()
    }
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Publications</h1>
          <p className="text-muted-foreground mt-1">Gerez les actualites et articles du site</p>
        </div>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
        >
          <Plus className="w-5 h-5" />
          Nouvelle publication
        </button>
      </div>

      {publications.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center">
          <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">Aucune publication</h3>
          <p className="text-muted-foreground mb-6">Commencez par creer votre premiere publication</p>
          <button
            onClick={() => openModal()}
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
          >
            Creer une publication
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          {publications.map((post) => (
            <div key={post.id} className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.content}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                          {post.category}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${post.is_published ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                          {post.is_published ? "Publie" : "Brouillon"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.created_at).toLocaleDateString("fr-FR")}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => togglePublish(post)}
                        className="p-2 rounded-lg hover:bg-white/10 transition-all"
                        title={post.is_published ? "Depublier" : "Publier"}
                      >
                        {post.is_published ? (
                          <EyeOff className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <Eye className="w-5 h-5 text-green-400" />
                        )}
                      </button>
                      <button
                        onClick={() => openModal(post)}
                        className="p-2 rounded-lg hover:bg-white/10 transition-all"
                      >
                        <Edit2 className="w-5 h-5 text-primary" />
                      </button>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="p-2 rounded-lg hover:bg-red-500/10 transition-all"
                      >
                        <Trash2 className="w-5 h-5 text-red-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="glass-card rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">
                {editingPost ? "Modifier la publication" : "Nouvelle publication"}
              </h2>
              <button onClick={closeModal} className="p-2 rounded-lg hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Titre</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Titre de la publication"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Contenu</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Contenu de la publication..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">URL de l&apos;image</label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="https://exemple.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Categorie</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="actualite">Actualite</option>
                  <option value="evenement">Evenement</option>
                  <option value="formation">Formation</option>
                  <option value="annonce">Annonce</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="is_published"
                  checked={formData.is_published}
                  onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                  className="w-5 h-5 rounded border-border bg-card"
                />
                <label htmlFor="is_published" className="text-sm text-foreground">
                  Publier immediatement
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl border border-border text-foreground hover:bg-white/5 transition-all"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
                >
                  <Save className="w-4 h-4" />
                  {editingPost ? "Enregistrer" : "Creer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
