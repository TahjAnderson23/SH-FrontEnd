import React, {Component} from "react";
import "../Styles/PostCard.css";
import Card from 'react-bootstrap/Card';
import Logo from "../SHLogo.jpg";

export default class PostCard extends Component{
    render(){
        return(
            <div className="Post-Cards">
                <Card className="Post-Card-Base" style={{ width: '19rem' }}>
                    <Card.Img className="Post-Card-Top" variant="top" src= {Logo} />
                    <Card.Body>
                        <Card.Title className="Title" >New Way To Make Your Own Soap</Card.Title>
                        <Card.Text>
                          <div class="text">
                            Here we are going to teach you how to make eco friendly soap!
                         </div>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>

        )
    }
}