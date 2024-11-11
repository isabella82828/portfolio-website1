import ProjectItem from './ProjectItem';
import data from './data/projects.json';

const ProjectList = (): JSX.Element => {
    return (
        <section className="grid" id="publications">
            <h2 className="text-xl font-bold mt-12 mb-4">Projects</h2>
            <p className="text-sm">Click 🔗 to learn more!</p>
            <br /> {/* Adds a blank line */}
            
            <div>
                {data.map((project, index) => (
                    <ProjectItem key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
