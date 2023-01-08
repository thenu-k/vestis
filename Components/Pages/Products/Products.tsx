import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import dbFunctions from '../../../clientFunctions/dBFunctions';
import Filters from './Filters/Filters';
import * as S from './Products.styled'
import  ProductTemplate from './ProductTemplate/ProductTemplate'

const Products = () => {
    const [searchResults, setSearchResults] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    //Getting product details
    const router = useRouter()
    let currentParams = router.query
    useEffect(() => {
        const dbFns = new dbFunctions;
        //@ts-ignore
        dbFns.itemSearch(currentParams.search, currentParams.priceFilter, currentParams.sizeFilter)
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [router])
    return (
        <S.ProductsContainer id='Products' className='center'>
            <div className="products inner">
                {/*@ts-ignore*/}
                <Filters/>
                <div className="productGrid outer">
                    <ProductTemplate/>
                </div>
            </div>
        </S.ProductsContainer>
    );
}

export default Products;