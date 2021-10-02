//STYLES
import '../styles/components/Title.scss'

const Title = ({title, color, LineCenter=false}) => {
    return (
        <article className={`title ${!!LineCenter && 'center' }`}>
            <h2>{title}</h2>

            <section className={`${color}`}>
                <span></span>
            </section>
        </article>
    )
}

export default Title