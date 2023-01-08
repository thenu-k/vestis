import { useRouter } from 'next/router'
import * as S from './ProductTemplate.styled'

//@ts-ignore
const ProductTemplate = ({productData}) => {
    const router = useRouter()
    const redirectToProduct = ():void => {
        router.push(`/item/${productData.itemID}`)
    }
    return (
        <S.ProductTemplateContainer className='productTemplate' onClick={redirectToProduct}>
            <div className="image"
                style={{
                    backgroundImage: `url('${productData.imageURL}')`
                }}
            ></div>
            <div className="details">
                <div className="title">
                    <p>{productData.title}</p>
                </div>
                <div className="price">
                    <p>${productData.price/100}</p>
                </div>
            </div>

        </S.ProductTemplateContainer>
    );
}

export default ProductTemplate;