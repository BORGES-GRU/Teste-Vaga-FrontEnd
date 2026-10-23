import { useState } from 'react'
import type { Product } from '../types/product'
import './ProductModal.scss'

type Props = {
    product: Product
    onClose: () => void
}

function ProductModal({ product, onClose }: Props) {

    const [quantity, setQuantity] = useState(1)

    const price = (product.price / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal__box" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="modal__close" onClick={onClose} aria-label="Fechar">
                    x
                </button>

                <img className="modal__image" src={product.photo} alt={product.productName} />

                <div className="modal__info">
                    <h2 className="modal__title">{product.productName}</h2>
                    <p className="modal__price">{price}</p>
                    <p className="modal__description">{product.descriptionShort}</p>

                    <div className="modal__actions">
                        <div className="quantity">
                            <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                -
                            </button>
                            <span>{String(quantity).padStart(2, '0')}</span>
                            <button type="button" onClick={() => setQuantity(quantity + 1)}>
                                +
                            </button>
                        </div>
                        <button type="button" className="modal__buy">
                            Comprar
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductModal
