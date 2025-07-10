const datas = [
  {
    name: "professor",
    role: "Mastermind",
    description: "Mastermind behind the heist",
    imagePath: "/images/professor.jpeg",
  },
  {
    name: "berlin",
    role: "Another mastermind",
    description: "Brother of the mastermind in La Casa de Papel",
    imagePath: "/images/berlin.jpeg",
  },
  // Additional characters
  {
    name: "tokyo",
    role: "Narrator & Field Agent",
    description: "Hot‑headed and impulsive but loyal",
  },
  {
    name: "rio",
    role: "Hacker",
    description: "Young genius hacker, Tokyo's love interest",
  },
  {
    name: "nairobi",
    role: "Counterfeit Expert",
    description: "Leads the money‑printing operation",
  },
  {
    name: "denver",
    role: "Combat Specialist",
    description: "Known for his iconic laugh and loyalty",
  },
];

const Client = ({ params }) => {
  const matchedData = datas.find((p) => p.name === params.client);
  return (
    <div className="text-7xl text-center p-8 bg-black min-h-screen">
      {matchedData && (
        <>
          <div className="p-4.5 max-w-sm mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <img
                src={`/images/${matchedData.name}.jpeg`}
                alt={matchedData.name}
                className="max-h-full max-w-full object-contain rounded-lg" 
              />
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold text-blue-700 mb-2">
                {matchedData.role}
              </div>
              <div className="text-gray-700 text-base">
                {matchedData.description}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="my-3.5 text-4xl text-green-600">
        The Client is {params.client}
      </div>
    </div>
  );
};

export default Client;
