import React from "react";
import "./style.scss";
import DealerDashFinHeader from "../components/dealerDashboardFinanceComp/dealerDashFinHeader";

const DealerDashboardFinance = () => {
    return(
        <div classname='dlr-dash-fin-main'>
            {<DealerDashFinHeader/>}
        </div>
    )
}

export default DealerDashboardFinance;