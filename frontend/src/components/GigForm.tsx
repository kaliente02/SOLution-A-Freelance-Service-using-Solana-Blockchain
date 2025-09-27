// src/components/GigForm.tsx
import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMarket } from "../store/useMarket";
import type { Gig } from "../types";

export default function GigForm() {
  const { publicKey } = useWallet();
  const { addGig } = useMarket();

  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("0.5");
  const [description, setDescription] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const gig: Gig = {
      id: crypto.randomUUID(),
      title: title.trim(),
      budget: Number(budget),
      token: "SOL",
      description: description.trim(),
      owner: publicKey?.toBase58(),
      createdAt: Date.now(),
    };
    addGig(gig);
    setTitle(""); setBudget("0.5"); setDescription("");
    alert("Gig created locally ✅");
  };

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div>
        <label className="text-sm opacity-70">Title</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="mt-1 w-full rounded-lg bg-zinc-900 border border-white/10 px-3 py-2"
          placeholder="Ex: Build Anchor escrow"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm opacity-70">Budget (SOL)</label>
          <input
            type="number" step="0.01" min="0"
            value={budget}
            onChange={e => setBudget(e.target.value)}
            className="mt-1 w-full rounded-lg bg-zinc-900 border border-white/10 px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="text-sm opacity-70">Token</label>
          <input disabled value="SOL"
            className="mt-1 w-full rounded-lg bg-zinc-900 border border-white/10 px-3 py-2" />
        </div>
      </div>

      <div>
        <label className="text-sm opacity-70">Description</label>
        <textarea
          rows={5}
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="mt-1 w-full rounded-lg bg-zinc-900 border border-white/10 px-3 py-2"
          placeholder="Requirements, deliverables, deadline…"
          required
        />
      </div>

      <button
        type="submit"
        disabled={!publicKey}
        className="rounded-xl bg-violet-600 hover:bg-violet-500 px-5 py-2 disabled:opacity-50"
      >
        Post (local)
      </button>
      {!publicKey && <p className="text-sm opacity-70">Connect a wallet to post.</p>}
    </form>
  );
}