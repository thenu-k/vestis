import * as S from './PageFormat.styled'
import {ReactNode, FC} from 'react';
import Header from '../Common/Header/Header';

type Props = {
    children: ReactNode | null
}

const PageFormat:FC<Props> = (props) => {
    return (
        <S.PageFormatContainer id='PageFormat' className='center'>
            <div className="pageFormat inner">
                <Header/>
                {
                    props.children
                }
            </div>
        </S.PageFormatContainer>
    );
}

export default PageFormat;