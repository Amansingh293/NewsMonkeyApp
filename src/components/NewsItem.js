// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
  // static propTypes = {}

  render() {
    let {myTitle, description, urlToImage, url, author, date, source} = this.props
    return (
      <div><div className="card" >
      <img src={urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <span className="position-absolute top-0 bg-danger border-light" style={{zIndex: 1, right: "0", borderRadius: "10%", padding: "2.5px", textSize:"1rem"}}>{source}</span>
        <h5 className="card-title">{myTitle}.... </h5>
        <p className="card-text">{description}....</p>
        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
        <a href={url} className="btn btn-primary btn-dark">Read More</a>
      </div>

    </div></div>
    ) 
  }
}

export default NewsItem