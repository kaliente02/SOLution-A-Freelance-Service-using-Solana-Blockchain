// src/components/GigCard.tsx
import type { Gig } from "../types";

export default function GigCard({ gig }: { gig: Gig }) {
  return (
    <article className="rounded-2xl border border-white/10 p-5 bg-zinc-900/40">
      <h3 className="text-lg font-semibold">{gig.title}</h3>
      <p className="mt-2 text-sm opacity-80 whitespace-pre-wrap">{gig.description}</p>
      <div className="mt-4 text-sm flex items-center justify-between">
        <span className="opacity-80">{gig.budget} {gig.token}</span>
        {gig.owner && (
          <code className="opacity-60 truncate max-w-[50%]">{gig.owner}</code>
        )}
      </div>
    </article>
  );
}