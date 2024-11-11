import Image from 'next/image';
import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json';

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-8 hidden md:block rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-2xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					<p className="text-base">
						I'm a 3rd-year <span className="bg-blue-100 px-1 rounded">Biomedical Engineering student</span> at the <span className="bg-blue-100 px-1 rounded">University of Waterloo</span>, with a passion for the intersection between <span className="bg-blue-100 px-1 rounded">healthcare and technology</span>. My academic, internship, and project experiences span <span className="bg-blue-100 px-1 rounded">research, machine learning, and software engineering,</span> allowing me to bring a comprehensive approach to problem-solving and innovation.
						<br />
						<br />
						<a className="text-sm mt-2 block">✉️ {personalInfo.about.email}</a>
					</p>
					<div className="mt-8">
						<h2 className="text-xl font-semibold">Experience</h2>
						<ul className="list-disc pl-5 mt-4 space-y-2">
							<li><strong>Software Engineer Intern, Zynga Inc:</strong> AI and machine learning models for gaming applications 🤖</li>
							<li><strong>Research Student, University Health Network:</strong> Wearable devices for monitoring & data collection in heart transplant patients 🔬 </li>
							<li><strong>Software Engineer Intern, TD Bank:</strong> Quantitative analytics platforms & trading algorithms for stock trading 📈</li>
							<li><strong>Research Student, Sunnybrook Hospital:</strong> Cardiovascular disease biomarkers analysis & in-hosptial glucose sensor implementation for diabetic patients 🫀</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
