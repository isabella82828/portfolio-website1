import PublicationItem from './ResearchItem'
import data from './data/research.json'

const PublicationList = (): JSX.Element => {
    return (
        <section className="grid w-full" id="publications">
            <h2 className="text-xl font-bold mt-12 mb-4">Research</h2>
            <p className="text-sm">Click 🔗 to learn more!</p>
            <br /> {/* Adds a blank line */}
            
            <div>
              {data.map((research, index) => (
                <PublicationItem research={research} index={index} key={index}/>
              ))}
            </div>

        </section>
    );
};



export default PublicationList;
