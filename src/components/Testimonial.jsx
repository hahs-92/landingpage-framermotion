import { motion } from 'framer-motion'
//STYLES
import '../styles/components/Testimonial.scss'

const Testimonial = ({
    content,
    name,
    designation,
    variants,
    animate
}) => {
    return(
        <motion.article className='testimonial-container'
            variants={variants}
            animate={animate}
        >
            <section className='quote'>
                <span>&#10077;</span>
            </section>

            <section className='content'>
                { content }
            </section>

            <section className='author'>
                <div className='name'>
                    { name }
                </div>

                <div className='designation'>
                    { designation}
                </div>
            </section>
        </motion.article>
    )
}

export default Testimonial