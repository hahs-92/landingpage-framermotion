//assets
import WorkImage from '../assets/work.svg'
//styles
import '../styles/pages/Starter.scss'
//components
import Button from '../components/Button'
//icons
import { GoPlay } from 'react-icons/go'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


const Starter = () => {
    return(
        <div className='main-container'>
            <section className="container">
                <div className='content'>
                    <h1>We Provide Solutions to Help You to Build or Grow Your Business!</h1>

                    <p>A professional web and mobile app development agnecy with over 100+ web and app developed. We provide a high-quality service in web and mobile app development as well as in design.</p>

                    <div className="button-container">
                        <Button content='Watch video' Icon={ <GoPlay /> }/>

                        <Button content='Request Qoute' Icon={ <HiOutlineArrowNarrowRight /> } color='pink' />
                    </div>
                </div>

                <div className="image">
                    <img src={ WorkImage } alt="Work-image" />
                </div>

            </section>

        </div>
    )
}

export default Starter