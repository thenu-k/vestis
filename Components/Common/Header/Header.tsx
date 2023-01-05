import Link from 'next/link';
import * as S from './Header.styled'

const Header = () => {
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
                    <li><button>Cart</button></li>
                </ul>
            </div>
        </S.HeaderContainer>
    );
}

export default Header;