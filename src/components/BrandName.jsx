//STYLES
import '../styles/components/BrandName.scss'

const BrandName = ({isFooter= false}) => {
    return(
        <div className={`brand ${!!isFooter && 'footer'}`}>
            <span>cryo</span>
        </div>
    )
}

export default BrandName
