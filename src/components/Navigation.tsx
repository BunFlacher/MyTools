import { Link } from 'react-router-dom'
import '../styles/NavigationStyles.scss'

const Navigation = () => {
    return (
        <div className='navigation__menu'>
            <nav className='navigation__container'>
                <h1>
                    <a 
                        href="http://localhost:3000/" 
                        className='navigation__title'
                    >
                        MyTools
                    </a>
                </h1>
                <div>
                    <Link 
                        to='/' 
                        className='navigation__tab'
                    >
                        Main
                    </Link>
                    <Link 
                        to='calculator' 
                        className='navigation__tab'
                    >
                        Calculator
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigation