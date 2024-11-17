import { Photo } from "../types/Photo";
import commencementPhoto from "../assets/Commencement.png";
import headshot from "../assets/Headshot.png";
import workProfilePhoto from "../assets/WorkProfile.jpg";

const Photos: Photo[] = [
	{
		src: commencementPhoto,
		alt: "Brett Spangler speaking at his UWO graduation ceremony",
		externalUrl: "https://youtu.be/Ar0J7Tdikmk?si=4Wjm49j2cHhQQEwt",
	},
	{
		src: headshot,
		alt: "Brett Spangler's professional headshot",
		externalUrl: "https://www.linkedin.com/in/brett-spangler/",
	},
	{
		src: workProfilePhoto,
		alt: "Brett Spangler's work profile photo",
		externalUrl: "https://www.linkedin.com/in/brett-spangler/",
	},
];

export default Photos;
