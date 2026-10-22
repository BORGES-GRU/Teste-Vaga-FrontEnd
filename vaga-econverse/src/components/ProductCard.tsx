import type { Product } from '../types/product'
import "./ProductCard.scss"

type Props = {
  product: Product
  onSelect: (product: Product) => void
}

function formatPrice(value: number){
    return value.toLocaleString('pt-BR', { style: 'currency', currency:'BRL'})
}

function ProductCard({ product, onSelect }: Props) {
    const price = product.price / 100
    const installment = price / 2

  return (
    <article className='card'>
      <img className="card_image" src={product.photo} alt={product.productName} />
      <h3 className="card_name">{product.productName}</h3>
      <span className="card__old-price">{formatPrice(price * 1.07)}</span>
      <p className="card_price">{formatPrice(price)}</p>
      <p className="card_installment">ou 2x de {formatPrice(installment)} sem juros</p>
       <p className="card__shipping">Frete grátis</p>
      <button type="button" className="card__buy" onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  )
}


export default ProductCard