import React from "react"
import {Link} from "react-router-dom"
import "./index.css"

const Header = () =>{
    return(
        <div>
            <nav className="nav-header">
                <div className="blog-container">
                <h1 className="blog-title">My Blog</h1>
                <ul className="nav-menu">
                    <li>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link className="nav-link" to="/profile">
                        Profile
                    </Link>
                    </li>
                    <li>
                    <Link className="nav-link" to="/blog-post">
                       Blog Post
                    </Link>
                    </li>
                    <li>
                    <Link className="nav-link" to="/dashboard">
                       Dashboard
                    </Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header