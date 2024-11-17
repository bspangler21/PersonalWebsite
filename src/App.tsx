import commencementPhoto from "./assets/Commencement.png";
import headshot from "./assets/Headshot.png";
import workProfilePhoto from "./assets/WorkProfile.jpg";
import "./App.css";
import utilStyles from "./styles/utilStyles.module.css";

function App() {
	return (
		<>
			<h1>Brett Spangler</h1>
			<h2>Passionate and Driven Software Developer/Engineer</h2>
			<div>
				<a
					href="https://www.linkedin.com/in/brett-spangler/"
					target="_blank"
					rel="noopener"
				>
					<img
						src={commencementPhoto}
						className="coverImage"
						alt="Brett Spangler speaking at his UWO graduation ceremony"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/brett-spangler/"
					target="_blank"
					rel="noopener"
				>
					<img
						src={headshot}
						className="coverImage"
						alt="Brett Spangler's professional headshot'"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/brett-spangler/"
					target="_blank"
					rel="noopener"
				>
					<img
						src={workProfilePhoto}
						className="coverImage profile"
						alt="Brett Spangler work profile photo"
					/>
				</a>
			</div>
			<div
				className={utilStyles.leftAlign + " " + utilStyles.marginSpace}
			>
				<h3>Notable GitHub Projects</h3>

				<ul>
					<li>
						<a
							rel="noopener"
							href="https://github.com/bspangler21/FrontendTemplate"
							target="_blank"
						>
							Frontend Template
						</a>
					</li>
					<li>
						<a
							rel="noopener"
							href="https://github.com/bspangler21/WorryApp"
							target="_blank"
						>
							W.O.R.R.Y. App
						</a>
					</li>
					<li>
						<a
							rel="noopener"
							href="https://github.com/bspangler21/Golf-Tracker"
							target="_blank"
						>
							Golf Tracker
						</a>
					</li>
					<li>
						<a
							rel="noopener"
							href="https://github.com/bspangler21/Planner"
							target="_blank"
						>
							SharePoint Framework (SPFx) Web Part with Planner
							integration
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default App;
