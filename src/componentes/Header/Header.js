import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './Logo.png';
import { AiFillHome } from 'react-icons/ai'
import {IoMdConstruct } from 'react-icons/io'
import { ImExit } from 'react-icons/im'
import firebase from 'firebase/app';


function Header(props) {

    function sair(e){
        e.preventDefault()
        firebase.auth().signOut().then(() => {
            alert("Deslogado!");
            window.location.href="/";
        }).catch((error) => {

        });
    }
    return(
        <div className='header'>
            <div className='logo'>
                <img src={Logo} />
            </div>
            <nav>
                <ul>
                    <li><Link to='/'><AiFillHome/> Inicio</Link></li>
                    <li><Link to='/config'><IoMdConstruct/> Configuracoes</Link></li>
                    <li onClick={(e)=>sair(e)}><Link to='/logout'><ImExit/> Sair</Link></li>
                </ul>
                
                <div className='avatar'>
                    <img src={props.user.avatar}/>
                    <label>{props.user.name}</label>
                </div>
            </nav>
        </div>
    )
}

export default Header;

// npm install @mui/material @mui/styled-engine-sc styled-components
