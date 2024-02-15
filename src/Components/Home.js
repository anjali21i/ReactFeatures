import React from 'react'
import PropTypes from 'prop-types'

const Home = props => {
  return (
    <div className='wrap_container'>
      <div className='wrap_left'>
        i am left
      </div>
      <div className='wrap_right'>
        i am right
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home;