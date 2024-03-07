import overViewImage from "../../../../assets/images/overview.avif";

const CoinOverView = () => {
  return (
    <section className="rounded-lg bg-white p-5  " id="overview">
      <h2 className="py-2 text-2xl font-semibold text-[#0E1629]">
        About Bitcoin
      </h2>

      <div>
        <h3 className="py-2 text-xl font-semibold text-[#0B1426]">
          What is Bitcoin?
        </h3>
        <p className="py-2 text-[#3E424A]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
          ullam ea. Nam expedita ullam repudiandae quos praesentium odit dolorem
          commodi nemo cupiditate in quis, totam voluptatum debitis.
          Repudiandae, nisi quos!
        </p>
      </div>
      <div className="my-1 w-full border-t"> </div>
      <div>
        <h3 className="py-2 text-xl font-semibold text-[#0B1426]">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="py-2 text-[#3E424A]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          consequuntur repellat neque in incidunt suscipit illum necessitatibus.
          Voluptate, sint dicta. repellat neque in incidunt suscipit illum
          necessitatibus. Voluptate, sint dicta pellat neque in incidunt
          suscipit illum necessitatibus. Voluptate, sint dicta. repellat neque
          in incidunt suscipit illum necessitatibus. Voluptate, sint dicta..
        </p>
        <p className="py-2 text-[#3E424A]">
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
        <p className="py-2 text-[#3E424A]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
          minus. Laborum ex voluptatem iure praesentiumor, sit amet consectetur
          adipisicing elit. Iusto, minus. Laborum ex voluptatem iure
          praesentium.
        </p>
      </div>
      <div className="my-1 w-full border-t"> </div>

      <h3 className="py-2 text-xl font-semibold text-[#0B1426]">
        Already Holding Bitcoin?
      </h3>
      <div className="flex flex-col md:flex-row md:gap-12 gap-4">
        <div className="flex md:w-1/2 gap-5 rounded-lg bg-gradient-to-r from-green-400  to-blue-700 p-3">
          <div className="h-[140px] w-[140px] overflow-hidden rounded-lg">
            <img src={overViewImage} alt="" className="h-full w-full" />
          </div>
          <div className="flex flex-col gap-4 py-2">
            <span className="text-xl font-bold text-white">
              Calculate your <br /> Profits
            </span>
            <div className="rounded-lg bg-white px-4 py-1 font-medium text-black">
              <span>Check Now</span>
              <span>-&gt;</span>
            </div>
          </div>
        </div>
        <div className="flex md:w-1/2 gap-5 rounded-lg bg-gradient-to-r  from-orange-400  to-red-600 p-3">
          <div className="h-[140px] w-[140px] overflow-hidden rounded-lg">
            <img src={overViewImage} alt="" className="h-full w-full" />
          </div>
          <div className="flex flex-col gap-4 py-2">
            <span className="text-xl font-bold text-white">
              Calculate your tax <br /> liability
            </span>
            <div className="rounded-lg bg-white px-4 py-1 font-medium text-black">
              <span>Check Now</span>
              <span>-&gt;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full border-t"> </div>

      <p className="py-2 text-[#3E424A]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur
        harum? Impedit ad dignissimos magnam culpa, voluptates nemo neque
        debitis sint pariatur nulla incidunt ab.
      </p>
    </section>
  );
};

export default CoinOverView;
