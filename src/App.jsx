import Footer from "./components/Footer.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Creators from "./pages/Creators.jsx";
import CreatorSlugRouter from "./pages/CreatorSlugRouter.jsx";
import { creators } from "./data/creators.js";
import Book from "./pages/Book.jsx";
import Showcase from "./pages/Showcase.jsx";
import Resources from "./pages/Resources.jsx";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav.jsx";

export default function App() {
  const defaultCreator = creators[0]?.slug || "angela-humburg";

  return (
    <div className="min-h-screen flex flex-col">
      <Nav /> {/* ✅ Replaces <Header /> */}
      <main className="flex-1 pt-16"> {/* Add padding-top for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/showcase" element={<Showcase />} />

          {/* convenience redirect */}
          <Route path="/creators" element={<Navigate to={`/${defaultCreator}`} replace />} />

          {/* root-level creator pages */}
          <Route path="/creators/:slug" element={<Creators />} />
          <Route path="/:slug" element={<Creators />} />        </Routes>
      </main>
      <Footer />
    </div>
  );
}

