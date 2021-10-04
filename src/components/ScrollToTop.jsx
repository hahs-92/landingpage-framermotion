import { useState } from 'react'
//STYLES
import '../styles/components/ScrollToTop.scss'
//ICONS
import { BiUpArrow } from 'react-icons/bi'

const ScrollToTop = () => {

    const [ visible, setVisible ] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop


        if(scrolled > 300) {
            setVisible(true)
        } else if(scrolled <= 300) {
            setVisible(false)
        }
    }

    const scroollToTop = () => {
        window.scrollTo({
            top: 0,
          });
    }

    window.addEventListener("scroll", toggleVisible)

    return(
        <>
            {
                visible && (
                    <article className='scrollToTop' onClick={scroollToTop}>
                        <BiUpArrow />
                    </article>
                )
            }
        </>
    )
}

export default ScrollToTop
