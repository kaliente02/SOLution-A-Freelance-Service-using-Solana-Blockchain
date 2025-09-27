import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { NavLink, Route, Routes } from "react-router-dom";

function Home() { return <h2>Welcome to SolanCe 🚀</h2>; }
function Post() { return <h2>Post a Gig</h2>; }
function Gigs() { return <h2>All Gigs</h2>; }

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif", color: "#111" }}>
      <header style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/post">Post</NavLink>
          <NavLink to="/gigs">Gigs</NavLink>
        </nav>
        <WalletMultiButton />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/gigs" element={<Gigs />} />
      </Routes>
    </div>
  );
}