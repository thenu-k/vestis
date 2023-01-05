import { useRouter } from 'next/router'
import * as S from './ProductTemplate.styled'

const ProductTemplate = () => {
    const  data = {
        id: 123,
        title: 'Mountain Recreational Jacket',
        price: 1234,
        imageURL: 'https://image1.superdry.com/static/images/optimised/upload9223368955666189433.jpg'
    }
    const router = useRouter()
    const redirectToProduct = ():void => {
        router.push(`/item/${data.id}`)
    }
    return (
        <S.ProductTemplateContainer className='productTemplate' onClick={redirectToProduct}>
            <div className="image"
                style={{
                    backgroundImage: `url('${data.imageURL}')`
                }}
            ></div>
            <div className="details">
                <div className="title">
                    <p>{data.title}</p>
                </div>
                <div className="price">
                    <p>${data.price/100}</p>
                </div>
            </div>

        </S.ProductTemplateContainer>
    );
}

export default ProductTemplate;