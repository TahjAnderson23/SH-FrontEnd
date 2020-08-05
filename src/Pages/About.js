import React, {Component} from "react";
import "../Styles/About.css";

export default class About extends Component{
    render(){
        return(
            <div className="About">
                <div className="Main-splash">

                    <h1 className="Main-title" >About Us</h1>

                </div>

                    <h2 className="H2-style">So what is Sustainable hacks?</h2>
                    <p className="p-style">
                        Sustainable Hacks is a website where a community of environmentally concious people can get together and share ideas.
                        It is the hub for all things sustainable whether it be news, sustainable practices, or events. We aim to create a place
                        for environmentalist and we strive to educate, support, and include everyone on the effort to fight climate change.
                    </p>

                    <h2 className="H2-style">How can I get involved?</h2>
                    <p className="p-style">
                        Create an account with us and join an awesome community of doers! We encourage all people to share their sustainable lifestyle
                        choices, stories on environmental injustices around the world, and events in their community for people to get involved in. 
                    </p>

                    <h2 className="H2-style">Who is behind Sustainable Hacks?</h2>
                    <p className="p-style">
                        We are team of four college students at Clemson University. Aaron and Tahj are in charge of front-end development while Jason
                        and Jonathan are in charge of the back-end development. 
                    </p>

            </div>

        )
    }
}