import {useNavigate} from 'react-router-dom';
import {Formik, Form} from "formik";
import InputFormik from "../../components/Forms/InputFormik";
import InputSelect from "../../components/Forms/InputSelect";
import {sendRequest} from "../../helpers/sendRequest";
import {API} from "../../config/API";
import './Add.scss'

const Add = () => {
	const navigation = useNavigate();

	return (
		<div className="container">
			<div className="row-wrapper">
				<p className="fs-2">Добавить новый продукт</p>
				<Formik
					initialValues={{}}
					onSubmit={async (values) => {
						const { src, title, priceRetail, priceSale,	status } = values;
						const product = { src, title, priceRetail, priceSale,status };

						// console.log('formikAdd product => ',product);

						await sendRequest(`${API}product`, "POST",{
							body: JSON.stringify(product)
						})

						navigation('/product/');
					}}
				>
					{({errors, touched}) => (
					<Form className="form-add">

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
								type="number"
								placeholder="title"
								label="Цена Продукта"
								required
								min="1"
								error={errors.priceRetail && touched.priceRetail}
							/>

							<InputFormik
								name="priceSale"
								type="number"
								placeholder="%"
								label="Sale %"
								required
								min="1"
								error={errors.priceSale && touched.priceSale}
							/>
							<InputSelect
								name="status"
								label="Статус"
							>
								<option name="" value="" disabled>Статус</option>
								<option name="top" value="ТОП ПРОДАЖ">ТОП ПРОДАЖ</option>
								<option name="rozetka" value="ТОЛЬКО В РОЗЕТКЕ">ТОЛЬКО В РОЗЕТКЕ</option>
								<option name="sale" value="АКЦИЯ">АКЦИЯ</option>
								<option name="new" value="НОВИНКА">НОВИНКА</option>
								<option name="bests" value="ХИТ ПРОДАЖИ">ПРОДАЖИ</option>
							</InputSelect>

						</div>
						<button className="btn btn-primary" type="submit">Добавить</button>
					</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Add;
