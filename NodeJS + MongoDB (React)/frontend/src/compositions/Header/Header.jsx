import {Link} from 'react-router-dom'

import HeaderTop from "./HeaderTop";
import Menu from "../../components/Menu";
import {ReactComponent as Logo} from './images/logo.svg'

import './Header.scss'

const Header = ({showModalLogin, showCart}) => {
	return (
		<>
			<HeaderTop showModalLogin={showModalLogin} showCart={showCart} />
			<header className="g-header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow">
				<div className="my-2" style={{marginRight: "auto"}}>
					<Link to="/" className="logo" style={{display: "block", width: "48px"}}><Logo /></Link>
				</div>
				<Menu />
			</header>
		</>
	);
};

export default Header;
