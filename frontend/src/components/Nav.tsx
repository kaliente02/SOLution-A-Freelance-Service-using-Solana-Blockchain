import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Nav() {
  return (
    <header style={{ padding: "12px 24px", borderBottom: "1px solid #ddd" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>SolanCe</h1>
        <WalletMultiButton />
      </div>
    </header>
  );
}