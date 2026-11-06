import { useEffect, useRef } from 'react'
import Hero from './components/Hero.jsx'
import LinkSection from './components/LinkSection.jsx'
import Footer from './components/Footer.jsx'
import { sections } from './links.js'

export default function App() {
  const main = useRef(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('band__link--pending')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.15 })

    // Keep sections that are already on screen visible on first paint.
    const pending = Array.from(main.current.querySelectorAll('.band__link'))
      .filter((link) => link.getBoundingClientRect().top >= window.innerHeight)

    for (const link of pending) {
      link.classList.add('band__link--pending')
      observer.observe(link)
    }

    return () => {
      observer.disconnect()
      for (const link of pending) link.classList.remove('band__link--pending')
    }
  }, [])

  return (
    <div className="page">
      <Hero />
      <main ref={main} aria-label="Links oficiais">
        {sections.map((section) => <LinkSection key={section.id} section={section} />)}
      </main>
      <Footer />
    </div>
  )
}
