import React from "react";
import { HiCreditCard, HiCurrencyDollar } from "react-icons/hi";
import { FaPaypal } from "react-icons/fa";
import { RecentTransactionsProps } from "../../type/dahboardTypes";

const getIcon = (icon: string) => {
  switch (icon) {
    case "card":
      return <HiCreditCard className="text-xl text-yellow-500" />;
    case "paypal":
      return <FaPaypal className="text-xl text-blue-500" />;
    case "user":
    default:
      return <HiCurrencyDollar className="text-xl text-teal-500" />;
  }
};

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Recent Transactions
      </h2>
      <div className="bg-white p-4 rounded-3xl">
        <ul className="space-y-3">
          {transactions.map((tx, index) => {
            const isPositive = tx.amount > 0;
            return (
              <li key={index} className="flex items-center justify-between p-2">
                {/* Left side: icon + text/date */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                    {getIcon(tx.icon)}
                  </div>
                  <div>
                    <p className="text-base font-medium text-[#232323]">
                      {tx.title}
                    </p>
                    <p className="text-xs text-gray-400">{tx.date}</p>
                  </div>
                </div>
                {/* Right side: amount */}
                <div
                  className={`text-sm font-semibold ${
                    isPositive ? "text-[#41D4A8]" : "text-red-500"
                  }`}
                >
                  {isPositive
                    ? `+${tx.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}`
                    : tx.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecentTransactions;
