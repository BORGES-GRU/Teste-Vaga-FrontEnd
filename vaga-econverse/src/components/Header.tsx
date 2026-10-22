import logo from "../assets/Logo.png"
import seguro from "../assets/icons/seguro.png"
import frete from "../assets/icons/frete.png"
import cartao from "../assets/icons/cartao.png"
import busca from "../assets/icons/busca.png"
import pedidos from "../assets/icons/pedidos.png"
import favoritos from "../assets/icons/favoritos.png"
import conta from "../assets/icons/conta.png"
import carrinho from "../assets/icons/carrinho.png"
import './Header.scss'

const menu = ['Todas Categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia']

function Header() {
    return (
    <header className="header">
      <ul className="header__benefits">
        <li>
          <img src={seguro} alt="" width={20} height={20} />
          Compra <strong>100% segura</strong>
        </li>
        <li>
          <img src={frete} alt="" width={20} height={20} />
          <strong>Frete grátis</strong> acima de R$ 200
        </li>
        <li>
          <img src={cartao} alt="" width={20} height={20} />
          <strong>Parcele</strong> suas compras
        </li>
      </ul>

      <div className="header__main">
        <a href="/" className="header__logo">
          <img src={logo} alt="Econverse" width={139} height={42} />
        </a>

        <form className="header__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search" className="sr-only">Buscar produtos</label>
          <input id="search" type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar">
            <img src={busca} alt="" width={24} height={24} />
          </button>
        </form>

        <nav className="header__icons" aria-label="Minha conta">
          <a href="#" aria-label="Pedidos"><img src={pedidos} alt="" width={24} height={24} /></a>
          <a href="#" aria-label="Favoritos"><img src={favoritos} alt="" width={24} height={24} /></a>
          <a href="#" aria-label="Minha conta"><img src={conta} alt="" width={24} height={24} /></a>
          <a href="#" aria-label="Carrinho"><img src={carrinho} alt="" width={24} height={24} /></a>
        </nav>
      </div>

      <nav className="header__menu" aria-label="Categorias">
        {menu.map((item) => (
          <a key={item} href="#" className={item === 'Ofertas do dia' ? 'active' : ''}>
            {item}
          </a>
        ))}
        <a href="#" className="header__subscription">Assinatura</a>
      </nav>
    </header>
  )
}

export default Header