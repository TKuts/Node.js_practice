import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import {selectAuthUserToken} from "../../selecters";

const Menu = () => {
	const isUser = Boolean(useSelector(selectAuthUserToken));

	return (
		<nav className="my-2 my-md-0 mr-md-3">
			<Link className="p-2 text-dark" to="/product">Продукты</Link>
			{isUser && <Link className="p-2 text-dark" to="/add">Добавить Продукт</Link>}
		</nav>
	);
};

export default Menu;
