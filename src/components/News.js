
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Brokencircle from './Spinner.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string 
  }

constructor(props){
        super(props);
          console.log("news comp");
            this.state = {
                articles: [],
                loading: false,
                page: 1,
                totalResults: 0
            } 
            document.title = `NewsMonkey - ${this.props.category.toUpperCase()}`       /*used DOM here to insert title in title*/
        }

async updateNews(){
  this.props.setProgress(10)
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  this.props.setProgress(30)
  let parsedData = await data.json();
  this.props.setProgress(70)
  // console.log(parsedData);
  this.setState({articles: parsedData.articles,
                loading: false,
                totalResults: parsedData.totalResults})
  this.props.setProgress(100)
}

  async componentDidMount(){
      this.updateNews();
  }

 fetchMoreData = async ()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parsedData = await data.json();
  // console.log(parsedData);
  this.setState({articles: this.state.articles.concat(parsedData.articles),
                loading: false,
                totalResults: parsedData.totalResults
                })

};

  render() {
    return (
      <>
        <h1 className='text-center my-3'>NewsMonkey - TOP {this.props.category.toUpperCase()} HADLINES</h1> 
        <InfiniteScroll
           dataLength={this.state.articles.length} //This is important field to render the next data
           next={this.fetchMoreData}
           hasMore={this.state.articles !== this.state.totalResults}
           loader={<h4><Brokencircle/></h4>}
           >
            <div className='container my-2'>
           <div className='row my-2'>            
            {this.state.articles.map((element, index)=>{
            return <div className='col-md-4 my-3' key={index}>  
            {/* since each mapping of array has its unique index thats why using index in key will no overlap keys of diffrerent components */}
            <NewsItem myTitle={element.title===null?"":element.title.slice(0,40)} description={element.description===null?"":element.description.slice(0,80)}
            urlToImage={element.urlToImage===null?"https://www.shutterstock.com/search/no-picture-available":element.urlToImage} 
            url={element.url} author={element.author === null?"Unknown":element.author} date={element.publishedAt} source={element.source.name}
            /> 
            </div>
            })}
            </div>
            </div>
            </InfiniteScroll>
          
    </>
  )}
}

export default News