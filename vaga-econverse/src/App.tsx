import { useEffect, useState } from 'react'
import type { Product } from "./types/product"
import Header from './components/Header'
import Banner from './components/Banner'
import Categories from './components/Categories'
import ProductCard from './components/ProductCard'
import localData from './data/product.json'
import ProductModal from './components/ProductModal'
import './App.scss'

const URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [selected, setSelected] = useState<Product | null>(null)


  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch(() => setProducts(localData.products))

  }, [])

  return (
    <>
      <Header />
      <Banner />

      <main>
        <Categories />
        
          <h2 className="section-title">Produtos relacionados</h2>

        <h2 className="section-title">Produtos relacionados</h2>

        <div className="showcase" id="produtos">
          {products.map((product) => (
            <ProductCard key={product.productName} product={product} onSelect={setSelected} />
          ))}
        </div>
      </main>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  )

}

export default App
