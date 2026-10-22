import logo from "../assets/Logo.png"
import './Header.scss'

const menu = ['Todas Categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia']

function Header() {
    return (
        <header className="header">
            <ul className='header__benefits'>
                <li>compra <strong>100% segura</strong></li>
                <li><strong>Frete grátis</strong></li>
                <li><strong>Parcelas</strong></li>
            </ul>

            <div className="header__main">
                <a href="/" className="header__logo">
                    <img src={logo} alt="Econverse" width={139} height={42} />
                </a>

                <form className="header__search" onSubmit={(e) => e.preventDefault()}>
                    <input type="search" placeholder="O que você está buscando?" />
                </form>

                <nav className="header__icons">
                    <a href="#">Pedidos</a>
                    <a href="#">Favoritos</a>
                    <a href="#">Conta</a>
                    <a href="#">Carrinho</a>
                </nav>
            </div>
            <nav className="header__menu">
                {menu.map((item) => (
                    <a key={item} href="#" className={item === 'Ofertas do dia' ? 'active' : ''}>
                        {item}
                    </a>
                ))}
                <a href="#">Assinatura</a>
            </nav>

        </header>
    )
}

export default Header