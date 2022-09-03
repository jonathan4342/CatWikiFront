import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { ContSearch } from "../styles";

export const Search = () => {

    const { search } = useSelector((state: RootState) => state.catSlice);
    return (
        <ContSearch>
            <ul >
                {
                    search &&
                    search.map(e =>
                        <li>
                            {e.name}
                        </li>
                    
                    )
                }
                </ul>
        </ContSearch>
    )
}
