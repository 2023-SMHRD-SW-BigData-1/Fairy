import './App.css'
// *************************jsx***********************************************
// *******cpnt.jsx******
import Head from './componenet/Head/Head';
import NavList from './componenet/Navigation/NavList';
import Footer from './componenet/Footer/Footer';

//**************************** */
import InfoBar from './componenet/InfoBar/infoBar'
import Input from './componenet/Input/Input';
import Messages from './componenet/Messages/Messages'
import TextContainer from './componenet/TextContainer/TextContainer'

// *******page.jsx******
import Main from './page/Main';
import SignUp from './page/SignUp';
import Login from './page/Login';
import Mypage from './page/Mypage';
import Cart from './page/Cart';
import Detaill from './page/Detaill';
import Modification from './page/Modification';
import PostForm from './page/PostForm';
import Categories from './page/Categories';
import Chat from './page/Chat';
import Join from './page/Join';
// *************************install*******************************************
import {Routes,Route} from 'react-router-dom' //라우터돔
// *************************CSS***********************************************
// *******Hold.css******
import './css/Common.css'
import './css/Hold/Head.css'
import './css/Hold/NavList.css'
import './css/Hold/Footer.css'
// *******Page.css******
import './css/page/Main.css'
import './css/page/Login.css'
import './css/page/Signup.css'
import './css/page/Detaill.css'
import './css/page/cart.css'
import './css/page/Modification.css'
import './css/page/myPage.css'
import './css/page/PostForm.css'
import './css/page/Kakaomap.css'
import './componenet/InfoBar/infoBar.css'
import'./componenet/Input/Input.css';
import './componenet/Messages/Messages.css'
import './componenet/TextContainer/TextContainer.css'
import './css/page/chat.css'

// Category
import WomanClothes from './componenet/Category/WomanClothes';
import ManClothes from './componenet/Category/ManClothes';
import Shoes from './componenet/Category/Shoes';
import BagWallet from './componenet/Category/BagWallet';
import HomeApp from './componenet/Category/HomeApp';
import Sports from './componenet/Category/Sports';
import Book from './componenet/Category/Book';
import Digital from './componenet/Category/Digital';
import Beauty from './componenet/Category/Beauty';
import Interior from './componenet/Category/Interior';
import DailySupplies from './componenet/Category/DailySupplies';







function App() {
  return (
    <div id='con'>
      <div id = 'untilMain'>
      <header>
          <Head/>
      </header>
      <nav>
          <NavList/>
      </nav>
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Mypage' element={<Mypage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Detaill' element={<Detaill/>}/>
        <Route path='/Modification' element={<Modification/>}/>
        <Route path='/PostForm' element={<PostForm/>}/>
        <Route path='/Chat' element={<Chat/>}/>
        <Route path='/Join' element={<Join/>}/>

{/*************************************Categories************************************************/}     
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/categories/100' element ={<WomanClothes/>}/>
        <Route path='/categories/200' element ={<ManClothes/>}/>
        <Route path='/categories/300' element ={<Shoes/>}/>
        <Route path='/categories/400' element ={<BagWallet/>}/>
        <Route path='/categories/500' element ={<Digital/>}/>
        <Route path='/categories/600' element ={<HomeApp/>}/>
        <Route path='/categories/700' element ={<Sports/>}/>
        <Route path='/categories/800' element ={<Book/>}/>
        <Route path='/categories/900' element ={<Beauty/>}/>
        <Route path='/categories/1000' element ={<Interior/>}/>
        <Route path='/categories/1100' element ={<DailySupplies/>}/>
      </Routes>
      </div>
      <footer>
        <Footer/>
      </footer>

    </div>

    
          
   

          
  );
}

export default App;