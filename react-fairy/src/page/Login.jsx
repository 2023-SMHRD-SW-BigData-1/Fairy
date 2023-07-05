import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import  {useNavigate} from 'react-router-dom'


const Login = () => {

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
        alert(res.data.id+'환영합니다')

        // 브라우저 세션 저장소에 데이터가 저장
        // => 브라우저를 껏다 키면 사라지는 반휘발성 데이터
        sessionStorage.setItem('id',res.data.id)

        // 나중을 위해! 세션에 있는 데이터 가져오기!
        sessionStorage.getItem('id')

      }
    })
  },[userData])




  return (
  
    <div className='main-box info-box'><Form onSubmit={handleLogin}>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>ID</Form.Label>
      <Form.Control type="text" placeholder="Enter Id" ref={idRef} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" ref={pwRef} />
    </Form.Group>






  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  )
}

export default Login