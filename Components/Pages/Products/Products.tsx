import { useState } from 'react';
import Filters from './Filters/Filters';
import * as S from './Products.styled'
import  ProductTemplate from './ProductTemplate/ProductTemplate'

const Products = () => {
    //Negative prop drilling
    const [searchResuts, setSearchResults] = useState<any>()
    const updateParentResults  = (value:any) => {
        setSearchResults(value)
    }
    return (
        <S.ProductsContainer id='Products' className='center'>
            <div className="products inner">
                {/*@ts-ignore*/}
                <Filters updateParentResults={updateParentResults}/>
                <div className="productGrid outer">
                    <ProductTemplate/>
                </div>
            </div>
        </S.ProductsContainer>
    );
}

export default Products;