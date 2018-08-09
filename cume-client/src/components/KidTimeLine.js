import React from "react";
import KidList from "../containers/KidList";

// ---- Main Kid section TimeLine ---- //
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