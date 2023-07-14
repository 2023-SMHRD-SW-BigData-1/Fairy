import React from 'react'
import Logo from '../../Images/Logo.svg'

import { Link } from 'react-router-dom'




const Head = () => {
  return (
    <>
      <div className='HeadGnb'><Link to='/SignUpLogin'><p>회원가입/로그인</p></Link></div>
      <ul className='head'>
        <li className='headBox'>
          <div className='LogoBox'><Link to='/'><img src={Logo} alt="" className='LogoImg' /></Link></div>
          <div className='inputBox'><input type="text" className='search' placeholder='찾으시는 물품을 입력해주세요' /></div>
        </li>


        <li className='headNv'>
          <ul>
            {/*<li><Link to='/Signup' ><p>회원가입</p></Link></li>
            <li><Link to='/Login'><p>로그인</p></Link></li>*/}
            <li><Link to='/Mypage'><p>마이페이지</p></Link></li>
            <li><Link to='/Cart'><p>찜목록</p></Link></li>
            <li><Link to='/Detaill'><p>상세페이지</p></Link></li>
            <li><Link to='/Modification'><p>수정페이지</p></Link></li>
            {/* <li><Link to='/categories'><p>카테고리번호</p></Link></li> */}
            <li><Link to='/PostForm'><p>게시물작성</p></Link></li>
          </ul>
        </li>
        <li>
            <button class="btn2">햄버거</button>
        </li>

      </ul>
    </>
  )
}

export default Head