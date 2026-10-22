import type { Product } from '../types/product'

type Props = {
  product: Product
}

function ProductCard({ product }: Props) {
    const price = (product.price / 100).toLocaleString('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    })

  return (
    <article>
      <img src={product.photo} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{price}</p>
      <button type="button">Comprar</button>
    </article>
  )
}

export default ProductCard