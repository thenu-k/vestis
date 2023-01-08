import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as S from './Filters.styled'

interface I_urlQuery_I_Frag {
    priceFilter?: string, sizeFilter?: string
}
type T_urlQuery_T = Object | null

const Filters = () => {
    const router = useRouter()
    const [priceFilter, setPriceFilter] = useState<String | null>(null)
    const [sizeFilter, setSizeFilter] = useState<String | null>(null)
    const handleSizeFilter = (e: React.MouseEvent<HTMLDivElement>) => {
        //@ts-ignore
        const newFilter = e.target.id
        if(newFilter){
            setSizeFilter(newFilter)
        }
    }
    const handlePriceFilter = (e: React.MouseEvent<HTMLDivElement>)=> {
        //@ts-ignore
        const newFilter = e.target.id
        if(newFilter){
            setPriceFilter(newFilter)
        }
    }
    console.log(router.query)
    useEffect(()=>{
        //Checking current URL params 
        //Creating the url query step by step
        let newQuery:JSON = {} as JSON
        if(priceFilter){
            //@ts-ignore
            newQuery.priceFilter = priceFilter
        }
        if(sizeFilter){
            //@ts-ignore
            newQuery.sizeFilter = sizeFilter
        }
        //console.log(newQuery)
        if(priceFilter || sizeFilter){
            router.push({
                pathname: '/products',
                //@ts-ignore
                query: newQuery,
            })
        }
    },[priceFilter, sizeFilter])
    return (
        <S.Filters id='Filters' className='center'>
            <div className="inner filters">
                <div className="seperator one">
                    <h3>Results for: ...</h3>
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