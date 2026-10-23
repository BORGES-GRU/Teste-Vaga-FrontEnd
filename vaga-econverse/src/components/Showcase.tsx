import { useRef, useState } from 'react'
import type { Product } from '../types/product'
import ProductCard from './ProductCard'
import './Showcase.scss'

const tabs = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

type ShowcaseProps = {
  title: string
  products: Product[]
  onSelect: (product: Product) => void
  showTabs?: boolean
}

function Showcase({ title, products, onSelect, showTabs = false }: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState('Celular')
  const trackRef = useRef<HTMLUListElement>(null)

  function scroll(direction: number) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="showcase">
      <h2 className="showcase__title">{title}</h2>

      {showTabs ? (
        <div className="showcase__tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={tab === activeTab ? 'showcase__tab showcase__tab--active' : 'showcase__tab'}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      ) : (<a href="#" className="showcase__see-all">Ver todos</a>

     )}

      <div className="showcase__carousel">
        <button
          type="button"
          className="showcase__arrow showcase__arrow--prev"
          onClick={() => scroll(-1)}
          aria-label="Produtos anteriores"
        >
          ‹
        </button>

        <ul className="showcase__track" ref={trackRef}>
          {products.map((product) => (
            <li key={product.productName} className="showcase__slide">
              <ProductCard product={product} onSelect={onSelect} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="showcase__arrow showcase__arrow--next"
          onClick={() => scroll(1)}
          aria-label="Próximos produtos"
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default Showcase