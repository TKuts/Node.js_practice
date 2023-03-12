import {useDispatch} from 'react-redux';
import {removeItemShoppingCart} from '../../reducers'

import {ReactComponent as Remove} from './images/close.svg';

import './CardShoppingCart.scss'

const CardShoppingCart = ({title,price,id}) => {
    const dispatch = useDispatch();
    const {currency, retail, sale} = price

    const handlerDel = (id) => {
        dispatch(removeItemShoppingCart(id))
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
                    <p className="price">
                        {sale ? (<><span className="retail">{retail}</span> <span className="sale">{sale}</span></>) : (<span>{retail}</span>) } <span className="currency">{currency}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardShoppingCart;
