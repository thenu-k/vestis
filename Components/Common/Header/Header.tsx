import Link from 'next/link';
import { useState } from 'react';
import * as S from './Header.styled'

type T_CartCount_T =  null | Number

const Header = () => {
    const [cartCount, setCartCount] = useState<T_CartCount_T>(null)
    return (
        <S.HeaderContainer id='Header' className='center'>
            <div className="header inner">
                <Link href='/'><h2 className='center'>VESTIS</h2></Link>
                <div className="inputContainer center">
                    <input type="text" placeholder='Search Catalogue'/>
                </div>
                <ul>
                    <li><Link href=''>Mens</Link></li>
                    <li><Link href=''>Womens</Link></li>
                    <li className='buttonContainer center'>
                        <button>Cart</button>
                        {
                            (cartCount)  // this returns false when cartcount is both null and zero
                                ? <span>{cartCount.toString()}</span>
                                : null
                        }
                    </li>
                </ul>
            </div>
        </S.HeaderContainer>
    );
}

export default Header;