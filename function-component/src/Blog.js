import React from 'react'

export const Blog = () => {
  return (
    <section className='blog-bgd menu-top'>
        <div className='container'>
            <div className='content-polo'>
                <img src='https://inspirothemes.com/polo/homepages/bakery/images/heading-icon-left.png'></img>
                <span className='our-blog'>Our Blog</span>
                <img src='https://inspirothemes.com/polo/homepages/bakery/images/heading-icon-right.png'></img>
            </div>
            <div className='blog-menu-img'>
                <div className='blog-col'>
                <div className='col-2'>
                    <div className='food-img-2'>
                        <a href=''><img src='https://inspirothemes.com/polo/homepages/bakery/images/gallery/1.jpg'></img></a>
                    </div>
                    <div className='blog-menu-content'>
                        <p className='blog-time'>Jan 21, 2017 33 Comments</p>
                        <h3 className='blog-head'>Standard post with a single image</h3>
                        <p className='blog-para'>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                        <a href='' className='blog-more'>READ MORE</a>
                    </div>
                </div>
                </div>
                
                
                <div className='blog-col'>
                <div className='col-2'>
                    <div className='food-img-2'>
                        <a href=''><img src='https://inspirothemes.com/polo/homepages/bakery/images/gallery/2.jpg'></img></a>
                    </div>
                    <div className='blog-menu-content'>
                    <p className='blog-time'>Jan 21, 2017 33 Comments</p>
                        <h3 className='blog-head'>Standard post with a single image</h3>
                        <p className='blog-para'>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                        <a href='' className='blog-more'>READ MORE</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog