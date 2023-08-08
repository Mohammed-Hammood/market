import  Navbar  from '@/widgets/ui/Navbar';
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
export default App;