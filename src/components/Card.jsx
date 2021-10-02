//STYLES
import '../styles/components/Card.scss'

const Card = ({title, logo}) => {
     return(
        <article className='card'>
            <section className='logo'>
                { logo }
            </section>

            <section className='card-title'>
                <h4>{title}</h4>
            </section>
        </article>
     )
}

export default Card