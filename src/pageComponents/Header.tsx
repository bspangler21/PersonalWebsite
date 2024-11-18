import header from "../styles/header.module.css";

const baseUrl = "/PersonalWebsite";

const pages = [
	{
		name: "Home",
		link: `${baseUrl}/`,
	},
	{
		name: "Resume",
		link: `${baseUrl}/#Resume`,
	},
];

const Header = () => {
	return (
		<div className={header.topnav}>
			{pages.map((page) => (
				<a href={page.link}>{page.name}</a>
			))}
		</div>
	);
};

export default Header;
