import { useState } from "react";
import Widget from "../../components/dashboardComponents/widget";
import "./style.scss";
import { CounsellorData, UserData, EarningsData, ActivityData } from '../../components/dashboardComponents/Data';
import LineChart from "../../components/dashboardComponents/lineChart";
import GroupedBarChart from "../../components/dashboardComponents/groupedBarChart";
import RecentActivityTable from "../../components/recentActivityTable";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((el) => el.month),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map(el => el.userGain),
      },
      {
        label: "Users Lost",
        data: UserData.map(el => el.userLost),
      },

    ]
  })
  const [counsellorData, setCounsellorData] = useState({
    labels: CounsellorData.map((el) => el.month),
    datasets: [
      {
        label: "Counsellors Gained",
        data: CounsellorData.map(el => el.counsellorGain),
      },
      {
        label: "Counsellors Lost",
        data: CounsellorData.map(el => el.counsellorLost),
      },

    ]
  })
  const [earningsData, setEarningsData] = useState({
    labels: EarningsData.map((el) => el.month),
    datasets: [
      {
        label: "Earnings Gained",
        data: EarningsData.map(el => el.earning),
      },
    ]
  })
  const [activityData, setActivityData] = useState({
    labels: ActivityData.map((el) => el.day),
    datasets: [
      {
        label: "Online Users",
        data: ActivityData.map(el => el.onlineUsers),
      },
      {
        label: "Online Counsellors",
        data: ActivityData.map(el => el.onlineCounsellors),
      },
    ]
  })
  return (
    <div className="all-dashboard">
      <div className="Dashboard-container">
        <div className="business-dashbaord">
          <h1>Business Dashboard</h1>
          <div className="widgets-container">
            <Widget heading="TOTAL SALES" value="$10000" />
            <Widget heading="TOP PRODUCTS" value="1000" />
            <Widget heading="TOP REGIONS" value="1000" />
            <Widget heading="AVERAGE SALES" value="$5000" />
          </div>
          <div className="chart-row">
            <div className="col">
              <GroupedBarChart data={activityData} />
            </div>
            <div className="col">
              <LineChart data={earningsData} />
            </div>
            <div className="col">
              <LineChart data={earningsData} />
            </div>
          </div>
        </div>

        {/* recent payments */}
        {/* <RecentPayments /> */}
        <div className="recent-activity">
          <h1>Recent Activity</h1>
          <RecentActivityTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
