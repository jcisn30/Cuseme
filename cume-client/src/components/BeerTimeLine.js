import React from "react";
import BeerList from "../containers/BeerList";

const BeerTimeLine = props => {
	return (
		<div className="ui four column doubling stackable grid container">
		<div className="ui red ribbon label">Hold My Beer</div>
			<div className="row">
			<BeerList />
			</div>
		</div>
	);
};

export default BeerTimeLine;