import commencementPhoto from "./assets/Commencement.png";
import "./App.css";

function App() {
	return (
		<>
			<h1>Brett Spangler</h1>
			<h2>Passionate and Drive Software Developer</h2>
			<div>
				<a
					href="https://www.linkedin.com/in/brett-spangler/"
					target="_blank"
					rel="noopener"
				>
					<img
						src={commencementPhoto}
						className="logo"
						alt="Brett Spangler speaking at his UWO graduation ceremony"
					/>
				</a>
			</div>
		</>
	);
}

export default App;
