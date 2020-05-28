import React from 'react';
import './Header.css'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            avtivePage : "#login"
        }
    }
        
        render(){
            return(
                <div className="header">
                <a href="#default" className="logo">Lify.com</a>
                <div className="header-right">
                    <a className=" link active" href="#login">Se connecter</a>
                    <a className="link" href="#contact">Contact</a>
                    <a className="link" href="#cart">🛍</a>
                </div>
                </div>
                )
            }
        }
export default Header;