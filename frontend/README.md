SolanCe Frontend

Features (so far)

React + Vite + TypeScript

React Router (Home / Post / Gigs)

Solana Wallet Adapter (Phantom + Solflare)

Basic Wallet connect button in the Nav



---

Setup & Run

Clone and checkout the right branch:

git clone git@github.com:kaliente02/SolanCe.git
cd SolanCe/frontend
git checkout razvan-dev   # or the branch you need

Install dependencies:

npm install

Run the dev server:

npm run dev

Open in browser:

http://localhost:5173


---

Development Notes

Default cluster: Devnet

Wallets supported: Phantom, Solflare

Pages:

/ → Home (welcome)

/post → Post a Gig (form placeholder)

/gigs → All Gigs (list placeholder)


Next step: Add AirdropButton, GigForm, GigCard.
