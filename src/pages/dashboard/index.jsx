import "./style.scss";
import Demographic from '../../components/demoGraphics';

const Dashboard = () => {
  return (
    <div className="table-dashboard">
      <div className="TableDashboard-container">
        <div className="business-dashbaord">

          <div className="head">
            <p>Due date for filling TDS</p>
          </div>
          <div className="dashboard-table">
            <table>
              <thead>
                <tr>
                  <th>Quarter</th>
                  <th>Quarter Period</th>
                  <th>Quarter Ending</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st Quarter</td>
                  <td>April - June</td>
                  <td>30 June</td>
                  <td>31 July</td>
                </tr>
                <tr>
                  <td>1st Quarter</td>
                  <td>April - June</td>
                  <td>30 June</td>
                  <td>31 July</td>
                </tr>
                <tr>
                  <td>1st Quarter</td>
                  <td>April - June</td>
                  <td>30 June</td>
                  <td>31 July</td>
                </tr>
                <tr>
                  <td>1st Quarter</td>
                  <td>April - June</td>
                  <td>30 June</td>
                  <td>31 July</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <h1>Sales Dashboard</h1> */}
          {/* import Demographic */}
<Demographic />
          {/* <SalesDashboard /> */}

          {/* <div className="widgets-container">
          {/* <h1>Sales Dashboard</h1> */}

          {/* <SalesDashboard /> */}

          {/* <div className="widgets-container">
            <Widget heading="TOTAL SALES" value="$10000" />
            <Widget heading="TOP PRODUCTS" value="1000" />
            <Widget heading="TOP REGIONS" value="1000" />
            <Widget heading="AVERAGE SALES" value="$5000" />
          </div> */}
          {/* <div className="chart-row">
            <div className="col">
              <GroupedBarChart data={activityData} />
            </div>
            <div className="col">
              <LineChart data={earningsData} />
            </div>
            <div className="col">
              <LineChart data={earningsData} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
