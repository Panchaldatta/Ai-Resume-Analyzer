import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ai Resume Analyzer" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
<section className="main-section" >
  <div className="page-heading"></div>
  <h1>Welcome to Ai Resume Analyzer</h1>
  <h2>Get smart feedback for your dream job!</h2>
</section>
  </main> 
}
