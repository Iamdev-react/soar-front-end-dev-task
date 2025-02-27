import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import WeeklyActivityChart from "../../components/Dashboard/WeeklyActivityChart";
import BalanceHistoryChart from "../../components/Dashboard/BalanceHistoryChart";
import ExpenseStatisticsChart from "../../components/Dashboard/ExpenseStatisticsChart";
import MyCards from "../../components/Dashboard/MyCards";
import QuickTransfer from "../../components/Dashboard/QuickTransfer";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import { fetchDashboardData } from "../../redux/dasboard/dashboardAPI";
import { AppDispatch, RootState } from "../../config/store";
import Loader from "../../loader/Loader";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.dashboard
  );

  useEffect(() => {
    if(data?.length <= 0) {
      dispatch(fetchDashboardData());
    }
  }, [dispatch]);
  
  const dashboard = useMemo(() => (data?.length ? data[0] : {}), [data]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!data.length) return <p>No data available</p>;

  return (
    <div>
      <div className="p-4 md:p-6 bg-white md:bg-transparent">
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6 mb-6">
          <div className="col-12 lg:col-span-2">
            <MyCards cards={dashboard.cards} />
          </div>
          <div>
            <RecentTransactions transactions={dashboard.recentTransactions} />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-6 mb-4">
          <div className="col-12 lg:col-span-2">
            <WeeklyActivityChart weeklyActivity={dashboard.weeklyActivity} />
          </div>
          <div>
            <ExpenseStatisticsChart expense={dashboard.expenseStatistics} />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-6 mb-4">
          <div>
            <QuickTransfer quickTransfer={dashboard.quickTransfer} />
          </div>
          <div className="col-12 lg:col-span-2">
            <BalanceHistoryChart balanceHistory={dashboard.balanceHistory} />
          </div>
        </div>
      </div>
    </div>
  );
}
