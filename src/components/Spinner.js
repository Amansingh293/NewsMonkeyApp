import React, { Component } from 'react'
import Brokencircle from "./Brokencircle.gif"

export class spinner extends Component {
  render() {
    return (
      <div className='text-center mt-3'>
        <img src={Brokencircle} alt="Brokencircle"/>
        </div>
    )
  }
}

export default spinner