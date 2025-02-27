import React from "react";
import { CardDarkIcon, CardLightIcon, ChipDarkIcon, ChipIcon} from "../../assets/Icons";
import { MyCardsProps } from "../../type/dahboardTypes";

const MyCards: React.FC<MyCardsProps> = ({ cards }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[22px] font-semibold text-[#343C6A]">My Cards</h2>
        <button className="text-[17px] font-semibold text-[#343C6A] hover:underline cursor-pointer">
          See All
        </button>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-4">
        {cards.map((card, index) => {
          const isPrimary = card.type === "primary";
          return (
            <div
              key={index}
              className={`flex-1 ${
                isPrimary
                  ? "bg-gradient-to-br from-[#5B5A6F] to-black text-white"
                  : "bg-white text-gray-800 border border-gray-200"
              } rounded-3xl pt-6 relative overflow-hidden`}
            >
              {/* Balance */}
              <div className="flex justify-between mb-3 px-4">
                <div>
                  <p
                    className={`text-sm mb-0 ${
                      isPrimary ? "text-white" : "text-[#718EBF]"
                    }`}
                  >
                    Balance
                  </p>
                  <p
                    className={`text-xl font-semibold mb-4 ${
                      isPrimary ? "text-white" : "text-[#343C6A]"
                    }`}
                  >
                    ${card.balance.toLocaleString()}
                  </p>
                </div>

                {isPrimary ? (
                  <ChipIcon style={{ height: "34px", width: "34px" }} />
                ) : (
                  <ChipDarkIcon style={{ height: "34px", width: "34px" }} />
                )}
              </div>

              {/* Card Info */}
              <div className="flex items-end px-4">
                <div>
                  <p
                    className={`text-xs font-normal uppercase ${
                      isPrimary ? "text-[#FFFFFFB2]" : "text-[#718EBF]"
                    }`}
                  >
                    Card Holder
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      isPrimary ? "text-white" : "text-[#343C6A]"
                    }`}
                  >
                    {card.cardHolder}
                  </p>
                </div>
                <div className="pl-20">
                  <p
                    className={`text-xs font-normal uppercase ${
                      isPrimary ? "text-[#FFFFFFB2]" : "text-[#718EBF]"
                    }`}
                  >
                    Valid Thru
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      isPrimary ? "text-white" : "text-[#343C6A]"
                    }`}
                  >
                    {card.validThru}
                  </p>
                </div>
              </div>

              {/* Card Number & Icon */}
              <div
                className={`px-4 flex justify-between items-center mt-6 pt-4 pb-4 ${
                  isPrimary ? "bg-opacity-1" : "border-t border-[#DFEAF2]"
                }`}
              >
                <p
                  className={`text-lg font-medium tracking-widest ${
                    isPrimary ? "text-white" : "text-[#343C6A]"
                  }`}
                >
                  {card.cardNumber}
                </p>
                {isPrimary ? (
                  <CardLightIcon style={{ width: "44px", height: "30px" }} />
                ) : (
                  <CardDarkIcon style={{ width: "44px", height: "30px" }} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCards;
