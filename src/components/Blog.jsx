//STYLES
import '../styles/components/Blog.scss'
//COMPONENTS
import Button from './Button'
//ICONS
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Blog = ({image, title, subTitle}) => (
    <article className='blog-container'>
        <section className='image'>
            <img src={image} alt="Blog" />
        </section>

        <section className='content'>
            <div className="title">
                <h3>{title}</h3>
            </div>

            <div className="subTitle">
                <p>{subTitle}</p>
            </div>

            <Button content='Read More' color='inverse' Icon={<HiOutlineArrowNarrowRight />} />
        </section>
    </article>
)

export default Blog
