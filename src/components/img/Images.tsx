import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { OpacityLoader } from "../loaders/OpacityLoader"

export const Images = () => {
    const { catImg } =  useSelector((state:RootState)=>state.catSlice)

    return (
        <>
            <h1 className="otherPhotos">Other photos</h1>
            <div className="conCat">
                {
                    catImg?.length === 0 ? <OpacityLoader /> :
                        catImg?.map(e => <img key={e} src={e} alt="img"  className="imgCat" />)
                }
            </div>
        </>
    )
}