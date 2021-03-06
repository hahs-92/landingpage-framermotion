import { motion } from 'framer-motion'
//STYLES
import '../styles/pages/Blogs.scss'
//ASSETS
import blogImage1 from '../assets/blogImage1.jpg'
import blogImage2 from '../assets/blogImage2.jpg'
import blogImage3 from '../assets/blogImage3.jpg'
//COMPONENTS
import Title from '../components/Title'
import Button from '../components/Button'
import Blog from '../components/Blog'
//ANIMATIONS
import { cardAnimation,textAnimation} from '../helpers/animations'
//HOOKS
import { useScroll } from '../hooks/useScroll'

const Blogs = () => {

    const [element, controls] = useScroll()

    return(
        <section className='blogs-container' id='blog' ref={element}>
            <div className='container'>
                <motion.section className='title-container'
                    variants={textAnimation}
                    animate={controls}
                    transition={{duration: 1}}
                >
                    <Title title='Blogs' color='pink' LineCenter={ true } />

                    <p>Insights and advice from our experts</p>

                </motion.section>

                <section className='blogs'>
                    <Blog
                        image={blogImage1}
                        title="Top list of Mistakes to Avoid During MVP Development"
                        subTitle="When there appears an idea to create a startup, have to take into
                        account all the risks you will face and evalute them thoughtfullu.
                        Also as a rule..."
                        variants={cardAnimation}
                        animate={controls}
                    />
                    <Blog
                        image={blogImage2}
                        title="A Day in the life on an Engineering Manager"
                        subTitle="During the eight years I spent as an engineering manager, I regularly tracked how I spent my time. As a startup engineering manager, I was ... "
                        variants={cardAnimation}
                        animate={controls}
                    />
                    <Blog
                        image={blogImage3}
                        title="How to Build a Strong Remote Work Culture"
                        subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
                        variants={cardAnimation}
                        animate={controls}
                    />
                </section>

                <section className='button-container'>
                    <Button content='View All' />
                </section>
            </div>
        </section>
    )
}

export default Blogs
