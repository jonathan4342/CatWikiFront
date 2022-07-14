import * as SC from '../styles/StylesComponentes'
import logo from '../CatwikiLogo.svg'
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
    return (
        <SC.FooterL>
            <div>
                <img src={logo} alt="img" className='cat' />
            </div>
            <div>
            <CopyrightIcon/> <span> create by</span> Jonathan Osorio <span> - devChanllenge.io 2021</span>
            </div>
        </SC.FooterL>
    )
}

export default Footer;