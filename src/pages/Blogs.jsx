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

const Blogs = () => {
    return(
        <section className='blogs-container' id='blog'>
            <div className='container'>
                <section className='title-container'>
                    <Title title='Blogs' color='pink' LineCenter={ true } />

                    <p>Insights and advice from our experts</p>

                </section>

                <section className='blogs'>
                    <Blog
                        image={blogImage1}
                        title="Top list of Mistakes to Avoid During MVP Development"
                        subTitle="When there appears an idea to create a startup, have to take into
                        account all the risks you will face and evalute them thoughtfullu.
                        Also as a rule..."
                    />
                    <Blog
                        image={blogImage2}
                        title="A Day in the life on an Engineering Manager"
                        subTitle="During the eight years I spent as an engineering manager, I regularly tracked how I spent my time. As a startup engineering manager, I was ... "
                    />
                    <Blog
                        image={blogImage3}
                        title="How to Build a Strong Remote Work Culture"
                        subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
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
