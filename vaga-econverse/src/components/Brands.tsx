import "./Brands.scss"
import brandLogo from '../assets/logo-marca.png'


function Brands() {
    return (
        <section className="brands">
            <h2 className="brands__title">Navegue por marcas</h2>
            <ul className="brands__list">
                {[1, 2, 3, 4, 5].map((item) => (
                    <li key={item} className="brands__item">
                        <a href="#">
                            <img src={brandLogo} alt="Econverse" width={117} height={35} />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Brands