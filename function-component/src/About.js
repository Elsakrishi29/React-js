import React from 'react'

function About() {
  return (
    <section className='background-img'>
        <div className='container'>
        <div className='about-content'>
        <div className='aboutimg'>
            <img src='https://inspirothemes.com/polo/homepages/bakery/slider/title.png'></img>
        </div>    
            <div className='aboutimg-para'>
                <img src='https://inspirothemes.com/polo/homepages/bakery/slider/wheat-left.png'></img>
                <span className='about-para'>Fresh to you each Day!</span>
                <img src='https://inspirothemes.com/polo/homepages/bakery/slider/wheat-right.png'></img>
            </div>
            <div className='about-btn'>
                <button>Explore More</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About