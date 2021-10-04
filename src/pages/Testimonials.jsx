//STYLES
import '../styles/pages/Testimonials.scss'
//COMPONENTS
import Title from '../components/Title'
import Testimonial from '../components/Testimonial'

const Testimonials = () => {
    return(
        <section className='testimonials-container' id='testimonials'>
            <div className='container'>
                <section className='title-container'>
                    <Title title='Testimonials' color='blue' LineCenter={true} />

                    <p>See what our client are saying about us.</p>
                </section>

                <section className='testimonials'>
                    <Testimonial
                        content="The best on the net! Software development saved my business. I use
                        Software development often. I am really satisfied with my Software
                        Development."
                        name="Trushit Vyas"
                        designation="Co-Founder"
                    />
                    <Testimonial
                        content="Mobile application developer is exactly what out business has been lacing. I have gotten at least 50 times the value from mobile apllication."
                        name="Kishan H. Sheth"
                        designation="Founder & CEO"
                    />
                    <Testimonial
                        content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
                        name="Romit Gandhi"
                        designation="Founder"
                    />
                </section>
            </div>
        </section>
    )
}

export default Testimonials