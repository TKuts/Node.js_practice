import cx from 'classnames'
import {useSelector} from "react-redux";
import {selectAuthUserToken, selectFavorite} from "../../selecters";
import Button from "../Button";


import './CardProduct.scss'

const CardProduct = ({picture, title, price, label, id, handlerShoppingCart, handlerFavorite}) => {
	const favorites = useSelector(selectFavorite);
	const isUser = Boolean(useSelector(selectAuthUserToken));

	const isFavorite = Boolean(favorites?.find(item => item.id == id))

	// console.log('CardProduct => favorites',favorites);
	// console.log('CardProduct => isFavorite',isFavorite);

	return (
		<div className="g-card">
			<div className="card-box">
				<div className="card-header">
					{isUser && <Button to={`/edit/${id}`} className="btn-edit">edit</Button>}
					{label && <p className={cx("badge", label.status)}>{label.text}</p>}
					<img src={picture} className="card-img-top" alt={title} />
				</div>
				<div className="card-body">
					<div className="card-info">
						<div className="card-title">
							{title}
						</div>

						{price && (
							<div className="card-price">
								{price.sale ? (<><span className="retail">{price.retail}</span> {price.sale}</>) : (
									<span>{price.retail}</span>)} <span className="currency">{price.currency}</span>
							</div>
						)}
					</div>

				</div>
				{handlerShoppingCart &&	handlerFavorite &&(<div className="card-footer">
					<Button type="button" className="btn-outline-primary" onClick={handlerShoppingCart}>
						Купить
					</Button>
					<Button type="button" className={cx("btn-outline-primary", {active: isFavorite})}
					        onClick={handlerFavorite}>
						Нравиться
					</Button>
				</div>)}
			</div>
		</div>
	);
};

export default CardProduct;
