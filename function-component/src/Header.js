import React from 'react'

function Header() {
  return (
    <section>
    <div className="">
		    <div className="header" id="gototop">
					<div className="navigation">
						<div className="nav-header">	
							<h1>POLO</h1>
						</div>
							<div className="navbar">
								<nav>
									<a href="#" className="color" id="change">HOME</a>
									<a href="#" className="color">LAYOUT</a>
									<a href="#" className="color">FEATURES</a>
									<a href="#" className="color">ELEMENTS</a>
									<a href="#"className="color">PAGES</a>
									<a href="#"className="color">PORTFOLIO</a>
									<a href="#"className="color">PLOG</a>
                  					<a href="#"className="color">SHOP</a>
								</nav>
			        		</div>	
								<div className="bars">
									<i className="fa fa-bars"></i>
								</div>
					</div>
					</div>
    </div>
    </section>
  )
}

export default Header