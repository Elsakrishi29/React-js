import React from "react";
import image from './images/team-2.jpg';
function Content(){
    return(
        <section className='backgroung-img'>
      <div className='container'>
        <div className='content-1'>
            <div className='images'>
                <img src={image}></img>
            </div>
            <h1 className='h1'>KRISHNAVENI</h1>
            <p className='dev'>Front-End Developer</p>
        </div>
        <div className='content-1'>
              <h1 className='hello'>Hello!</h1>
              <h3 className='what'>Here's who I am & what I do</h3>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <div className='btn'>
              <button>Click Here</button>
              </div>
        </div>
    </div>
    </section>
    )
}

export default Content