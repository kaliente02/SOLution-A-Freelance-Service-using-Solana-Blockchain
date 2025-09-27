// src/pages/Post.tsx
import GigForm from "../components/GigForm";

export default function Post() {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold">Post a Gig</h2>
      <GigForm />
    </section>
  );
}