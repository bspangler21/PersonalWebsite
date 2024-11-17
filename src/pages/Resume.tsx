import utilStyles from "../styles/utilStyles.module.css";
import resume from "../styles/resume.module.css";
import { Experiences } from "../staticData/Experiences";

function Resume() {
	return (
		<>
			<div>
				<h2>Brett Spangler</h2>
				<p>
					(920) 315-0367 |{" "}
					<a
						href="mailto:brettspanglerjobs@gmail.com"
						rel="noopener"
						target="_blank"
					>
						brettspanglerjobs@gmail.com
					</a>{" "}
					|{" "}
					<a
						href="https://www.linkedin.com/in/brett-spangler/"
						rel="noopener"
						target="_blank"
					>
						LinkedIn
					</a>{" "}
					|{" "}
					<a
						href="https://github.com/bspangler21"
						rel="noopener"
						target="_blank"
					>
						GitHub
					</a>
				</p>
			</div>
			<div className={utilStyles.leftAlign}>
				<p className={resume.sectionHeader}>SKILLS</p>
				<div>
					<p className={resume.sectionHeader}>EXPERIENCE</p>
					{Experiences.map((experience) => (
						<>
							<p className={resume.date}>{experience.date}</p>
							<p className={resume.jobTitle}>
								{experience.jobTitle}
							</p>
							<p className={utilStyles.noMargin}>
								<span className={resume.company}>
									{`${experience.company.toUpperCase()}`}
									{", "}
								</span>
								<span>{experience.location}</span>
							</p>
						</>
					))}
				</div>
			</div>
			<div>
				<p>
					<a href="/PersonalWebsite/BrettSpanglerResume.pdf" download>
						<button>Download Resume</button>
					</a>
				</p>
			</div>
		</>
	);
}

export default Resume;
