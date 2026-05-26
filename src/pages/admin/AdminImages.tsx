import { useState, useEffect } from "react"
import { supabase, type SiteImage } from "../../lib/supabase"
import { useAuth } from "../../lib/auth-context"
import { 
  Plus, 
  Edit2, 
  Trash2, 
  X,
  Save,
  Image as ImageIcon
} from "lucide-react"

const SITE_SECTIONS = [
  { value: "hero", label: "Hero (Accueil)" },
  { value: "about", label: "A propos" },
  { value: "campus-binza", label: "Campus Binza" },
  { value: "campus-ndolo", label: "Campus Ndolo" },
  { value: "programs", label: "Programmes" },
  { value: "gallery", label: "Galerie" },
]

export function AdminImages() {
  const { user } = useAuth()
  const [images, setImages] = useState<SiteImage[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingImage, setEditingImage] = useState<SiteImage | null>(null)
  const [formData, setFormData] = useState({
    section: "hero",
    image_url: "",
    alt_text: "",
  })

  useEffect(() => {
    loadImages()
  }, [])

  const loadImages = async () => {
    const { data } = await supabase
      .from("site_images")
      .select("*")
      .order("section", { ascending: true })
    
    setImages(data ?? [])
    setLoading(false)
  }

  const openModal = (image?: SiteImage) => {
    if (image) {
      setEditingImage(image)
      setFormData({
        section: image.section,
        image_url: image.image_url,
        alt_text: image.alt_text ?? "",
      })
    } else {
      setEditingImage(null)
      setFormData({
        section: "hero",
        image_url: "",
        alt_text: "",
      })
    }
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setEditingImage(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingImage) {
      await supabase
        .from("site_images")
        .update(formData)
        .eq("id", editingImage.id)
    } else {
      await supabase
        .from("site_images")
        .insert({ ...formData, user_id: user?.id })
    }

    closeModal()
    loadImages()
  }

  const deleteImage = async (id: string) => {
    if (confirm("Etes-vous sur de vouloir supprimer cette image ?")) {
      await supabase.from("site_images").delete().eq("id", id)
      loadImages()
    }
  }

  const getSectionLabel = (section: string) => {
    return SITE_SECTIONS.find(s => s.value === section)?.label ?? section
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
          <h1 className="text-3xl font-bold text-foreground">Images du site</h1>
          <p className="text-muted-foreground mt-1">Gerez les images affichees sur le site</p>
        </div>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
        >
          <Plus className="w-5 h-5" />
          Ajouter une image
        </button>
      </div>

      {images.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center">
          <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">Aucune image</h3>
          <p className="text-muted-foreground mb-6">Commencez par ajouter des images au site</p>
          <button
            onClick={() => openModal()}
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
          >
            Ajouter une image
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="glass-card rounded-2xl overflow-hidden group">
              <div className="aspect-video relative">
                <img
                  src={image.image_url}
                  alt={image.alt_text ?? ""}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
                  <button
                    onClick={() => openModal(image)}
                    className="p-3 rounded-xl bg-white/20 hover:bg-white/30 transition-all"
                  >
                    <Edit2 className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => deleteImage(image.id)}
                    className="p-3 rounded-xl bg-red-500/50 hover:bg-red-500/70 transition-all"
                  >
                    <Trash2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                  {getSectionLabel(image.section)}
                </span>
                {image.alt_text && (
                  <p className="text-sm text-muted-foreground mt-2 truncate">{image.alt_text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="glass-card rounded-2xl w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">
                {editingImage ? "Modifier l'image" : "Nouvelle image"}
              </h2>
              <button onClick={closeModal} className="p-2 rounded-lg hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Section du site</label>
                <select
                  value={formData.section}
                  onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {SITE_SECTIONS.map((section) => (
                    <option key={section.value} value={section.value}>
                      {section.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">URL de l&apos;image</label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="https://exemple.com/image.jpg"
                />
              </div>

              {formData.image_url && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Apercu</label>
                  <img
                    src={formData.image_url}
                    alt="Apercu"
                    className="w-full h-40 object-cover rounded-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23333' width='100' height='100'/%3E%3Ctext fill='%23666' x='50' y='50' text-anchor='middle' dy='.3em'%3EImage invalide%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Texte alternatif</label>
                <input
                  type="text"
                  value={formData.alt_text}
                  onChange={(e) => setFormData({ ...formData, alt_text: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Description de l'image pour l'accessibilite"
                />
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
                  {editingImage ? "Enregistrer" : "Ajouter"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
