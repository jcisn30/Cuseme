import React from "react";
import KidList from "../containers/KidList";

const KidTimeLine = props => {
	return (
		<div className="ui four column doubling stackable grid container">
		<div className="ui red ribbon label">Kids</div>
			<div className="row">
			<KidList />
			</div>
		</div>
	);
};

export default KidTimeLine;