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
                   style={{height: '250px'}}

                />
                </Cell>
                <Cell col={6}>Half Page</Cell>

            </Grid>
            
        </div>
    )
}

export default Contact
