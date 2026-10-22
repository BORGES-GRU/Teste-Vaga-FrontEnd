import './Banner.scss'

function Banner() {
    return (
        <section className="banner">
            <div className="banner_content">
                <h1 className="banner_title">Venha conhecer nossas promoções</h1>
                <p className="banner_subtitle">
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