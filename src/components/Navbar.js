import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li> */}
                </ul>

                {/* <div className="d-flex">
                    <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleModeDark('primary')}} style={{height: '30px', width:'30px', cursor:'pointer', border:'2px solid gray'}}></div>
                    <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleModeDark('danger')}} style={{height: '30px', width:'30px', cursor:'pointer', border:'2px solid gray'}}></div>
                    <div className="bg-success rounded mx-2" onClick={()=>{props.toggleModeDark('success')}} style={{height: '30px', width:'30px', cursor:'pointer', border:'2px solid gray'}}></div>
                    <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleModeDark('warning')}} style={{height: '30px', width:'30px', cursor:'pointer', border:'2px solid gray'}}></div>
                    <div className="bg-light rounded mx-2" onClick={()=>{props.toggleModeDark('light')}} style={{height: '30px', width:'30px', cursor:'pointer', border:'2px solid gray'}}></div>
                    <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleModeDark('dark')}} style={{height: '30px', width:'30px', cursor:'pointer', border:'2px solid gray'}}></div>
                </div> */}

                <div className={`mx-3 form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleModeDark} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Dark Mode</label>
                </div>
                {/* <div className={`mx-3 form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleModeDarkGreen} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Green Mode</label>
                </div>
                <div className={`mx-3 form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleModeDarkBlue} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Blue Mode</label>
                </div> */}
            </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set Title here",
    aboutText: "About text here"
}