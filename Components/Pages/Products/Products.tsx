import { useState } from 'react';
import Filters from './Filters/Filters';
import * as S from './Products.styled'
import  ProductTemplate from './ProductTemplate/ProductTemplate'

const Products = () => {
    //Negative prop drilling
    const [searchResuts, setSearchResults] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const updateParentResults  = (value:any) => {
        setSearchResults(value)
    }
    const updateParentLoading = (value:boolean) => {
        setLoading(value)
    }
    return (
        <S.ProductsContainer id='Products' className='center'>
            <div className="products inner">
                {/*@ts-ignore*/}
                <Filters updateParentResults={updateParentResults} updateParentLoading={updateParentLoading}/>
                <div className="productGrid outer">
                    <ProductTemplate/>
                </div>
            </div>
        </S.ProductsContainer>
    );
}

export default Products;