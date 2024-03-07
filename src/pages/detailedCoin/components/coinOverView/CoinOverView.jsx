import overViewImage from "../../../../assets/images/overview.avif";

const CoinOverView = () => {
  return (
    <section className="bg-white p-5 rounded-lg  " id="overview">
      <h2 className="text-[#0E1629] text-2xl font-semibold py-2">
        About Bitcoin
      </h2>

      <div>
        <h3 className="text-xl font-semibold py-2 text-[#0B1426]">
          What is Bitcoin?
        </h3>
        <p className="text-[#3E424A] py-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
          ullam ea. Nam expedita ullam repudiandae quos praesentium odit dolorem
          commodi nemo cupiditate in quis, totam voluptatum debitis.
          Repudiandae, nisi quos!
        </p>
      </div>
      <div className="w-full border-t my-1"> </div>
      <div>
        <h3 className="text-xl font-semibold py-2 text-[#0B1426]">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="text-[#3E424A] py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          consequuntur repellat neque in incidunt suscipit illum necessitatibus.
          Voluptate, sint dicta. repellat neque in incidunt suscipit illum
          necessitatibus. Voluptate, sint dicta pellat neque in incidunt
          suscipit illum necessitatibus. Voluptate, sint dicta. repellat neque
          in incidunt suscipit illum necessitatibus. Voluptate, sint dicta..
        </p>
        <p className="text-[#3E424A] py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          vero veniam hic, perferendis enim provident! Qui voluptatem ab em
          ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero
          veniam hic, perferendis enim em ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi vero veniam hic, perferendis enim suscipit
          corrupti veritatis eum magnam, excepturi voluptates! nim em ipsum
          dolor sit amet consectetur adipisicing elit. Excepturi vero veniam
          hic, perferendis enim suscipit corrupti veritatis eum magnam,
          excepturi voluptates
        </p>
        <p className="text-[#3E424A] py-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
          minus. Laborum ex voluptatem iure praesentiumor, sit amet consectetur
          adipisicing elit. Iusto, minus. Laborum ex voluptatem iure
          praesentium.
        </p>
      </div>
      <div className="w-full border-t my-1"> </div>

      <h3 className="text-xl font-semibold py-2 text-[#0B1426]">
        Already Holding Bitcoin?
      </h3>
      <div className="flex gap-12">
        <div className="w-1/2 p-3 bg-gradient-to-r from-green-400 to-blue-700 flex  gap-5 rounded-lg">
          <div className="w-[140px] h-[140px] rounded-lg overflow-hidden">
            <img src={overViewImage} alt="" className="h-full w-full" />
          </div>
          <div className="flex flex-col gap-4 py-2">
            <span className="text-xl font-bold text-white">
              Calculate your <br /> Profits
            </span>
            <div className="bg-white text-black py-1 px-4 font-medium rounded-lg">
              <span>Check Now</span>
              <span>-&gt;</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-3 bg-gradient-to-r from-orange-400 to-red-600  flex  gap-5 rounded-lg">
          <div className="w-[140px] h-[140px] rounded-lg overflow-hidden">
            <img src={overViewImage} alt="" className="h-full w-full" />
          </div>
          <div className="flex flex-col gap-4 py-2">
            <span className="text-xl font-bold text-white">
              Calculate your tax <br /> liability
            </span>
            <div className="bg-white text-black py-1 px-4 font-medium rounded-lg">
              <span>Check Now</span>
              <span>-&gt;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t mt-5"> </div>

      <p className="text-[#3E424A] py-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur
        harum? Impedit ad dignissimos magnam culpa, voluptates nemo neque
        debitis sint pariatur nulla incidunt ab.
      </p>
    </section>
  );
};

export default CoinOverView;
