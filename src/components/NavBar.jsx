import { useState } from "react"
//COMPONENTS
import Button from "./Button"
import BrandName from './BrandName'
//ICONS
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
//STYLES
import '../styles/components/NavBar.scss'

const NavBar = () => {

    const [ toggleNavbar, setToggleNavbar] = useState(false)

    const navBarToggle = () => {
        setToggleNavbar(!toggleNavbar)
    }

    return(
        <div className={ `navbar ${ !!toggleNavbar && 'active'}`}>
            <section className='col'>

                <BrandName />

                <div className='collapsable-button' >
                    {
                        !toggleNavbar
                            ? <GiHamburgerMenu onClick={ navBarToggle } />
                            : <MdClose onClick={ navBarToggle } />
                    }
                </div>
            </section>

            <nav >
                <section className='links' >
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Testimonial</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <Button content='Contact'/>
                        </li>
                    </ul>
                </section>
            </nav>
        </div>
    )
}

export default NavBar
