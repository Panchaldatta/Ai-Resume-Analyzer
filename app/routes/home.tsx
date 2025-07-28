import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
// import resumes from the correct module
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ai Resume Analyzer" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
<section className="main-section" >
  <div className="page-heading"></div>
  <h1>Welcome to Ai Resume Analyzer</h1>
  <h2>Get smart feedback for your dream job!</h2>
</section>
{resumes.length > 0 &&(
  <div className="resume-section">
    {resumes.map((resume) => (
      <div>
        <ResumeCard key={resume.id} resume={resume} />
      </div>
    ))}
  </div>
)}
))}

  </main> 
}
