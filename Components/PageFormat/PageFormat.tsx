import * as S from './PageFormat.styled'
import {ReactNode, FC, useRef, useEffect, useState} from 'react';
import Header from '../Common/Header/Header';

type Props = {
    children: ReactNode | null
}

const PageFormat:FC<Props> = (props) => {
    //Header display logic
    const [lastScroll, setLastScroll] = useState(0)
    const innerRef = useRef(null)
    useEffect(()=>{
        const checkPageScroll = ():void => {
            const header = document.getElementById('Header')
            if(header && window.pageYOffset>header?.offsetHeight && window.pageYOffset>lastScroll && !header.classList.contains('down')){
                header.classList.add('down')
            }
            else if(header && window.pageYOffset<lastScroll && header.classList.contains('down')){
                header.classList.remove('down')
            }
            setLastScroll(window.pageYOffset)
        }
        document.addEventListener('scroll', checkPageScroll)
        //Cleanup
        return function(){
            document.removeEventListener('scroll', checkPageScroll)
        }
    },[lastScroll])
    return (
        <S.PageFormatContainer id='PageFormat' className='center'>
            <div className="pageFormat inner" ref={innerRef}>
                <Header/>
                {
                    props.children
                }
            </div>
        </S.PageFormatContainer>
    );
}

export default PageFormat;