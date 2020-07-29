import React, {Component} from "react";
import "../Styles/Home.css";
import FeaturedPosts from "../Components/FeaturedPosts";

export default class Home extends Component{
    render(){
        return(
            <div className="Home">
                <div className="Home-Container">
                    <div className="Main-Splash" >
                    <h1 className="Home-H1" >Sustainable Hacks</h1>
                    </div>
                    <div >
                        <FeaturedPosts />
                    </div>
                
                </div>

            </div>

        )
    }
}