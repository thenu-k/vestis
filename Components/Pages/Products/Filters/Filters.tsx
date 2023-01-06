import * as S from './Filters.styled'

const Filters = () => {
    return (
        <S.Filters id='Filters' className='center'>
            <div className="inner filters">
                <div className="seperator one">
                    <div className="drop-down sizeFilter">
                        <button id='sizeButton'>Drop Down</button>
                        <div className="drop-down-content"></div>
                    </div>
                    <div className="drop-down letterFilter">
                        <button id='letterButton'>Drop Down</button>
                        <div className="drop-down-content"></div>
                    </div>
                </div>
                <div className="seperator two">
                    <div className="drop-down price">
                        <button id='priceFilter'>Drop Down</button>
                        <div className="drop-down-content"></div>
                    </div>
                </div>
            </div>
        </S.Filters>
    );
}

export default Filters;