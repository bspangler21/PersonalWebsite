import {
	BrowserRouter,
	Routes,
	Route,
	useLocation,
	HashRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Header from "./pageComponents/Header";
import Footer from "./pageComponents/Footer";

function App() {
	return (
		<HashRouter>
			<ConditionalHeader />
			<Routes>
				<Route path="/" Component={Home}></Route>
				<Route path="/Resume" Component={Resume}></Route>
			</Routes>
			<ConditionalFooter />
		</HashRouter>
	);
}

function ConditionalHeader() {
	const location = useLocation();
	const showHeader = location.pathname !== "/PersonalWebsite/Resume/2";
	return showHeader ? <Header /> : null;
}

function ConditionalFooter() {
	const location = useLocation();
	const showFooter = location.pathname !== "/PersonalWebsite/Resume/2";
	return showFooter ? <Footer /> : null;
}

export default App;
