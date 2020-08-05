import React, {Component} from "react";
import "../Styles/FeaturedPosts.css";
import PostCard from "./PostCard";

export default class FeaturedPosts extends Component{
    render(){
        return(
            <div>
                <h1 className="H1-style">Featured Posts</h1>
                <div className="Featured-Posts" >
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                
            </div>

        )
    }
}