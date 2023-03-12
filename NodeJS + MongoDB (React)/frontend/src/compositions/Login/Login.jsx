import { Tab,TabPanel,TabList } from 'react-tabs';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {sendRequest} from "../../helpers/sendRequest";
import TabsBase from "../../components/TabsBase";
import Input from "../../components/Forms/Input";
import {fetchAuth} from "../../reducers/";

import {API} from "../../config/API";

import './Login.scss'

const Login = ({onClose}) => {
	const dispatch = useDispatch();

	const formikLogin = useFormik({
		initialValues: {},
		onSubmit: (values) => {
			const { email, password } = values;
			const loginUser = { email, password };
			// console.log('FE - loginUser', loginUser);

			dispatch(fetchAuth(loginUser))
			onClose()
		}
	})

	const formikRegister = useFormik({
		initialValues: {},
		onSubmit: async (values) => {
			const { fullName, email, username, password } = values;
			const registerUser = { fullName, email, username, password };
			const loginUser = { email, password };
			// console.log('FE - registerUser', registerUser);

			await sendRequest(`${API}register`, 'POST', {
				body: JSON.stringify(registerUser)
			});

			await dispatch(fetchAuth(loginUser))
			onClose()
		}
	})
	
	return (
		<div className="login-form">
			<TabsBase>
				<TabList>
					<Tab>Вход</Tab>
					<Tab>Регестрация</Tab>
				</TabList>
				<TabPanel>
					<form onSubmit={formikLogin.handleSubmit} id="form-login" className="form-wrapper" >
						<div className="mb-3">
							<Input
								{...formikLogin.getFieldProps('email')}
								name="email"
								type="email"
								placeholder="name@example.com"
								label="Email address"
								error={formikLogin.touched.email && formikLogin.errors.email}
								errorMessage={formikLogin.errors.email}
							/>
						</div>
						<div className="mb-3">
							<Input
								{...formikLogin.getFieldProps('password')}
								name="password"
								type="password"
								placeholder="name@example.com"
								label="Password"
								error={formikLogin.touched.password && formikLogin.errors.password}
								errorMessage={formikLogin.errors.password}
							/>
						</div>
						<div className="buttons-wrapper">
							<button type="submit" className="btn btn-primary">Вход</button>
						</div>
					</form>
				</TabPanel>
				<TabPanel>
					<form onSubmit={formikRegister.handleSubmit} id="form-register" className="form-wrapper">
						<div className="mb-3">
							<Input
								{...formikRegister.getFieldProps('fullName')}
								name="fullName"
								type="text"
								placeholder="fullName"
								label="Full name"
								error={formikRegister.touched.fullName && formikRegister.errors.fullName}
								errorMessage={formikRegister.errors.fullName}
							/>
						</div>
						<div className="mb-3">
							<Input
								{...formikRegister.getFieldProps('email')}
								name="email"
								type="email"
								placeholder="name@example.com"
								label="Email address"
								error={formikRegister.touched.email && formikRegister.errors.email}
								errorMessage={formikRegister.errors.email}
							/>
						</div>
						<div className="mb-3">
							<Input
								{...formikRegister.getFieldProps('username')}
								name="username"
								type="text"
								placeholder="name@example.com"
								label="Choose a username"
								error={formikRegister.touched.username && formikRegister.errors.username}
								errorMessage={formikRegister.errors.username}
							/>
						</div>
						<div className="mb-3">
							<Input
								{...formikRegister.getFieldProps('password')}
								name="password"
								type="password"
								placeholder="password"
								label="Choose a password"
								error={formikRegister.touched.password && formikRegister.errors.password}
								errorMessage={formikRegister.errors.password}
							/>
						</div>
						<div>
							<button type="submit" className="btn btn-primary">Регестрация</button>
						</div>
					</form>
				</TabPanel>
			</TabsBase>
		</div>
	);
};

export default Login;
