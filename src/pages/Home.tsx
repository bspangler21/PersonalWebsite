import commencementPhoto from "../assets/Commencement.png";
import headshot from "../assets/Headshot.png";
import workProfilePhoto from "../assets/WorkProfile.jpg";
import utilStyles from "../styles/utilStyles.module.css";
import "../App.css";
import { projects } from "../staticData/projects";

function Home() {
	return (
		<>
			<h1>Brett Spangler</h1>
			<h2>Passionate and Driven Software Developer/Engineer</h2>

			<div className="photo-container">
				<a
					href="https://youtu.be/Ar0J7Tdikmk?si=4Wjm49j2cHhQQEwt"
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
				<h3>Notable Personal Projects</h3>
				<ul>
					{projects.sort((p1, p2) => p1.sortOrder - p2.sortOrder).map(
						(project) => (
							<li key={project.sortOrder + project.displayName}>
								<a
									rel="noopener"
									target="_blank"
									href={project.url}
								>
									{project.displayName}
								</a>
							</li>
						)
					)}
				</ul>
			</div>

			<div className={utilStyles.leftAlign}>
				<a href="/PersonalWebsite/BrettSpanglerResume.pdf" download>
					<button>Download Resume</button>
				</a>
			</div>
			<br></br>
			<p className={utilStyles.leftAlign}>
				Find the source code for this site{" "}
				<a
					href="https://github.com/bspangler21/PersonalWebsite"
					rel="noopener"
					target="_blank"
				>
					here
				</a>
				.
			</p>
		</>
	);
}

export default Home;
