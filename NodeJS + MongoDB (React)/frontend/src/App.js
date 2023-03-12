import {useState} from 'react'

import Header from "./compositions/Header";
import Footer from "./compositions/Footer";
import Modal from "./components/Modal";
import Portal from "./components/Portal";
import Login from "./compositions/Login";
import CartSlide from "./compositions/CartSlide";

import RootRouter from "./router";

import './styles/styles.scss';

function App() {
	const [isShowModal, setIsShowModal] = useState(false);
	const [isShowCart, setIsShowCart] = useState(false);

	const handleShowModalLogin = () => {
		setIsShowModal(true);

		document.body.classList.add('modal-open')
	};

	const handleHideModalLogin = () => {
		setIsShowModal(false);
		document.body.classList.remove('modal-open')
	};

	const handleShowCart = () => {
		setIsShowCart(true);
	};

	const handleHideCart = () => {
		setIsShowCart(false);
	};

	return (
		<div className="page__wrapper">
			<Header showModalLogin={handleShowModalLogin} showCart={handleShowCart} />
			<main className="main">
				<RootRouter />
			</main>
			<Footer/>
			<Portal id="portal">
				<Modal isShow={isShowModal} onHide={handleHideModalLogin}>
					<Login onClose={handleHideModalLogin} />
				</Modal>
				<CartSlide isShow={isShowCart} onHide={handleHideCart} />
			</Portal>
		</div>
	);
}

export default App;
