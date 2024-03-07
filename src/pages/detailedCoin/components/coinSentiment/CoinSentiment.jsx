import { IoIosInformationCircle } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

const CoinSentiment = () => {
  return (
    <section className="bg-white p-5 rounded-lg  " id="sentiment">
      <h3 className="text-[#0E1629] text-2xl font-semibold py-2">Sentiment</h3>
      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-2  font-semibold py-3">
          <span className="text-[#45475B]">Key Events</span>
          <span className="text-[#7C7E8C]">
            <IoIosInformationCircle />
          </span>
        </div>
        <div className="relative ">
          <div className="flex gap-4  overflow-auto">
            {/* array of cards */}
            <div className="flex  min-w-96 w-96  h-48 p-3 rounded-lg gap-3 overflow-auto bg-[#E8F4FD]">
              <div className=" rounded-full w-40 h-auto p-3 self-start bg-[#0082FF]">
                <FaRegNewspaper className="w-full h-full text-white" />
              </div>
              <div className="text-sm">
                <h4 className="text-[#1A1C1F] pb-1 font-medium">
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
            <div className="flex  min-w-96 w-96  h-48 p-3 rounded-lg gap-3 overflow-auto bg-[#EBF9F4]">
              <div className=" rounded-full w-40 h-auto p-3 self-start bg-[#0FBA83]">
                <IoMdTrendingUp className="w-full h-full text-white" />
              </div>
              <div className="text-sm">
                <h4 className="text-[#1A1C1F] pb-1 font-medium">
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
            <div className="flex  min-w-96 w-96  h-48 p-3 rounded-lg gap-3 overflow-auto bg-[#E8F4FD]">
              <div className=" rounded-full w-40 h-auto p-3 self-start bg-[#0082FF]">
                <FaRegNewspaper className="w-full h-full text-white" />
              </div>
              <div className="text-sm">
                <h4 className="text-[#1A1C1F] pb-1 font-medium">
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
            <div className="flex  min-w-96 w-96  h-48 p-3 rounded-lg gap-3 overflow-auto bg-[#EBF9F4]">
              <div className=" rounded-full w-40 h-auto p-3 self-start bg-[#0FBA83]">
                <IoMdTrendingUp className="w-full h-full text-white" />
              </div>
              <div className="text-sm">
                <h4 className="text-[#1A1C1F] pb-1 font-medium">
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
            <div className="flex  min-w-96 w-96  h-48 p-3 rounded-lg gap-3 overflow-auto bg-[#E8F4FD]">
              <div className=" rounded-full w-40 h-auto p-3 self-start bg-[#0082FF]">
                <FaRegNewspaper className="w-full h-full text-white" />
              </div>
              <div className="text-sm">
                <h4 className="text-[#1A1C1F] pb-1 font-medium">
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
          <div className="absolute right-2 top-1/2 translate-y-[-50%] bg-white rounded-full p-3 cursor-pointer">
            <MdArrowForwardIos className="w-4 h-auto" />
          </div>
        </div>
      </div>
      {/* analysis analyst */}
      <div className="pt-4">
        <div className="flex items-center gap-2 font-semibold py-2">
          <span className="text-[#45475B]">Analyst Estimates </span>
          <span className="text-[#7C7E8C]">
            <IoIosInformationCircle />
          </span>
        </div>
        <div className="flex gap-10 items-center">
          <div className="text-2xl rounded-full text-[#0FBA83] bg-[#EBF9F4] w-20 h-20 flex items-center justify-center">
            76%
          </div>
          <div className=" flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-[#7C7E8C] w-10 ">Buy</span>
              <span className="block w-[calc(384px_*_76/_100)] h-2 bg-[#02b386] rounded-sm"></span>
              <span className="text-[#7C7E8C]">76%</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-[#7C7E8C] w-10">Hold</span>
              <span className="block w-[calc(384px_*_8/_100)] h-2 bg-[#c7c8ce] rounded-sm"></span>
              <span className="text-[#7C7E8C]">8%</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-[#7C7E8C] w-10">Sell</span>
              <span className="block w-[calc(384px_*_16/_100)] h-2 bg-[#f7324c] rounded-sm"></span>
              <span className="text-[#7C7E8C]">16%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinSentiment;
