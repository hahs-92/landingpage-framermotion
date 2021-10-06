import { motion } from 'framer-motion'
//assets
import WorkImage from '../assets/work.svg'
//styles
import '../styles/pages/Starter.scss'
//components
import Button from '../components/Button'
import NavBar from '../components/NavBar'
//icons
import { GoPlay } from 'react-icons/go'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
//ANIMATIONS
import { headerAnimation, imageAnimation } from '../helpers/animations'
//HOOKS
import { useScroll } from '../hooks/useScroll'


const Starter = () => {

    const [ element, controls ] = useScroll()

    return(
        <div className='main-container' ref={element} >

            <NavBar />

            <section className="container">
                <motion.div className='content'
                    variants={headerAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.2,
                        type: 'tween'
                    }}
                >
                    <h1>We Provide Solutions to Help You to Build or Grow Your Business!</h1>

                    <p>A professional web and mobile app development agnecy with over 100+ web and app developed. We provide a high-quality service in web and mobile app development as well as in design.</p>

                    <div className="button-container">
                        <Button content='Watch video' Icon={ <GoPlay /> }/>

                        <Button content='Request Qoute' Icon={ <HiOutlineArrowNarrowRight /> } color='pink' />
                    </div>
                </motion.div>

                <motion.div className="image"
                    variants={imageAnimation}
                    animate={controls}
                    transition={{ type: 'tween'}}
                >
                    <img src={ WorkImage } alt="Work-imagen" />
                </motion.div>

            </section>

        </div>
    )
}

export default Starter