//STYLES
import '../styles/components/Testimonial.scss'

const Testimonial = ({ content, name, designation }) => {
    return(
        <article className='testimonial-container' >
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
        </article>
    )
}

export default Testimonial