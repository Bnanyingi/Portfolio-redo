import React from 'react';
import { Grid, Cell } from 'react-mdl';

function Home() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
         <Grid classname="landing-grid">
             <Cell col={12}>
                 <img
                    src="/images/image1.png"
                    alt="avatar"
                    className="avatar-img"
                 />
                 <div className="banner-text">
                     <h1>Front-End Developer and Software Engineer</h1>

                     <hr/>

                   <p>HTML/CSS | React | Python | Angular | JavaScript | NodeJs </p>
                   <div className="social-links">

                      {/*LinkedIn */}
                       <a href="http://google.com" rel="noopener noreferrer" target="blank">
                           <i className="fa fa-linkedin-square" aria-hidden="true" />
                       </a>

                       {/*Github */}
                       <a href="http://google.com" rel="noopener noreferrer" target="blank">
                           <i className="fa fa-github-square" aria-hidden="true" />
                       </a>

                       {/*Twitter */}
                       <a href="http://google.com" rel="noopener noreferrer" target="blank">
                           <i className="fa fa-twitter-square" aria-hidden="true" />
                       </a>

                   </div>

                 </div>

                 
             </Cell>
         </Grid>
            
        </div>
    )
}

export default Home
