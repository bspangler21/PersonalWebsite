import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pageComponents/Header";
import Footer from "./pageComponents/Footer";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/PersonalWebsite" Component={Home}></Route>
				<Route path="/Resume" Component={Home}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
