import { whatsapp } from '../links.js'

const socialLinks = [
  { id: 'instagram', name: 'Instagram', href: 'https://www.instagram.com/postobichao/', size: 35 },
  { id: 'whatsapp', name: 'WhatsApp', href: whatsapp, size: 36 },
]

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src="/images/logo.webp" alt="Posto Bichão" width="201" height="83" loading="lazy" decoding="async" />
      <nav className="footer__social" aria-labelledby="redes">
        <p id="redes">Acompanhe o Bichão</p>
        <ul>
          {socialLinks.map(({ id, name, href, size }) => (
            <li key={id}>
              <a href={href} aria-label={name} target="_blank" rel="noopener">
                <img src={`/images/icone-${id}.webp`} alt="" width={size} height={size} loading="lazy" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
