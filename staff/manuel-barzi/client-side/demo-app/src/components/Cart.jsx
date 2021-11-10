import logger from '../logger'

import './Cart.css'

function Cart({ items, onItem, onAdd, onRemove, onBack }) {
    logger.debug('Cart -> render')

    return items.length ?
        <div className="cart container container--vertical">
            <button className="button" onClick={onBack}>Go back</button>
            <ul className="cart__list">
                {
                    items.map(({ id, name, thumbnail, image, price, qty }) => <li key={id} className="home__result" onClick={() => onItem(id)}>
                        <div className="container">
                            <h2>{name}</h2>
                        </div>
                        <img className="cart__image" src={thumbnail || image} />
                        <span>{qty} x {price} $</span>
                        <button className="button button--dark" onClick={event => {
                            event.stopPropagation()

                            onAdd(id)
                        }}>Add</button>
                        <button className="button button--dark" onClick={event => {
                            event.stopPropagation()

                            onRemove(id)
                        }}>Remove</button>
                    </li>)
                }
            </ul>
            <span className="cart__total">Total {items.reduce((accum, { price, qty }) => accum + price * qty, 0)} $</span>
            <button className="button button--dark">Proceed to checkout</button>
        </div>
        :
        <p>No items to show</p>
}

export default Cart