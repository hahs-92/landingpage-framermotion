import { motion } from 'framer-motion'
//STYLES
import '../styles/components/Card.scss'
//ANIMATIONS
import { cardAnimation } from '../helpers/animations'

const Card = ({title, logo, animateCustom}) => {
     return(
        <motion.article className='card'
            variants={cardAnimation}
            animate={animateCustom}
            transition={{stiffness: 5000}}
        >
            <section className='logo'>
                { logo }
            </section>

            <section className='card-title'>
                <h4>{title}</h4>
            </section>
        </motion.article>
     )
}

export default Card