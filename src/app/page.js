import { Hero } from "./components/hero"
import { Projects } from "./components/projects"
import { Skills } from "./components/skills"
import { Contact } from "./components/contact"

export default function Home() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-8">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

