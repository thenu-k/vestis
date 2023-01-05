import Filters from './Filters/Filters';
import * as S from './Products.styled'

const Products = () => {
    return (
        <S.ProductsContainer id='Products' className='center'>
            <div className="products inner">
                <Filters/>
                Products
            </div>
        </S.ProductsContainer>
    );
}

export default Products;