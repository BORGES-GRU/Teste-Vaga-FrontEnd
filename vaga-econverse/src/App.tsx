import { useEffect, useState } from 'react'
import type { Product } from "./types/product"
import Header from './components/Header'
import Banner from './components/Banner'
import Partners from './components/Partners'
import Brands from './components/Brands'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Showcase from './components/Showcase'
import localData from './data/product.json'
import ProductModal from './components/ProductModal'

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

      <main id="produtos">
        <Categories />
        <Showcase title="Produtos relacionados" products={products} onSelect={setSelected} showTabs />
        <Partners />
        <Showcase title="Produtos relacionados" products={products} onSelect={setSelected} />
        <Partners />
        <Brands />
        <Showcase title="Produtos relacionados" products={products} onSelect={setSelected} />
      </main>

      <Newsletter />
      <Footer/>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  )

}

export default App
