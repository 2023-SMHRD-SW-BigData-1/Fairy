import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MyFavo from '../componenet/Head/MyFavo'
import { Link } from 'react-router-dom'

// 비회원 상태에서 찜목록이 창을 닫으면 날아가고 로그인을 하면 연결이 되게 ?

const Cart = ({ name, price, photo, seq }) => {
    const [change, setChange] = useState({})
    const [myFavo, setMyFavo] = useState({})
    const [sendFav, setSendFav] = useState({})


    const sessionid = sessionStorage.getItem('id');
    console.log(sessionid);

    useEffect(() => {
        setChange({})
        setMyFavo({ user_id: sessionid })

    }, [])



    useEffect(() => {
        myFavo !== undefined &&
            axios.post('http://localhost:8888/db/myfavor', { myFavo: myFavo })

                .then((res) => {
                    console.log(res.data.myFav);
                    if (res.data.myFav !== undefined) {
                        setSendFav(res.data.myFav)
                        console.log(sendFav);
                    } else {

                    }

                })

    }, [setChange])




    return (
        <>
            <div className='Cart'>
                <nav className='bucketNav'>
                    <h1>장바구니</h1>
                </nav>
            </div>
            <div className='MainCtgItem'>
                <Link to={`/Detaill/${seq}`} key={seq}>
                    <table>
                        <tbody>
                            <tr>
                                <td className='MainCtgImgBox' style={{ backgroundImage: `url(${photo})` }}></td>
                            </tr>
                            <tr>
                                <td data-name="VIEW MORE" className='MainCtgbtn'><h6>{name}</h6><p>{price}</p></td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </div>
        </>

    )
}

export default Cart
{/* <MyFavo></MyFavo> */ }
{/* 컴포넌트 구간 */ }

{/* <tr>
<td><input type="checkbox" name="1" /></td>
<td><article>
                                    <a href="#">
                                        <img src="	https://via.placeholder.com/80x80" alt="1" />
                                    </a>
                                    <div>
                                        <h2><a href="#">상품명</a></h2> */}


{/* 이거 칸 없애줘 설명 긴거 못넣어 <p>상품설명</p> */ }



{/* </div>
</article></td>
<td>무료배송</td>
<td>27,000</td>
</tr> */}




{/* 
<ul className='bucketBox'>
    <li className='bucketBox1'>
        <form action="#">
            <table>
                <tr>
                    <th><input type="checkbox" name="all" /></th>
                    <th>상품명</th>
                    <th>배송비</th>
                    <th>판매가</th>
                </tr>
                {/* <tr class="empty">
                                <td colspan="7" style={{border:"1px solid red"}}>장바구니에 상품이 없습니다.</td>
                            </tr> 

                          
                        </table>
                        <input type="button" name="del" value="선택삭제" />
                    </form>
                </li>
            </ul>
<li className='bucketBox2'>
    <div class="total">
        <h2>전체합계</h2>
        <table>
            <tr>
                <td>상품수</td>

            </tr>
            <tr>
                <td>상품금액</td>
                <td>27,000</td>
            </tr>
            <tr>
                <td>배송비</td>
                <td>0</td>
            </tr>
            <tr>
                <td>전체주문금액</td>
                <td>26,000</td>
            </tr>
        </table>
        <input type="submit" value="주문하기" />
    </div>
</li> */}