import React from "react"
import { Link } from 'react-router-dom';

function NavigationMenu(props){
    return (
        <div>
            <div className='font-bold py-3'>
                This is Menu
            </div>
            <ul>
                <li>
                    <Link 
                        to='/' 
                        className='text-blue-500 py-3 border-t border-b block'
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/user' 
                        className='text-blue-500 py-3 border-b block'
                        onClick={props.closeMenu}
                    >
                        Add Users
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/vaccine' 
                        className='text-blue-500 py-3 border-b block'
                        onClick={props.closeMenu}
                    >
                        Add Vaccines
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/producer' 
                        className='text-blue-500 py-3 border-b block'
                        onClick={props.closeMenu}
                    >
                        Producer
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/distributor' 
                        className='text-blue-500 py-3 border-b block'
                        onClick={props.closeMenu}
                    >
                        Distributor
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/doctor' 
                        className='text-blue-500 py-3 border-b block'
                        onClick={props.closeMenu}
                    >
                        Doctor
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/patient' 
                        className='text-blue-500 py-3 border-b block'
                        onClick={props.closeMenu}
                    >
                        Patient
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/tracking' 
                        className='text-blue-500 py-3 border-b block'
                        onClick={props.closeMenu}
                    >
                        Tracking
                    </Link>
                </li>
            </ul>  
        </div>
    )
}

export default NavigationMenu