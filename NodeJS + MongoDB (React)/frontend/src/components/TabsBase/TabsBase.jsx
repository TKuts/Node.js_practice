import { Tabs } from 'react-tabs';

import './TabsBase.scss'

const TabsBase = ({children}) => {

	return (
		<Tabs>
			{children}
		</Tabs>
	);
};

export default TabsBase;
