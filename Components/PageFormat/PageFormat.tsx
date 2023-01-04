import * as S from './PageFormat.styled'
import {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode | null
}

const PageFormat:FC<Props> = (props) => {
    return (
        <S.PageFormatContainer>
            Header
            {
                props.children
            }
        </S.PageFormatContainer>
    );
}

export default PageFormat;