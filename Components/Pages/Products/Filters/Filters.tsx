import React, { useEffect, useState } from 'react';
import * as S from './Filters.styled'

interface I_Filter_I {
    sizeFilter: string | null, priceFilter: string | null
}


//Helper Function
const returnFilterObject = (currentFilters:I_Filter_I,type:string, value:string):I_Filter_I => {
    const tempObj = currentFilters
    if(value){
        //@ts-ignore
        tempObj[`${type}`] = value
        return tempObj
    }else{
        return currentFilters
    }
}

const Filters = () => {
    const [filters, setFilters] = useState<I_Filter_I>({
        sizeFilter: null, priceFilter: null
    })
    const handleSizeFilter = (e: React.MouseEvent<HTMLDivElement>):void => {
        //@ts-ignore
        const sizeFilter = e.target.id
        const newFilters = returnFilterObject(filters, 'sizeFilter', sizeFilter)
        setFilters(newFilters)
    }
    const handlePriceFilter = (e: React.MouseEvent<HTMLDivElement>):void=> {
        //@ts-ignore
        const priceFilter = e.target.id
        const newFilters = returnFilterObject(filters, 'priceFilter', priceFilter)
        setFilters(newFilters)
    }
    useEffect(()=>{
        console.log('change')
    }, [filters])
    return (
        <S.Filters id='Filters' className='center'>
            <div className="inner filters">
                <div className="seperator one">
                    <h3>{JSON.stringify(filters)}</h3>
                </div>
                <div className="seperator two">
                    <div className="drop-down sizeFilter">
                        <button id='sizeButton'>Drop Down</button>
                        <div className="drop-down-content" onClick={handleSizeFilter}>
                            <button id='XS'>XS</button>
                            <button id='S'>S</button>
                        </div>
                    </div>
                    <div className="drop-down price">
                        <button id='priceFilter'>Drop Down</button>
                        <div className="drop-down-content" onClick={handlePriceFilter}>
                            <button id='desc'>Price: High to Low</button>
                            <button id='asc'>Price: Low to High</button>
                        </div>
                    </div>
                </div>
            </div>
        </S.Filters>
    );
}

export default Filters;