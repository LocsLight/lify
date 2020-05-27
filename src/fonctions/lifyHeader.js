import React from 'react';
import './css/Header.css'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            avtivate : false
        }
    }
    
    render(){
        return(
        <div className="header">
            <a href="#default" className="logo">Lify.com</a>
            <div className="header-right">
                <a className="active" href="#login">Se connecter</a>
                <a href="#contact">Contact</a>
                <a href="#cart">🛍</a>
            </div>
        </div>
        )
    }
}
export default Header;