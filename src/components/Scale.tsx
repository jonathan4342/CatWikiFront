import * as SC from '../styles/StylesComponentes'


export const Scale = ({ num, text }: any) => {

    let arr: number[] = [];

    for (let i = 1; i <= num; i++) {
        arr.unshift(i);
    }
    if (num < 5) {
        for (let i = 1; i <= (5 - num); i++) {
            arr.push(0);
        }
    }
    return (
        <SC.ScaleCont >
            <div className="contTex">{text}:</div>
            <div className="contLine">
            {
                    arr.map((num) => {
                        if (num === 0) {
                            return <SC.LineNull ></SC.LineNull>
                        } else {
                            return <SC.Line ></SC.Line>
                        }
                    })
                }
            </div>
        </SC.ScaleCont>
    )
}
