import { useEffect, useState } from 'react'
import type {Product} from "./types/product"

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
<>
  <h1>Produtos</h1>
  <ul>
    {products.map((product) => (
      <li key={product.productName}>{product.productName}</li>
    )  )}
  </ul>
</>

)


}

export default App
