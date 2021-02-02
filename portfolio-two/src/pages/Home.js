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
                 
             </Cell>
         </Grid>
            
        </div>
    )
}

export default Home
