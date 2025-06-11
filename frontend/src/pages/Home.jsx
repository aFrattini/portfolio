// src/pages/Home.jsx
import Hero from '../components/Hero'
import About from '../components/About'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'


function Home() {
  return (
    <>
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
    </>
  )
}

export default Home

