// src/components/AirdropButton.tsx
import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function AirdropButton() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [loading, setLoading] = useState(false);
  const [sig, setSig] = useState<string | null>(null);

  const request = async () => {
    if (!publicKey) return;
    setLoading(true);
    try {
      const signature = await connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL);
      const latest = await connection.getLatestBlockhash();
      await connection.confirmTransaction({ signature, ...latest });
      setSig(signature);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={request}
        disabled={!publicKey || loading}
        className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50"
      >
        {loading ? "Airdropping..." : "Airdrop 1 SOL (Devnet)"}
      </button>
      {sig && (
        <a
          className="text-sky-400 underline"
          href={`https://explorer.solana.com/tx/${sig}?cluster=devnet`}
          target="_blank"
        >
          View tx
        </a>
      )}
    </div>
  );
}