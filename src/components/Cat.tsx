import { CatsProps } from "../interfaces/Interfaces"
import * as SC from '../styles/StylesComponentes'
const Cat = (props: CatsProps) => {
    return (
        <SC.CatImgs>
            <img src={props.img} alt="img" width='220px' height='220px' className='imgcat'/>
            <h2>{props.name}</h2>
        </SC.CatImgs>
    )
}
export default Cat