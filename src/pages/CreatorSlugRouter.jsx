import { useParams, Navigate } from "react-router-dom";
import { creators } from "../data/creators.js";
import Creators from "./Creators.jsx";

export default function CreatorSlugRouter() {
  const { slug } = useParams();
  const exists = creators.some(c => c.slug === slug);
  if (!exists) return <Navigate to="/" replace />;
  return <Creators />; // Creators will read :slug
}
