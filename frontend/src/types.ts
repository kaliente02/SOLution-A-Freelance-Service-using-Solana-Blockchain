// src/types.ts
export type Gig = {
  id: string;
  title: string;
  budget: number;         // SOL
  token: "SOL";
  description: string;
  owner?: string;         // wallet address
  createdAt: number;
};