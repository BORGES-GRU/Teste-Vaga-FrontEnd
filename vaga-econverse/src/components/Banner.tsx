import './Banner.scss'

function Banner() {
    return (
        <section className="banner">
            <div className="banner__content">
                <h1 className="banner__title">Venha conhecer nossas promoções</h1>
                <p className="banner__subtitle">
                    <strong>50% off</strong> nos produtos
                </p>
                <a href="#produtos" className="banner__button">
                    Ver produto
                </a>
            </div>
        </section>
    )
}

export default Banner