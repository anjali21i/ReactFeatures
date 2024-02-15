import React from 'react'
import PropTypes from 'prop-types';
import Portfolio from "./Portfolio";

const Home = props => {
  return (
    <div className='wrap_container'>
      <div className='wrap_left'>
        {/* <Portfolio /> */}
      </div>
      <div className='wrap_right'>
        i am right
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home;