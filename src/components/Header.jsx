import search from '../assets/search.png'
import logo from '../assets/logo.png'
const Header = () => {

    return (
       <> 
        <div className="header">
            <div className="header__container">
                <div className="header__input-container">
                    <img className='logo' src={logo} alt='' />
                    <input type='text' placeholder="Nunca dejes de buscar"/>
                    <button className="search-button">
                       <img className='search-icon' src={search} alt='search' />
                    </button>
                </div>
             </div>
        </div>
    </>
    )

}

export default Header;