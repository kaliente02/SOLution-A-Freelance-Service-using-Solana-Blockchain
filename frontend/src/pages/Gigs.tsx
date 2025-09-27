// src/pages/Gigs.tsx
import { useMarket } from "../store/useMarket";
import GigCard from "../components/GigCard";

export default function Gigs() {
  const { gigs } = useMarket();

  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold">Recent Gigs</h2>
      {gigs.length === 0 ? (
        <p className="opacity-70">No gigs yet. Post one from the “Post a Gig” page.</p>
      ) : (
        <div className="grid gap-4">
          {gigs.map(g => <GigCard key={g.id} gig={g} />)}
        </div>
      )}
    </section>
  );
}