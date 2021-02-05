import React from 'react'
import { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

              </Card>
                
            )
        }
        else if(this.state.activeTab == 1) {
            return(
                <div><h1> This is React</h1></div>  
            )
        }
        else if(this.state.activeTab == 2) {
            return(
                <div><h1> This is Angular</h1></div>  
            )
        }
        else if(this.state.activeTab == 3) {
            return(
                <div><h1> This is HTML5</h1></div>  
            )
        }

    }

     render(){
     return (

        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
               <Tab>Python</Tab>
               <Tab>React</Tab>
               <Tab>Angular</Tab>
               <Tab>HTML5</Tab>
            </Tabs>

            <section className="projects-grid">
                <Grid className="projects-grid">
                    <Cell col={12}>
                       <div className="content">{this.toggleCategories()}</div>
                    </Cell>

                </Grid>
                
            </section>
        </div>
    )
     
     }
            
        
    
}

export default Projects;
