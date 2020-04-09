import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}> 
            <h1>TodoList - Sample Backend API</h1>
            <Link style={linkStyle} to="dnorkett.github.io/react-todoList-with-API/">Home</Link> | <Link style={linkStyle} to="dnorkett.github.io/react-todoList-with-API/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: "#fff",
    textDecoration: "none"
}

export default Header;