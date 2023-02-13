import React from 'react'

export const Banner = () => {
  return (
    <div className='container'>
    <div className='banner-flex'>
    <div className='banner-img'>
        <div className='banner-img-1'>
            <img src='https://inspirothemes.com/polo/homepages/bakery/images/bread-1.jpg'></img>
        </div>
    </div>
    <div className='banner-content'>
        <h4 className=''>Our Secret</h4>
        <h1 className='banner-head'>Baked with Love</h1>
        <p>The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.</p>
        <div className='banner-btn'>
            <button>Learn More</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Banner
