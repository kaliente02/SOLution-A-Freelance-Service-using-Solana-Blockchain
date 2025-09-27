// src/components/Logo.tsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo} width={size} height={size} alt="SolanCe" draggable={false} />
      <span className="text-xl font-bold tracking-wide">SolanCe</span>
    </Link>
  );
}