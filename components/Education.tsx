import ExtLink from './ExtLink'
import data from './data/personalInfo.json'

const Education = (): JSX.Element => {
    return (
        <section className="grid" id="education">
            <h2 className="text-xl font-bold mt-12 mb-4">Education</h2>

            <p className="text-base ml-4 text-gray-700">
                Biomedical Engineering, Bachelor of Applied Science (BASc), University of Waterloo
                <span className="float-right">2022–2027</span>
            </p>

            <div className="ml-4 mt-3">
                <p className="text-base font-semibold text-gray-800">Extracurriculars</p>
                <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
                    <li>WATOLINK Brain Computer Interface Design Team</li>
                    <li>Campus Response Team</li>
                    <li>Intramural Soccer and Flag Football</li>
                    <li>Stem Cell Club</li>
                </ul>
            </div>
        </section>
    );
};

export default Education;
