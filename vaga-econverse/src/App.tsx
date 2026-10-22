import { useEffect, useState } from 'react'
import type { Product } from "./types/product"
import ProductCard from './components/ProductCard'
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
    <div>
      <h1>Produtos</h1>
      {products.map((product) => (
        <ProductCard key={product.productName} product={product} onSelect={setSelected} />
      ))}

        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </div>

  )


}

export default App
