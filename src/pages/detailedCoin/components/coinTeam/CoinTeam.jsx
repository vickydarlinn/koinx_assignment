import profilePic from "../../../../assets/images/profile.avif";

const CoinTeam = () => {
  return (
    <section className="bg-white p-5 rounded-lg  " id="team">
      <h2 className="text-[#0E1629] text-2xl font-semibold py-2">Team</h2>
      <p className="text-[#3E424A] py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        ducimus? Cumque eos, cum corporis quaerat ab culpa atque corrupti optio
        quis provident aut dolores iste eos, cum corporis quaerat ab culpa
        atque.
      </p>
      <div className="flex flex-col py-2 gap-5">
        <div className="flex gap-4  p-4 bg-[#E8F4FD] rounded-lg">
          <div className="flex flex-col items-center ">
            <div className="w-32 h-auto  rounded-lg overflow-hidden">
              {" "}
              <img
                src={profilePic}
                className="object-cover  w-full h-auto "
                alt=""
              />
            </div>
            <span className="text-[#0E1629] font-semibold pt-2">
              John Smith
            </span>
            <span className="text-sm text-[#798F9B]">Designation here</span>
          </div>
          <p className="text-[#0E1629]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            recusandae quae a porro eos earum id corporis soluta, repudiandae in
            delectus. Molestias animi adipisci odio possimus quia corrupti a
            incidunt quibusdam itaque. Omnis reiciendis laborum aliquam
            perspiciatis sed doloribulestias animi adipisci odio possimus quia
            corrupti a incidunt quibusdam itaque. Omnis reiciendis laborum
            aliquam perspiciatis sed doloribus, impedit porro? Adipisci, ad
            voluptas totam sit labore facilis perferendis quibusdam.
          </p>
        </div>
        <div className="flex gap-4  p-4 bg-[#E8F4FD] rounded-lg">
          <div className="flex flex-col items-center ">
            <div className="w-32 h-auto  rounded-lg overflow-hidden">
              {" "}
              <img
                src={profilePic}
                className="object-cover  w-full h-auto "
                alt=""
              />
            </div>
            <span className="text-[#0E1629] font-semibold pt-2">
              John Smith
            </span>
            <span className="text-sm text-[#798F9B]">Designation here</span>
          </div>
          <p className="text-[#0E1629]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            recusandae quae a porro eos earum id corporis soluta, repudiandae in
            delectus. Molestias animi adipisci odio possimus quia corrupti a
            incidunt quibusdam itaque. Omnis reiciendis laborum aliquam
            perspiciatis sed doloribulestias animi adipisci odio possimus quia
            corrupti a incidunt quibusdam itaque. Omnis reiciendis laborum
            aliquam perspiciatis sed doloribus, impedit porro? Adipisci, ad
            voluptas totam sit labore facilis perferendis quibusdam.
          </p>
        </div>{" "}
        <div className="flex gap-4  p-4 bg-[#E8F4FD] rounded-lg">
          <div className="flex flex-col items-center ">
            <div className="w-32 h-auto  rounded-lg overflow-hidden">
              {" "}
              <img
                src={profilePic}
                className="object-cover  w-full h-auto "
                alt=""
              />
            </div>
            <span className="text-[#0E1629] font-semibold pt-2">
              John Smith
            </span>
            <span className="text-sm text-[#798F9B]">Designation here</span>
          </div>
          <p className="text-[#0E1629]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            recusandae quae a porro eos earum id corporis soluta, repudiandae in
            delectus. Molestias animi adipisci odio possimus quia corrupti a
            incidunt quibusdam itaque. Omnis reiciendis laborum aliquam
            perspiciatis sed doloribulestias animi adipisci odio possimus quia
            corrupti a incidunt quibusdam itaque. Omnis reiciendis laborum
            aliquam perspiciatis sed doloribus, impedit porro? Adipisci, ad
            voluptas totam sit labore facilis perferendis quibusdam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoinTeam;
