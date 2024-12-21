import React from "react";
import "./style.scss"
import DealerDashFinHeader from "../components/dealerDashboardFinanceComp/dealerDashFinHeader";
import DealerDashLanding from "../components/dealerDashboardFinanceComp/dealerDashLanding";

const DealerDashboardFinance = () => {
    return(
        <div classname='dlr-dash-fin-main'>
            {<DealerDashFinHeader/>}
            {<DealerDashLanding />}
        </div>
    )
}

export default DealerDashboardFinance;