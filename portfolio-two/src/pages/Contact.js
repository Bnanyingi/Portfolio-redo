import React from 'react';
import { Grid, Cell} from 'react-mdl';

function Contact() {
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                <h2>Barbara Nanyingi</h2>
                <img 
                   
                   src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                   alt="image1.png"
                   style={{height: '200px'}}

                />
                <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, corrupti libero ipsa eius velit quos sapiente exercitationem qui possimus, suscipit voluptas dignissimos debitis cumque natus aspernatur, in repellat distinctio accusamus?
                </p>
                </Cell>
                <Cell col={6}>Half Page</Cell>

            </Grid>
            
        </div>
    )
}

export default Contact
