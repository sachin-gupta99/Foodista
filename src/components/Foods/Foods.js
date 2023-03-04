import { Fragment } from "react";
import FoodList from "./FoodList";

import './Foods.css';
import FoodSummary from "./FoodSummary";

const Foods = props => {
    return <Fragment>
        <FoodSummary  />
        <FoodList />
    </Fragment>
};

export default Foods;