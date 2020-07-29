import React, {Component} from "react";
import "../Styles/PostCard.css";
import Card from 'react-bootstrap/Card';
import Logo from "../SHLogo.jpg";

export default class PostCard extends Component{
    render(){
        return(
            <div className="Post-Cards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {Logo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>

        )
    }
}