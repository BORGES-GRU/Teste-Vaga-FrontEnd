import { useEffect, useState } from 'react'
import type { Product } from "./types/product"
import ProductCard from './components/ProductCard'

const URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))

  }, [])

  return (
    <div>
      <h1>Produtos</h1>
      {products.map((product) => (
        <ProductCard key={product.productName} product={product} />
      ))}
    </div>

  )


}

export default App
