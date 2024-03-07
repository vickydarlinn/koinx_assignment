import { Pie, PieChart, Cell } from "recharts";

const CoinTokeNomics = () => {
  const data = [
    { name: "foundation", value: 20 },

    { name: "crowd sale investors", value: 80 },
  ];
  const COLORS = ["#FAA002", "#0082FF"];
  return (
    <section className="bg-white p-5 rounded-lg  " id="tokenomics">
      <h2 className="text-[#0E1629] text-2xl font-semibold py-2">Tokenomics</h2>
      <div>
        <h3 className="text-xl font-semibold py-2 text-[#0B1426]">
          Initial Distribution
        </h3>
        <div className="flex items-center gap-4 py-2">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <div className="w-3 h-3 rounded-full bg-[#0082FF]"></div>
              <span>Crowdsale investors: 80%</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-3 h-3 rounded-full bg-[#FAA002]"></div>
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>
        <p className="text-[#3E424A] py-2 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          voluptatibus in praesentium, sapiente quisquam error soluta esse
          eveniet neque, rerum sit, aut illo itaque doloremque animi repudiandae
          quis facilis illum eos tempora accusamus minima. Dolorum aliquam
          facere magnam ex in. neque, rerum sit, aut illo itaque doloremque
          animi repudiandae quis facilis illum eos tempora accusamus minima.
          Dolorum aliquam facere magnam ex ine, rerum sit, aut illo itaque
          doloremque animi repudiandae quis facilis illum eos
        </p>
      </div>
    </section>
  );
};

export default CoinTokeNomics;
