//styles
import '../styles/components/Button.scss'

const Button = ({content, Icon='', color='blue'}) => {
    return(
        <button className={`${color}`}>
            { content } { Icon }
        </button>
    )
}

export default Button