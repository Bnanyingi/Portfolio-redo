import React from 'react'
import { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, Cardshadow, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                {/**Project 1 */}
                
                <Card>
                    <Cardshadow duration={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fraddevon.com%2Farticles%2Fwhy-should-i-care-about-react%2F&psig=AOvVaw0L2CRLTVFMUVCYM_RSLaho&ust=1613314589395000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiTibCP5-4CFQAAAAAdAAAAABAD) center/cover'}}>
                            ReactProject #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />

                        </CardMenu>
                    </Cardshadow>
                   
                    
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
