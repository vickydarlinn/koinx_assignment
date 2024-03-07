import { IoIosInformationCircle } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

const CoinSentiment = () => {
  return (
    <section className="rounded-lg bg-white p-5  " id="sentiment">
      <h3 className="py-2 text-2xl font-semibold text-[#0E1629]">Sentiment</h3>
      <div className="w-full overflow-hidden">
        <div className="flex items-center gap-2  py-3 font-semibold">
          <span className="text-[#45475B]">Key Events</span>
          <span className="text-[#7C7E8C]">
            <IoIosInformationCircle />
          </span>
        </div>
        <div className="relative ">
          <div className="flex gap-4  overflow-auto">
            {/* array of cards */}
            <div className="flex  h-48 w-96  min-w-96 gap-3 overflow-auto rounded-lg bg-[#E8F4FD] p-3">
              <div className=" h-auto w-40 self-start rounded-full bg-[#0082FF] p-3">
                <FaRegNewspaper className="h-full w-full text-white" />
              </div>
              <div className="text-sm">
                <h4 className="pb-1 font-medium text-[#1A1C1F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate.
                </h4>
                <p className="text-[#3E5766]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi magnam esse corrupti quia repellendus commodi nihil
                  consectetur explicabo facilis quasi error, reiciendis
                  doloremque saepe dolore.
                </p>
              </div>
            </div>
            {/* remove this */}
            <div className="flex  h-48 w-96  min-w-96 gap-3 overflow-auto rounded-lg bg-[#EBF9F4] p-3">
              <div className=" h-auto w-40 self-start rounded-full bg-[#0FBA83] p-3">
                <IoMdTrendingUp className="h-full w-full text-white" />
              </div>
              <div className="text-sm">
                <h4 className="pb-1 font-medium text-[#1A1C1F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate.
                </h4>
                <p className="text-[#3E5766]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi magnam esse corrupti quia repellendus commodi nihil
                  consectetur explicabo facilis quasi error, reiciendis
                  doloremque saepe dolore.
                </p>
              </div>
            </div>
            <div className="flex  h-48 w-96  min-w-96 gap-3 overflow-auto rounded-lg bg-[#E8F4FD] p-3">
              <div className=" h-auto w-40 self-start rounded-full bg-[#0082FF] p-3">
                <FaRegNewspaper className="h-full w-full text-white" />
              </div>
              <div className="text-sm">
                <h4 className="pb-1 font-medium text-[#1A1C1F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate.
                </h4>
                <p className="text-[#3E5766]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi magnam esse corrupti quia repellendus commodi nihil
                  consectetur explicabo facilis quasi error, reiciendis
                  doloremque saepe dolore.
                </p>
              </div>
            </div>
            <div className="flex  h-48 w-96  min-w-96 gap-3 overflow-auto rounded-lg bg-[#EBF9F4] p-3">
              <div className=" h-auto w-40 self-start rounded-full bg-[#0FBA83] p-3">
                <IoMdTrendingUp className="h-full w-full text-white" />
              </div>
              <div className="text-sm">
                <h4 className="pb-1 font-medium text-[#1A1C1F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate.
                </h4>
                <p className="text-[#3E5766]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi magnam esse corrupti quia repellendus commodi nihil
                  consectetur explicabo facilis quasi error, reiciendis
                  doloremque saepe dolore.
                </p>
              </div>
            </div>
            <div className="flex  h-48 w-96  min-w-96 gap-3 overflow-auto rounded-lg bg-[#E8F4FD] p-3">
              <div className=" h-auto w-40 self-start rounded-full bg-[#0082FF] p-3">
                <FaRegNewspaper className="h-full w-full text-white" />
              </div>
              <div className="text-sm">
                <h4 className="pb-1 font-medium text-[#1A1C1F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate.
                </h4>
                <p className="text-[#3E5766]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi magnam esse corrupti quia repellendus commodi nihil
                  consectetur explicabo facilis quasi error, reiciendis
                  doloremque saepe dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-2 top-1/2 translate-y-[-50%] cursor-pointer rounded-full bg-white p-3">
            <MdArrowForwardIos className="h-auto w-4" />
          </div>
        </div>
      </div>
      {/* analysis analyst */}
      <div className="pt-4">
        <div className="flex items-center gap-2 py-2 font-semibold">
          <span className="text-[#45475B]">Analyst Estimates </span>
          <span className="text-[#7C7E8C]">
            <IoIosInformationCircle />
          </span>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EBF9F4] text-2xl text-[#0FBA83]">
            76%
          </div>
          <div className=" flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-10 text-[#7C7E8C] ">Buy</span>
              <div className=" h-2 w-[calc(76%)] rounded-sm bg-[#02b386] md:w-[calc(384px_*_76/_100)]"></div>
              <span className="text-[#7C7E8C]">76%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-10 text-[#7C7E8C]">Hold</span>
              <div className=" h-2 w-[calc(8%)] rounded-sm bg-[#c7c8ce] md:w-[calc(384px_*_8/_100)]"></div>
              <span className="text-[#7C7E8C]">8%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-10 text-[#7C7E8C]">Sell</span>
              <div className=" h-2 w-[calc(16%)] rounded-sm border bg-[#f7324c] md:w-[calc(384px_*_16/_100)]"></div>
              <span className="text-[#7C7E8C]">16%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinSentiment;
