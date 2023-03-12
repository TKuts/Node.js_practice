import {useSelector} from 'react-redux'
import Button from '../../components/Button'
import {selectFavorite, selectUser} from "../../selecters/index";

import './User.scss'

const User = () => {

	const user = useSelector(selectUser)
	const favorites = useSelector(selectFavorite);
	console.log('User => ', user);
	return (
		<div className="container">
			<div className="user-info">
				<ul className="list-group">
					<li className="list-group-item row">
						<div className="label col">
							Full Name:
						</div>
						<div className="info col">
							{user?.fullName}
						</div>
					</li>
					<li className="list-group-item row">
						<div className="label col">
							User Name:
						</div>
						<div className="info col">
							{user?.username}
						</div>
					</li>
					<li className="list-group-item row">
						<div className="label col">
							Email:
						</div>
						<div className="info col">
							{user?.email}
						</div>
					</li>
					<li className="list-group-item row">
						<div className="label col">
							Favorites product:
						</div>
						<div className="info col">
							<span className="favorites-count">{favorites.length}</span> <Button isPrimary to={'/favorites'} className="">Favorites</Button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default User;
