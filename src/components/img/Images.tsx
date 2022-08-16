import { useAppSelector } from "../../store/store"
import { OpacityLoader } from "../loaders/OpacityLoader"

export const Images=()=>{
const { catImg } = useAppSelector().catSlice

return(
    <>
    <h1 className="h1">Other photos</h1>
    {
        catImg?.length==0?<OpacityLoader/>:
        catImg?.map(e=><img>{e}</img>)
    }
    </>
)
}