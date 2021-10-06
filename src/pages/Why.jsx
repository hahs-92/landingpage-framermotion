import { motion } from 'framer-motion'
//STYLES
import '../styles/pages/Why.scss'
//COMPONENTS
import Title from '../components/Title'
//ICONS
import { GoPlay } from 'react-icons/go'
//ANIAMTIONS
import {
    topContainerAnimation,
    videoAnimation,
    reasonsAniamtion
} from '../helpers/animations'
import { useScroll } from '../hooks/useScroll'

const Why = () => {

    const [ element, controls ] = useScroll()

    return(
        <section className='why-container' id='services' ref={element}>
            <div className="container">
                <motion.section className='top'
                    variants={topContainerAnimation}
                    animate={controls}
                    transition={{duration: 1}}
                >
                    <Title title='Why CRYO?' color='pink' LineCenter={true} />

                    <div className="subTitle">
                        <p>Always stay update with the technologies thus we help our clients by giving the best solutions for their nedds</p>
                    </div>
                </motion.section>

                <section className='content'>
                    <motion.div className=''
                        variants={videoAnimation}
                        animate={controls}
                        transition={{
                            type: "tween",
                            duration: 0.5
                        }}
                    >
                        <section className='video'>
                            <GoPlay />
                        </section>
                    </motion.div>

                    <motion.div className='reasons'
                        variants={reasonsAniamtion}
                        animate={controls}
                        transition={{
                            type:"tween",
                            duration:0.5
                        }}
                    >
                        <ul>
                            <li>Over 10+ years of industry wide expierence</li>

                            <li>Provide solutions to our multiple global clients or website traffic generation and workflow</li>

                            <li>Strong team of 150+ creative people</li>

                            <li>99% adhere to service level contract</li>

                            <li>Ready to recieve service request 24</li>
                        </ul>
                    </motion.div>
                </section>
            </div>
        </section>
    )
}

export default Why