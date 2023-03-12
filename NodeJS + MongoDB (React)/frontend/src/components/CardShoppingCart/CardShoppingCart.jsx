import {useDispatch, useSelector} from 'react-redux';
import {removeItemShoppingCart} from '../../reducers'
import {selectShoppingCart} from "../../selecters";
import {ReactComponent as Remove} from './images/close.svg';

import './CardShoppingCart.scss'

const CardShoppingCart = ({title,price,id}) => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector(selectShoppingCart);

    const handlerDel = (id) => {
        dispatch(removeItemShoppingCart(id))

        const newShoppingCart = shoppingCart.filter(item => item.id !== id)
        localStorage.setItem('shoppingCart',JSON.stringify(newShoppingCart))
    }

    return (
        <div className="card-shopping-cart">
            <div className="card-action">
                <button type="button" className="btn-remove" onClick={() => handlerDel(id)}>
                    <Remove />
                </button>
            </div>
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-price">
                    <p className="price">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default CardShoppingCart;
