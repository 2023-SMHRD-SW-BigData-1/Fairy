import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import  {useNavigate} from 'react-router-dom'

// 로그인 상태 유지 세션?
// 로그인 유지 중에 메인화면에서 보여야 하는 화면 ( 회원가입, 로그인 >> 마이페이지, 장바구니, 채팅 뭐 그런.. )



const Login = () => {

  const nav = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();

  
  const [userData,setUserData] = useState({})

  const handleLogin = (e)=>{
    e.preventDefault();

    console.log(idRef.current.value,pwRef.current.value);
    
    setUserData({
      id : idRef.current.value,
      pw : pwRef.current.value
    })
  }
  useEffect(()=>{
    userData.id !==undefined &&
    axios.post('http://localhost:8888/user/login',{userData : userData})
    .then((res)=>{
      console.log(res.data.result);
      if(res.data.result == 'success'){
        alert(res.data.id+' 님 , 환영합니다!')


        sessionStorage.setItem('id',res.data.id)

        sessionStorage.getItem('id')
        nav('/')

      }
    })
  },[userData])

 




  return (
    <div className='LoginBox form-container sign-in-container'>
      <Form onSubmit={handleLogin} className='LoginMx'>
      <h1>Sign In</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your account</span>



      <Row className='row1 LoginRow2' >
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={{fontWeight:"bold", margin:"30px 0 10px 10px"}}>ID</Form.Label>
      <Form.Control type="text" placeholder="Enter Id" ref={idRef} className='LoginId' />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label style={{fontWeight:"bold", margin:"30px 0 10px 10px"}}>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" ref={pwRef} className='LoginPw'/>
      <a href="#"style={{display:"block", margin:"10px 0 10px 10px"}}>아이디/비밀번호찾기</a>
    </Form.Group>

  <Button variant="primary" type="submit"  className='SLBtn'>
    Submit
  </Button>
  </Row>
</Form>
</div>
  )
}

export default Login