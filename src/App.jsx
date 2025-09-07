import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Creators from "./pages/Creators.jsx";
import CreatorSlugRouter from "./pages/CreatorSlugRouter.jsx";
import { creators } from "./data/creators.js";
import Book from "./pages/Book.jsx";
import Showcase from "./pages/Showcase.jsx";
import Resources from "./pages/Resources.jsx";

export default function App() {
  const defaultCreator = creators[0]?.slug || "angela-humburg";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/showcase" element={<Showcase />} />

          {/* convenience redirect */}
          <Route path="/creators" element={<Navigate to={`/${defaultCreator}`} replace />} />

          {/* root-level creator pages */}
          <Route path="/:slug" element={<CreatorSlugRouter />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
