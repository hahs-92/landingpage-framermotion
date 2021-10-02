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

const About = () => {
    return (
        <section className='about-container'>
            <div className='container'>
                <section className='details'>
                    <Title title='About CRYO' color='blue' />

                    <p>We Believe that everyone deserves to have a website or online store. Innovation and simplicity make us happy. Our mission is to help people achieve what they have passionate about it.</p>

                    <p>We are excited to simplify SEO for everyone through software, education, or community</p>

                    <Button content='Why cryo?' />
                </section>

                <section className='cards'>
                    <Card title='Innovative Ideas' logo={ <HiLightBulb />} />

                    <Card title='Planning' logo={ <BsCalendarFill />} />

                    <Card title='Communication' logo={ <SiGooglemessages />} />

                    <Card title='24 * 7 Support' logo={ <BiSupport />} />
                </section>
            </div>
        </section>
    )
}

export default About