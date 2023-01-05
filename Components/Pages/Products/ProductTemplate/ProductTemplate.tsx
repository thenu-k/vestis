import * as S from './ProductTemplate.styled'

const ProductTemplate = () => {
    const  data = {
        id: 123,
        title: 'Title',
        price: 1234,
        imageURL: 'https://image1.superdry.com/static/images/optimised/upload9223368955666189433.jpg'
    }
    return (
        <S.ProductTemplateContainer className='productTemplate'>
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