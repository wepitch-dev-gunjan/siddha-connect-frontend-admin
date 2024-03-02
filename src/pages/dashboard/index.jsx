import "./style.scss";
import Demographic from '../../components/demoGraphics';
import RightDashboard from "../../components/rightDashboard";
import BussinessDashboard from "../../components/bussinessDashboard";

const Dashboard = () => {
  return (
    <div className="table-dashboard">
      <div className="TableDashboard-container">
        <Demographic />
        <BussinessDashboard />
        <RightDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
