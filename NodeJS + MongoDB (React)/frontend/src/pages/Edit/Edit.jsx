import {useEffect, useState} from "react";
import {Formik, Form} from "formik";
import {useParams, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {fetchAuth, removeProduct} from '../../reducers'

import InputFormik from "../../components/Forms/InputFormik";
import InputSelect from "../../components/Forms/InputSelect";
import {sendRequest} from "../../helpers/sendRequest";
import {API} from '../../config/API'

import './Edit.scss'

const Edit = () => {
	const {productID} = useParams();
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const [product, setProduct] = useState()

	useEffect(() => {
		sendRequest(`${API}edit/${productID}`)
			.then(({data}) => {
				setProduct(data);
			})

	}, [productID])

	const handleDel = () => {
		navigation('/product/');
		dispatch(removeProduct(productID));
		sendRequest(`${API}edit/${productID}`, "DELETE")
	}
	// console.log('FE - => product',product);

	return (
		<div className="container">
			{product && <div className="row-wrapper">
				<p className="fs-2">Обновить продукт</p>
				<Formik
					initialValues={{
						src: product.src,
						title: product.title,
						priceRetail: product.prices.retail,
						priceSale: product.prices.procent,
						status: product.label.text,
					}}
					onSubmit={async (values) => {
						const {src, title, priceRetail, priceSale, status, id} = values;
						const product = {src, title, priceRetail, priceSale, status, id};

						await sendRequest(`${API}edit/${productID}`, "POST", {
							body: JSON.stringify(product)
						})

						navigation('/product/');
					}}
				>
					{({errors, touched}) => (
						<Form className="form-edit">
							<input type="hidden" name="id" value={product.id}/>
							<div className="mb-3">
								<InputFormik
									name="src"
									placeholder="url"
									required
									label="URL картинки"
									error={errors.src && touched.src}
								/>
							</div>
							<div className="mb-3">
								<InputFormik
									name="title"
									placeholder="title"
									label="Название продукта"
									required
									error={errors.title && touched.title}
								/>
							</div>
							<div className="mb-3 form-item-group">
								<InputFormik
									name="priceRetail"
									placeholder="title"
									label="Цена Продукта"
									required
									min="1"
									error={errors.priceRetail && touched.priceRetail}
								/>

								<InputFormik
									name="priceSale"
									placeholder="%"
									label="Sale %"
									required
									min="1"
									error={errors.priceSale && touched.priceSale}
								/>
								<InputSelect
									name="status"
									label="Статус"
									error={errors.status && touched.status}
								>
									<option name="" value="" disabled>Статус</option>
									<option name="top" value="ТОП ПРОДАЖ">ТОП ПРОДАЖ</option>
									<option name="rozetka" value="ТОЛЬКО В РОЗЕТКЕ">ТОЛЬКО В РОЗЕТКЕ</option>
									<option name="sale" value="АКЦИЯ">АКЦИЯ</option>
									<option name="new" value="НОВИНКА">НОВИНКА</option>
									<option name="bests" value="ХИТ ПРОДАЖИ">ПРОДАЖИ</option>
								</InputSelect>

							</div>
							<div className="btn-wrapper">
								<button className="btn btn-primary" type="submit">Обновить</button>
								<button className="btn btn-outline-danger" onClick={handleDel} type="button">Удалить
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>}
		</div>
	);
};

export default Edit;
