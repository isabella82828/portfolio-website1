interface ResearchProps {
  research: {
      title: string;
      description: string;
      img: string;
      link: string;
  };
  index: number;
}

const ResearchItem = ({ research, index }: ResearchProps): JSX.Element => {
  return (
      <div className="shadow-lg mb-8 mx-auto lg:w-11/12 lg:flex lg:flex-row lg:h-auto">
          <img className="rounded-tr-lg rounded-tl-lg h-68 w-full lg:h-auto lg:w-6/12 lg:rounded-bl-lg lg:rounded-tr-none" src={research.img} alt={research.title} />
          <div className="w-full bg-gray-50 p-8 rounded-bl-lg rounded-br-lg lg:rounded-bl-none lg:rounded-tr-lg">
              <h2 className="text-gray-700 font-semibold">
                  <a href={research.link} target="_blank" rel="noopener noreferrer">
                      {research.title} 
                  </a>
              </h2>
              <p className="text-sm text-gray-500 mt-4">{research.description}</p>
          </div>
      </div>
  );
};

export default ResearchItem;
