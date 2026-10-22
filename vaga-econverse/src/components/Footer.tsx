import './Footer.scss'
import logo from '../assets/Logo.png'
import instagram from '../assets/icons/instagram.png'
import facebook from '../assets/icons/facebook.png'
import linkedin from '../assets/icons/linkedin.png'

const columns = [
  { title: 'Institucional', links: ['Sobre nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale conosco', 'Perguntas frequentes'] },
  { title: 'Termos', links: ['Termos e condições', 'Politica de Privacidade', 'Troca e Devolução'] },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__main">
          <  div className="footer__brand">
            <img src={logo} alt="Econverse" width={139} height={42} />
            <  p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram">
                <img src={instagram} alt="" width={24} height={24} />
              </a>
              <a href="#" aria-label="Facebook">
                <img src={facebook} alt="" width={24} height={24} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={linkedin} alt="" width={24} height={24} />
              </a>
            </div>
          </div>

          <nav className="footer__columns">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="footer__title">{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <p className="footer__bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer >
  )
}

export default Footer