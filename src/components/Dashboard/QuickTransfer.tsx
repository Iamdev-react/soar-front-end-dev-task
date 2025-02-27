import React from "react";
import { SendIcon } from "../../assets/Icons";
import userImage from "../../assets/Icons/MaskGroup.svg";
import { QuickTransferProps } from "../../type/dahboardTypes";

const QuickTransfer: React.FC<QuickTransferProps> = ({ quickTransfer }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Quick Transfer
      </h2>
      <div className="bg-white rounded-3xl md:shadow p-4 h-[250px]">
        {/* Avatars Row */}
        <div className="flex items-center space-x-4 mb-12 pt-4">
          {quickTransfer.users.map((user,index) => (
            <div key={user.id || index} className="flex flex-col items-center">
              <img
                src={userImage}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-center mt-1">
                <p className="text-sm font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-400">{user.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transfer Input Row */}
        <div className="flex items-center justify-between">
          <label className="text-[#718EBF] font-normal text-xs md:text-base">
            Write Amount
          </label>
          <div className="relative bg-[#EDF1F7] rounded-4xl h-[50px] w-[230px]">
            <input
              type="text"
              placeholder="525.50"
              className="bg-transparent text-sm text-[#718EBF] outline-none flex-1 p-4 w-full pr-28"
            />
            <button className="bg-black text-white flex items-center rounded-full h-[50px] px-4 py-2 text-sm absolute right-0 top-0">
              Send <SendIcon style={{ marginLeft: "4px", width: "26px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
