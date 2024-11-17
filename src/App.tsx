import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Header from "./pageComponents/Header";
import Footer from "./pageComponents/Footer";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/PersonalWebsite" Component={Home}></Route>
				<Route
					path="/PersonalWebsite/Resume"
					Component={Resume}
				></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
