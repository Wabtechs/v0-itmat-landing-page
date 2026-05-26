import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./lib/auth-context"
import { HomePage } from "./pages/HomePage"
import { 
  AdminLogin, 
  AdminLayout, 
  AdminDashboard, 
  AdminPublications, 
  AdminImages,
  AdminSetup
} from "./pages/admin"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/setup" element={<AdminSetup />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="publications" element={<AdminPublications />} />
            <Route path="images" element={<AdminImages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
