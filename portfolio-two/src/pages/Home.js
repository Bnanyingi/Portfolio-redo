import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { MDBIcon } from "mdbreact";


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
                       <MDBIcon fab icon="linkedin" />
                       </a>

                       {/*Github */}
                       <a href="http://google.com" rel="noopener noreferrer" target="blank">
                       <MDBIcon fab icon="github-square" />
                       </a>

                       {/*Twitter */}
                       <a href="http://google.com" rel="noopener noreferrer" target="blank">
                       <MDBIcon fab icon="twitter-square" />
                       </a>

                   </div>

                 </div>

                 
             </Cell>
         </Grid>
            
        </div>
    )
}

export default Home


