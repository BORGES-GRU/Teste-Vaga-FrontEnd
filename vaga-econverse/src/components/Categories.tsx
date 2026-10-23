import { useState } from 'react'
import './Categories.scss'
import tecnologia from '../assets/icons/tecnologia.png'
import supermercado from '../assets/icons/supermercado.png'
import bebidas from '../assets/icons/bebidas.png'
import ferramentas from '../assets/icons/ferramentas.png'
import saude from '../assets/icons/saude.png'
import esportes from '../assets/icons/esportes.png'
import moda from '../assets/icons/moda.png'


const categories = [
    { label: 'Tecnologia', icon: tecnologia },
    { label: 'Supermercado', icon: supermercado },
    { label: 'Bebidas', icon: bebidas },
    { label: 'Ferramentas', icon: ferramentas },
    { label: 'Saúde', icon: saude },
    { label: 'Esportes e Fitness', icon: esportes },
    { label: 'Moda', icon: moda },
]


function Categories() {
    const [active, setActive] = useState('Tecnologia')

    return (
        <section className='categories'>
            <ul className='categories__list'>
                {categories.map((category) => (
                    <li key={category.label}>
                        <button
                            type="button"
                            className={
                                active === category.label
                                    ? 'categories__item categories__item--active'
                                    : 'categories__item'
                            }
                            onClick={() => setActive(category.label)}
                        >
                            <span className="categories__icon">
                                <img src={category.icon} alt="" width={60} height={60} />
                            </span>
                            <span className="categories__label">{category.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Categories