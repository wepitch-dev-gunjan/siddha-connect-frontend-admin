import "./style.scss";

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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
