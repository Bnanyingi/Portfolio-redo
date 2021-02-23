import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

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
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>

                    <div className="contact-list">
                      <List>
                      <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'RocknRoll One'}}>
                          <i className="fa fa-phone-square" aria-hidden="true" />
                          (+2547)41848-472
                        </ListItemContent>
                      </ListItem>
                      <ListItem>
                        <ListItemContent icon="person">Aaron Paul</ListItemContent>
                      </ListItem>
                      <ListItem>
                        <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                      </ListItem>
                      </List>
                    </div>

                   
                </Cell>

            </Grid>
            
        </div>
    )
}

export default Contact
