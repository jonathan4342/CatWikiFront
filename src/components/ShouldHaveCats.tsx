import * as SC from '../styles/StylesComponentes';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import img1 from '../image1.png';
import img2 from '../image2.png';
import img3 from '../image3.png';

const ShouldHaveCats = () => {
    return (
        <SC.ContainerSHC>
            <SC.SHCTexto>
                <span className='raya'></span>
                <h1>Why should you have a cat?</h1>
                <h3>Having a cat aroud you can actually trigger the release of calming chemicals in your body which lowee you stress and anxiety leves</h3>
                <SC.ButtonG backgroundColor='white' border='1px solid white'>
                    READ MORE <ArrowRightAltIcon className='arrow'/>
                </SC.ButtonG>
            </SC.SHCTexto>
            <SC.SCHImg1> 
                <img src={img2} alt="img2" width='273px' height='167px'/>
                <img src={img1} alt="img1" width='195px' height='293px'/>
            </SC.SCHImg1>
            <SC.SCHImg1>
                <img src={img3} alt="img3" width='238px' height='385px' className='img3'/>
            </SC.SCHImg1>
        </SC.ContainerSHC>
    )
}

export default ShouldHaveCats;