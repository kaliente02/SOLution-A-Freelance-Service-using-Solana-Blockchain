// src/store/useMarket.ts
import { useEffect, useState } from "react";
import type { Gig } from "../types";

const KEY = "solance:gigs";

export function useMarket() {
  const [gigs, setGigs] = useState<Gig[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setGigs(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(gigs));
    } catch {}
  }, [gigs]);

  const addGig = (g: Gig) => setGigs(prev => [g, ...prev]);

  return { gigs, addGig };
}