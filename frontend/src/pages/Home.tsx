// src/pages/Home.tsx
import AirdropButton from "../components/AirdropButton";

export default function Home() {
  return (
    <section className="grid gap-4">
      <h2 className="text-2xl font-semibold">Welcome to SolanCe</h2>
      <p className="opacity-80">Connect a wallet on Devnet and request some test SOL.</p>
      <AirdropButton />
    </section>
  );
}