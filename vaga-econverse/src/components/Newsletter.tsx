import { useState } from 'react'
import type { FormEvent } from 'react'
import './Newsletter.scss'

function Newsletter() {
    const [sent, setSent] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSent(true)
        event.currentTarget.reset()
    }

    return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div>
          <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
          <p className="newsletter__subtitle">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__fields">
            <label htmlFor="news-name" className="sr-only">Nome</label>
            <input id="news-name" type="text" placeholder="Digite seu nome" required />

            <label htmlFor="news-email" className="sr-only">E-mail</label>
            <input id="news-email" type="email" placeholder="Digite seu e-mail" required />

            <button type="submit">Inscrever</button>
          </div>

          <label className="newsletter__terms">
            <input type="checkbox" required /> Aceito os termos e condições
          </label>

          {sent && <p className="newsletter__success">Inscrição realizada com sucesso!</p>}
        </form>
      </div>
    </section>
  )
}

export default Newsletter