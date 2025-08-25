import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Contact } from '@/components/Contact'
import { FloatingParticles } from '@/components/FloatingParticles'

export default function Home() {
  return (
    <>
      <FloatingParticles />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
