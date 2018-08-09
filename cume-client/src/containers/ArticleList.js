import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchArticles} from "../store/actions/articles";
import ArticleItem from "../components/ArticleItem";


// ---- Article Item List Comnponent ---- //
class ArticleList extends Component {
	componentDidMount(){
		this.props.fetchArticles();
	
	}
	

	
	render(){
		const {articles} = this.props;
		let articleList = articles.filter(a => a.active).map (a => (
    
    <ArticleItem
      key={a._id}
      idk={a._id}
      date={a.createdAt}
      username={a.username}
      text={a.text}
      profileImageUrl={a.profileImageUrl}
      title={a.title}
      image={a.image}
      URL={a.URL}
      likes={a.likes}
      caption={a.caption}
      description={a.description}
      create_date={a.create_date}
      active={a.active}
      
    />
    

	));
	
	return articleList;
   
	}
}
	
	
	

	
function mapStateToProps(state, ownProps){
	return{
		articles: state.articles
	};
}




export default connect(mapStateToProps, {fetchArticles})(ArticleList);