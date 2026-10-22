import './Partners.scss'

function Partners() {
    return (
        <section className='partners' aria-label='Parceiros'>
            {[1, 2].map((item) => (
                <article key={item} className="partners__card">
                    <h3 className="partners__title">Parceiros</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <a href="#" className="partners__button">Confira</a>
                </article>
            ))}
        </section>
    )
}

export default Partners