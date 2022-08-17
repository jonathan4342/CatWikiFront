import React from 'react'
import * as SC from '../styles/StylesComponentes'


export const Scale = (number:any) => {

    let arr=[];

    for (let i = 1; i <= number; i++) {
        arr.unshift(i);
    }
    if (number < 5) {
        for (let i = 1; i <= (5 - number); i++) {
            arr.push(0);
        }
    }
    return (
        <SC.ScaleCont >
            {
                arr.map((num) => {
                    if (num === 0) {
                        return <SC.LineNull ></SC.LineNull>
                    } else {
                        return <SC.Line ></SC.Line>
                    }
                })
            }
        </SC.ScaleCont>
    )
}
