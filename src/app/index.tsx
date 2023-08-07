import { Navbar } from '@/widgets/ui/Navbar/Navbar';
import { withProviders } from './providers';
import Routing from '@/pages';
import "./index.scss";


function App(): JSX.Element {
	return (
		<>
			<Navbar />
			<Routing />
		</>
	)
}

export default withProviders(App);