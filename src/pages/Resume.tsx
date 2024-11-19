import utilStyles from "../styles/utilStyles.module.css";
import resume from "../styles/resume.module.css";
import { Experiences } from "../staticData/Experiences";
import { Certifications } from "../staticData/Certifications";

function Resume() {
	return (
		<div className={utilStyles.container}>
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
									{experience.company}
									{", "}
								</span>
								<span>{experience.location}</span>
							</p>
							<div className={utilStyles.noMargin}>
								<ul className={resume.bulletPoints}>
									{experience.responsibilities.map(
										(responsibility) => (
											<li key={responsibility}>
												{responsibility}
											</li>
										)
									)}
								</ul>
							</div>
						</>
					))}
				</div>
				<p className={resume.sectionHeader}>CERTIFICATIONS</p>
				{Certifications.map((certification) => (
					<div className={utilStyles.noMargin}>
						<span className={resume.date}>
							{certification.issuedDate}
						</span>
						<br></br>
						<span
							key={certification.title}
							className={resume.company}
						>
							{certification.title}
						</span>
						<br></br>
						<ul className={resume.bulletPoints}>
							<li>{certification.testName}</li>
						</ul>
					</div>
				))}
			</div>
			<div>
				<p>
					<a href="/PersonalWebsite/BrettSpanglerResume.pdf" download>
						<button>Download Resume</button>
					</a>
				</p>
			</div>
		</div>
	);
}

export default Resume;
