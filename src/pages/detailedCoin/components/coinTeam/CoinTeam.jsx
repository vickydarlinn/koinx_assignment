import profilePic from "../../../../assets/images/profile.avif";

const CoinTeam = () => {
  return (
    <section className="rounded-lg bg-white p-5  " id="team">
      <h2 className="py-2 text-2xl font-semibold text-[#0E1629]">Team</h2>
      <p className="py-2 text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        ducimus? Cumque eos, cum corporis quaerat ab culpa atque corrupti optio
        quis provident aut dolores iste eos, cum corporis quaerat ab culpa
        atque.
      </p>
      <div className="flex flex-col gap-5 py-2">
        {Array(3)
          ?.fill()
          ?.map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg  bg-[#E8F4FD] p-4 md:flex-row"
            >
              <div className="flex flex-col items-center ">
                <div className="h-auto w-32  overflow-hidden rounded-lg">
                  {" "}
                  <img
                    src={profilePic}
                    className="h-auto  w-full object-cover "
                    alt=""
                  />
                </div>
                <span className="pt-2 font-semibold text-[#0E1629]">
                  John Smith
                </span>
                <span className="text-sm text-[#798F9B]">Designation here</span>
              </div>
              <p className="text-[#0E1629]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, recusandae quae a porro eos earum id corporis soluta,
                repudiandae in delectus. Molestias animi adipisci odio possimus
                quia corrupti a incidunt quibusdam itaque. Omnis reiciendis
                laborum aliquam perspiciatis sed doloribulestias animi adipisci
                odio possimus quia corrupti a incidunt quibusdam itaque. Omnis
                reiciendis laborum aliquam perspiciatis sed doloribus, impedit
                porro? Adipisci, ad voluptas totam sit labore facilis
                perferendis quibusdam.
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CoinTeam;
