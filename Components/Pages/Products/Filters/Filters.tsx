import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as S from './Filters.styled'

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
    useEffect(()=>{
        //Checking current URL params 
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams)
        //Creating the url query step by step
        let urlQuery = '?'
        if(priceFilter){
            //@ts-ignore
            const priceParams = new URLSearchParams({
                priceFilter: priceFilter
            });
            urlQuery += priceParams
        }
        if(sizeFilter){
            //@ts-ignore
            const sizeParams = new URLSearchParams({
                sizeFilter: sizeFilter
            });
            urlQuery += '&' + sizeParams
        }
        router.push(router.pathname+urlQuery)
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