import  Navbar  from '@/widgets/ui/Navbar';
import Routing from '@/pages';
import "./styles/index.scss";


function App(): JSX.Element {
	return (
		<>
			<Navbar />
			<Routing />
		</>
	)
}
export default App;