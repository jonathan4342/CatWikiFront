import { useNavigate } from 'react-router-dom';
import logo from '../CatwikiLogo.svg';

const Logo = () => {
    const navigate=useNavigate()

    const inicio=()=>{
        navigate('/')
    }
    return (
        <div>
            <img src={logo} alt="img" className='logo' onClick={inicio}/>
        </div>
    )
}

export default Logo