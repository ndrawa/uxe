import React from "react"
import { Link } from 'react-router-dom';

function NavigationMenu(props){
    return (
        <div className="NavMenu">
            <div className='font-bold py-3'>
                <h1>
                    This is Menu
                </h1>
            </div>
            <ul>
                <li>
                    <Link 
                        to='/' 
                        className='text-blue-500 py-3 border-t border-b block'
                        onClick={props.closeMenu}
                    >
                        <h1>Home</h1>
                    </Link>
                </li>
                {(() => {
                    if (props.role === 0) {
                        return (
                            <div>
                                <li>
                                    <Link 
                                        to='/user' 
                                        className='text-blue-500 py-3 border-b block'
                                        onClick={props.closeMenu}
                                    >
                                        <h1>Add Users</h1>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link 
                                        to='/vaccine' 
                                        className='text-blue-500 py-3 border-b block'
                                        onClick={props.closeMenu}
                                    >
                                        Add Vaccines
                                    </Link>
                                </li> */}
                            </div>
                        )
                    } else if (props.role === 1) {
                        return (
                            <div>
                                <li>
                                    <Link 
                                        to='/producer' 
                                        className='text-blue-500 py-3 border-b block'
                                        onClick={props.closeMenu}
                                    >
                                        <h1>Start Transaction</h1>
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to='/tracking' 
                                        className='text-blue-500 py-3 border-b block'
                                        onClick={props.closeMenu}
                                    >
                                        <h1>Tracking</h1>
                                    </Link>
                                </li>
                            </div>
                        )
                    } else if (props.role === 2) {
                        return (
                            <div>
                                <li>
                                    <Link 
                                        to='/distributor' 
                                        className='text-blue-500 py-3 border-b block'
                                        onClick={props.closeMenu}
                                    >
                                        <h1>Distribute</h1>
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        to='/tracking' 
                                        className='text-blue-500 py-3 border-b block'
                                        onClick={props.closeMenu}
                                    >
                                        <h1>Tracking</h1>
                                    </Link>
                                </li>
                            </div>
                        )
                    } else if (props.role === 3) {
                        return (
                            <div>
                                <li>
                                    <Link 
                                        to='/doctor' 
                                        className='text-blue-500 py-3 border-b block'
                                        onClick={props.closeMenu}
                                    >
                                        <h1>Vaccinate</h1>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link 
                                        to='/tracking' 
                                        className='text-blue-500 py-3 border-b block'
                                        onClick={props.closeMenu}
                                    >
                                        <h1>Tracking</h1>
                                    </Link>
                                </li>
                            </div>
                        )
                    } else if (props.role === 4) {
                        return (
                            <div>
                                <li>
                                    <Link 
                                        to='/patient' 
                                        className='text-blue-500 py-3 border-b block'
                                        onClick={props.closeMenu}
                                    >
                                        <h1>Receive Vaccine</h1>
                                    </Link>
                                </li>
                            </div>
                        )
                    }
                })()}
            </ul>  
        </div>
    )
}

export default NavigationMenu