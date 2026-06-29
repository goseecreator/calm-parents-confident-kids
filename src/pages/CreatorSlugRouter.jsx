import { useParams, Navigate } from "react-router-dom";
import { creators } from "../data/creators.js";
import Creators from "./Creators.jsx";

export default function CreatorSlugRouter() {
  const { slug } = useParams();

  const normalizedSlug = slug?.replace(/\/$/, "");

  const exists = creators.some(c => c.slug === normalizedSlug);

  if (!exists) return <Navigate to="/" replace />;

  return <Creators />;
}
