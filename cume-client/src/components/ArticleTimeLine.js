import React from "react";
import ArticleList from "../containers/ArticleList";

const ArticleTimeLine = props => {
	return (
		<div className="ui four column doubling stackable grid container">
		<div className="ui red ribbon label">Funny Reads</div>
			<div className="row">
			<ArticleList />
			</div>
		</div>
	);
};

export default ArticleTimeLine;