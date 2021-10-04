//STYLES
import '../styles/pages/Why.scss'
//COMPONENTS
import Title from '../components/Title'
//ICONS
import { GoPlay } from 'react-icons/go'

const Why = () => {
    return(
        <section className='why-container' id='services'>
            <div className="container">
                <section className='top'>
                    <Title title='Why CRYO?' color='pink' LineCenter={true} />

                    <div className="subTitle">
                        <p>Always stay update with the technologies thus we help our clients by giving the best solutions for their nedds</p>
                    </div>
                </section>

                <section className='content'>
                    <div className=''>
                        <section className='video'>
                            <GoPlay />
                        </section>
                    </div>

                    <div className='reasons'>
                        <ul>
                            <li>Over 10+ years of industry wide expierence</li>

                            <li>Provide solutions to our multiple global clients or website traffic generation and workflow</li>

                            <li>Strong team of 150+ creative people</li>

                            <li>99% adhere to service level contract</li>

                            <li>Ready to recieve service request 24</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Why