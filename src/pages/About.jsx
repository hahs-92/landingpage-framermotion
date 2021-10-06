import { motion } from 'framer-motion'
//STYLES
import '../styles/pages/About.scss'
//COMPONENTS
import Title from '../components/Title'
import Button from '../components/Button'
import Card from '../components/Card'
//ICONS
import { HiLightBulb } from 'react-icons/hi'
import { BsCalendarFill } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { SiGooglemessages } from 'react-icons/si'
//ANIMATIONS
import { reveal } from '../helpers/animations'
//HOOKS
import { useScroll } from '../hooks/useScroll'

const About = () => {

    const [ element, controls ] = useScroll()

    return (
        <section className='about-container' id='about' ref={element}>
            <div className='container'>
                <motion.section className='details'
                    variants={reveal}
                    animate={ controls}
                    transition={{delay:0.1, stiffness: 300}}
                >
                    <Title title='About CRYO' color='blue' />

                    <p>We Believe that everyone deserves to have a website or online store. Innovation and simplicity make us happy. Our mission is to help people achieve what they have passionate about it.</p>

                    <p>We are excited to simplify SEO for everyone through software, education, or community</p>

                    <Button content='Why cryo?' />
                </motion.section>

                <section className='cards' ref={element}>
                    <Card title='Innovative Ideas' logo={ <HiLightBulb />} animateCustom={controls} />

                    <Card title='Planning' logo={ <BsCalendarFill />} animateCustom={controls}/>

                    <Card title='Communication' logo={ <SiGooglemessages />} animateCustom={controls} />

                    <Card title='24 * 7 Support' logo={ <BiSupport /> } animateCustom={controls} />
                </section>
            </div>
        </section>
    )
}

export default About