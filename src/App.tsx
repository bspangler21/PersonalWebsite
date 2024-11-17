import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/PersonalWebsite" Component={Home}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
