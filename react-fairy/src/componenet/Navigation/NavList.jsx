
import { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

const NavList = (props) => {
  const hamElements = useRef(null);
  const [showHamNav, setShowHamNav] = useState(false);
 let cnt = 0;
  const handleClick = () => {
    console.log('마우스 클릭 이벤트가 발생했습니다.');
    setShowHamNav(!showHamNav);
    // 추가 작업 수행
    cnt++;
    props.chCheck()
  };

 //<ul className={`hamNav ${showHamNav ? 'show' : ''}`}>
  return (
    <div className='Navi'>
      <div className={`ham ${showHamNav ? 'active' : ''}`} ref={hamElements} onClick={handleClick}>
        <div className='realHam'>
          <i class="fa-solid fa-bars"></i><p>카테고리</p>
            </div>
            <ul class="gnb">
              <li><Link to="/categories/100?keyword=100">여성의류</Link>
                  <div class="subBox">
                    <ul>
                      <li>
                      <Link to="/categories/100?keyword=110"><h4 >아우터</h4></Link>
                        <p><a href="#">패딩</a></p>
                        <p><a href="#">점퍼</a></p>
                        <p><a href="#">코트</a></p>
                        <p><a href="#">자켓</a></p>
                        <p><a href="#">가디건</a></p>
                        <p><a href="#">조끼</a></p>
                      </li>
                      <li>
                      <Link to="/categories/100?keyword=120"><h4 >상의</h4></Link>
                        <p><a href="#">니트/스웨터</a></p>
                        <p><a href="#">후드티/후드집업</a></p>
                        <p><a href="#">맨투맨</a></p>
                        <p><a href="#">블라우스</a></p>
                        <p><a href="#">셔츠</a></p>
                        <p><a href="#">반팔 티셔츠</a></p>
                        <p><a href="#">긴팔 티셔츠</a></p>
                      </li>
                      <li>
                      <Link to="/categories/100?keyword=130"><h4>하의</h4></Link>
                        <p><a href="#">청바지</a></p>
                        <p><a href="#">슬랙스</a></p>
                        <p><a href="#">면바지</a></p>
                        <p><a href="#">반바지</a></p>
                        <p><a href="#">트레이닝</a></p>
                        <p><a href="#">레깅스</a></p>
                      </li>
                    </ul>
                  </div>
              </li>
              <li><Link to="/categories/200?keyword=200">남성의류</Link>
                  <div class="subBox">
                    <ul>
                      <li>
                      <Link to="/categories/200?keyword=210"><h4>아우터</h4></Link>
                        
                        <p><a href="#">패딩</a></p>
                        <p><a href="#">점퍼</a></p>
                        <p><a href="#">코트</a></p>
                        <p><a href="#">자켓</a></p>
                        <p><a href="#">가디건</a></p>
                        <p><a href="#">조끼</a></p>
                        
                      </li>
                      <li>
                      <Link to="/categories/200?keyword=220"><h4>상의</h4></Link>
                        <p><a href="#">니트/스웨터</a></p>
                        <p><a href="#">후드티/후드집업</a></p>
                        <p><a href="#">맨투맨</a></p>
                        <p><a href="#">블라우스</a></p>
                        <p><a href="#">셔츠</a></p>
                        <p><a href="#">반팔 티셔츠</a></p>
                        <p><a href="#">긴팔 티셔츠</a></p>
                      </li>
                      <li>
                      <Link to="/categories/200?keyword=230"><h4>하의</h4></Link>
                        <p><a href="#">청바지</a></p>
                        <p><a href="#">슬랙스</a></p>
                        <p><a href="#">면바지</a></p>
                        <p><a href="#">반바지</a></p>
                        <p><a href="#">트레이닝</a></p>
                        <p><a href="#">레깅스</a></p>
                      </li>
                    </ul>
                  </div>
              </li>

              <li><Link to="/categories/300">신발</Link>
                  <div class="subBox"><ul>
                      <li>
                        <h4>남성화</h4>
                        <p><a href="#">샌들/슬리퍼</a></p>
                        <p><a href="#">구두/로퍼</a></p>
                        <p><a href="#">워커/부츠</a></p>
                        <p><a href="#">기타 남성화</a></p>
                      </li>
                      <li>
                      <h4>여성화</h4>
                        <p><a href="#">샌들/슬리퍼</a></p>
                        <p><a href="#">구두</a></p>
                        <p><a href="#">단화/플랫슈즈</a></p>
                        <p><a href="#">워커/부츠</a></p>
                        <p><a href="#">기타 여성화</a></p>                      
                      </li>
                      <li>
                      <h4>스포츠화</h4>
                        <p><a href="#">축구/풋살화</a></p>
                        <p><a href="#">테니스화</a></p>
                        <p><a href="#">등산/트레킹화</a></p>
                        <p><a href="#">야구화</a></p>
                        <p><a href="#">기타 스포츠화</a></p>
                      </li>
                    </ul></div>
              </li>

              <li><Link to="/categories/400">가방/지갑</Link>
                  <div class="subBox"><ul>
                      <li>
                        <h4>여성가방</h4>
                        <p><a href="#">클러치백</a></p>
                        <p><a href="#">숄더백</a></p>
                        <p><a href="#">크로스백</a></p>
                        <p><a href="#">토트백</a></p>
                        <p><a href="#">백팩</a></p>
                        <p><a href="#">기타여성가방</a></p>
                      </li>
                      <li>
                      <h4>남성가방</h4>
                        <p><a href="#">클러치백</a></p>
                        <p><a href="#">숄더백</a></p>
                        <p><a href="#">크로스백</a></p>
                        <p><a href="#">브리프케이스</a></p>
                        <p><a href="#">백팩</a></p>                      
                        <p><a href="#">기타남성가방</a></p>                      
                      </li>
                    </ul></div>
              </li>
              <li><Link to="/categories/500">디지털</Link>
                  <div class="subBox"><ul>
                      <li>
                        <h4>휴대폰</h4>
                        <p><a href="#">스마트폰</a></p>
                        <p><a href="#">일반폰</a></p>
                        <p><a href="#">케이스/보호필름/액세서리</a></p>
                        <p><a href="#">케이블/충전기/주변기기</a></p>
                        <p><a href="#">기타 휴대폰</a></p>
                      </li>
                      <li>
                      <h4>태블릿</h4>
                        <p><a href="#">태블릿</a></p>
                        <p><a href="#">케이스/보호필름/액세서리</a></p>
                        <p><a href="#">케이블/충전기/주변기기</a></p>
                   
                      </li>
                      <li>
                      <h4>웨어러블</h4>
                        <p><a href="#">스마트워치/밴드</a></p>
                        <p><a href="#">케이스/보호필름/액세서리</a></p>
                        <p><a href="#">케이블/충전기/주변기기</a></p>
                   
                      </li>
                      <li>
                      <h4>오디오/영상</h4>
                        <p><a href="#">이어폰</a></p>
                        <p><a href="#">헤드폰</a></p>
                        <p><a href="#">스피커/앰프</a></p>
                        <p><a href="#">오디오/홈시어터</a></p>
                   
                      </li>
                      <li>
                      <h4>PC/노트북</h4>
                        <p><a href="#">데스크탑</a></p>
                        <p><a href="#">노트북/넷북</a></p>
                        <p><a href="#">모니터</a></p>
                        <p><a href="#">키보드</a></p>
                        <p><a href="#">마우스</a></p>
                        <p><a href="#">기타 PC 주변기기</a></p>
                   
                      </li>
                      <li>
                      <h4>카메라/DSLR</h4>
                        <p><a href="#">필름카메라</a></p>
                        <p><a href="#">DSLR/미러리스</a></p>
                        <p><a href="#">렌즈/필터/컨버터</a></p>
                        <p><a href="#">일반디카/토이카메라</a></p>
                        <p><a href="#">삼각대/플래시/조명</a></p>
                        <p><a href="#">메모리/배터리/가방</a></p>
                   
                      </li>
                    </ul></div>
              </li>

              <li><Link to="/categories/600">가전제품</Link>
                  <div class="subBox"><ul>
                      <li>
                        <h4>생활가전</h4>
                        <p><a href="#">가습기</a></p>
                        <p><a href="#">청소기</a></p>
                        <p><a href="#">공기청정기</a></p>
                        <p><a href="#">선풍기/냉풍기</a></p>
                        <p><a href="#">히터/온풍기</a></p>
                        <p><a href="#">전기매트/장판</a></p>
                      </li>
                      <li>
                      <h4>주방가전</h4>
                        <p><a href="#">인덕션/전기레인지</a></p>
                        <p><a href="#">전기밥솥</a></p>
                        <p><a href="#">커피머신</a></p>
                        <p><a href="#">에어프라이어</a></p>
                        <p><a href="#">토스터</a></p>                      
                        <p><a href="#">전자레인지</a></p>                      
                      </li>
                    </ul></div>
              </li>
              <li><Link to="/categories/700?keyword=700">스포츠/레저</Link>
                  <div class="subBox"><ul>
                      <li>
                      <Link to="/categories/700?keyword=710"><h4>골프</h4></Link>
                        <p><Link to="/categories/700?keyword=711">골프채</Link></p>
                        <p><Link to="/categories/700?keyword=712">골프 남성 의류</Link></p>
                        <p><Link to="/categories/700?keyword=713">골프 여성 의류</Link></p>
                        <p><Link to="/categories/700?keyword=714">골프백</Link></p>
                        <p><Link to="/categories/700?keyword=715">골프 공</Link></p>
                      </li>
                      <li>
                      <Link to="/categories/700?keyword=720"><h4>캠핑</h4></Link>
                        <p><Link to="/categories/700?keyword=721">캠핑 의자/테이블</Link></p>
                        <p><Link to="/categories/700?keyword=722">캠핑 취사용품</Link></p>
                        <p><Link to="/categories/700?keyword=723">캠핑 랜턴</Link></p>
                        <p><Link to="/categories/700?keyword=724">침낭/매트/해먹</Link></p>
                        <p><Link to="/categories/700?keyword=725">텐트/그늘막</Link></p>                      
                        <p><Link to="/categories/700?keyword=726">기타 캠핑 용품</Link></p>                      
                      </li>
                      <li>
                      <Link to="/categories/700?keyword=730"><h4>낚시</h4></Link>
                        <p><Link to="/categories/700?keyword=731">공통 낚시 장비</Link></p>
                        <p><Link to="/categories/700?keyword=732">바다 낚시</Link></p>
                        <p><Link to="/categories/700?keyword=733">민물 낚시</Link></p>
                        <p><Link to="/categories/700?keyword=734">낚시 의류 및 기타 용품</Link></p>
                    
                      </li>
                      <li>
                      <Link to="/categories/700?keyword=740"><h4>등산/클라이밍</h4></Link>
                        <p><Link to="/categories/700?keyword=741">남성 등산복</Link></p>
                        <p><Link to="/categories/700?keyword=742">여성 등산복</Link></p>
                        <p><Link to="/categories/700?keyword=743">등산 가방</Link></p>
                        <p><Link to="/categories/700?keyword=744">암벽/클라이밍</Link></p>
                        <p><Link to="/categories/700?keyword=745">기타 등산 용품</Link></p>
                    
                      </li>
                    </ul></div>
              </li>

              <li><Link to="/categories/800?keyword=800">도서/티켓/문구</Link>
                  <div class="subBox"><ul>
                      <li>
                      <Link to="/categories/800?keyword=810"><h4>도서</h4></Link>
                        <p><Link to="/categories/800?keyword=811">시/소설</Link></p>
                        <p><Link to="/categories/800?keyword=812">자기계발</Link></p>
                        <p><Link to="/categories/800?keyword=813">교양/인문</Link></p>
                        <p><Link to="/categories/800?keyword=814">경제/경영</Link></p>
                        <p><Link to="/categories/800?keyword=815">예술/디자인</Link></p>
                        <p><Link to="/categories/800?keyword=816">여행/취미/레저/건강</Link></p>
                        <p><Link to="/categories/800?keyword=817">과학/IT</Link></p>
                        <p><Link to="/categories/800?keyword=818">기타</Link></p>
                      </li>
                      <li>
                      <Link to="/categories/800?keyword=820"><h4>상품권</h4></Link>
                        <p><Link to="/categories/800?keyword=821">문화/도서</Link></p>
                        <p><Link to="/categories/800?keyword=822">백화점</Link></p>
                        <p><Link to="/categories/800?keyword=823">기타 상품권</Link></p>
                     
                      </li>
                    </ul></div>
              </li>

              <li><Link to="/categories/900?keyword=900">뷰티/미용</Link>
                  <div class="subBox"><ul>
                      <li>
                      <Link to="/categories/900?keyword=910"><h4>스킨케어</h4></Link>
                        <p><Link to="/categories/900?keyword=911">클렌징/스크럽</Link></p>
                        <p><Link to="/categories/900?keyword=912">스킨/토너/미스트</Link></p>
                        <p><Link to="/categories/900?keyword=913">로션/에멀젼</Link></p>
                        <p><Link to="/categories/900?keyword=914">에센스/크림</Link></p>
                        <p><Link to="/categories/900?keyword=915">팩/마스크</Link></p>
                        <p><Link to="/categories/900?keyword=916">썬케어</Link></p>
                      </li>
                      <li>
                      <Link to="/categories/900?keyword=920"><h4>색조 메이크업</h4></Link>
                        <p><Link to="/categories/900?keyword=921">아이라이너/브로우</Link></p>
                        <p><Link to="/categories/900?keyword=922">아이섀도우</Link></p>
                        <p><Link to="/categories/900?keyword=923">마스카라</Link></p>
                        <p><Link to="/categories/900?keyword=924">립틴트</Link></p>
                        <p><Link to="/categories/900?keyword=925">립밤/립글로즈</Link></p>                      
                        <p><Link to="/categories/900?keyword=926">립스틱</Link></p>                      
                        <p><Link to="/categories/900?keyword=927">치크/블러셔</Link></p>                      
                        <p><Link to="/categories/900?keyword=928">기타</Link></p>                      
                      </li>
                      <li>
                      <Link to="/categories/900?keyword=930"><h4>베이스 메이크업</h4></Link>
                        <p><Link to="/categories/900?keyword=931">메이크업베이스</Link></p>
                        <p><Link to="/categories/900?keyword=932">BB/CC크림</Link></p>
                        <p><Link to="/categories/900?keyword=933">쿠션팩트</Link></p>
                        <p><Link to="/categories/900?keyword=934">파운데이션</Link></p>
                        <p><Link to="/categories/900?keyword=935">파우더/팩트</Link></p>                      
                        <p><Link to="/categories/900?keyword=936">프라이머/컨실러</Link></p>                                         
                        <p><Link to="/categories/900?keyword=937">기타</Link></p>                      
                      </li>
                      <li>
                      <Link to="/categories/900?keyword=940"><h4>바디/헤어케어</h4></Link>
                        <p><Link to="/categories/900?keyword=941">샴푸/린스</Link></p>
                        <p><Link to="/categories/900?keyword=942">헤어에센스/트리트먼트</Link></p>
                        <p><Link to="/categories/900?keyword=943">헤어스타일링</Link></p>
                        <p><Link to="/categories/900?keyword=944">염색</Link></p>
                        <p><Link to="/categories/900?keyword=945">바디클렌저/로션</Link></p>                      
                        <p><Link to="/categories/900?keyword=946">핸드/풋케어</Link></p>                                         
                   
                      </li>
                      <li>
                      <Link to="/categories/900?keyword=950"><h4>네일아트</h4></Link>
                        <p><Link to="/categories/900?keyword=951">네일아트/스티커</Link></p>
                        <p><Link to="/categories/900?keyword=952">매니큐어/페디큐어</Link></p>
                        <p><Link to="/categories/900?keyword=953">네일케어도구</Link></p>                                       
                   
                      </li>
                    </ul></div>
              </li>

              <li><Link to="/categories/1000?keyword=1000">가구/인테리어</Link>
                  <div class="subBox"><ul>
                      <li>
                      <Link to="/categories/1000?keyword=1010"><h4>가구</h4></Link>
                        <p><Link to="/categories/1000?keyword=1011">거실가구</Link></p>
                        <p><Link to="/categories/1000?keyword=1012">침실가구</Link></p>
                        <p><Link to="/categories/1000?keyword=1013">학생/서재/사무용가구</Link></p>
                        <p><Link to="/categories/1000?keyword=1014">선반/수납 가구</Link></p>
                        <p><Link to="/categories/1000?keyword=1015">주방가구</Link></p>
                        
                      </li>
                      <li>
                      <Link to="/categories/1000?keyword=1020"><h4>인테리어소품</h4></Link>
                        <p><Link to="/categories/1000?keyword=1021">포스터/그림/액자</Link></p>
                        <p><Link to="/categories/1000?keyword=1022">디퓨저/캔들</Link></p>
                        <p><Link to="/categories/1000?keyword=1023">쿠션/방석</Link></p>
                        <p><Link to="/categories/1000?keyword=1024">탁상/벽시계</Link></p>
                        <p><Link to="/categories/1000?keyword=1025">거울</Link></p>                      
                        <p><Link to="/categories/1000?keyword=1026">기타 인테리어 소품</Link></p>                      
                      </li>
                    </ul></div>
              </li>

              <li><Link to="/categories/1100?keyword=1100">생활/주방용품</Link>
                  <div class="subBox"><ul>
                      <li>
                      <Link to="/categories/1100?keyword=1110"><h4>주방용품</h4></Link>
                        <p><Link to="/categories/1100?keyword=1111">그릇/홈세트</Link></p>
                        <p><Link to="/categories/1100?keyword=1112">잔/컵</Link></p>
                        <p><Link to="/categories/1100?keyword=1113">텀블러/물병</Link></p>
                        <p><Link to="/categories/1100?keyword=1114">냄비/프라이팬</Link></p>
                        <p><Link to="/categories/1100?keyword=1115">조리도구</Link></p>
                        <p><Link to="/categories/1100?keyword=1116">보관/밀폐용기</Link></p>
                        <p><Link to="/categories/1100?keyword=1117">커피용품</Link></p>
                      </li>
                      <li>
                      <Link to="/categories/1100?keyword=1120"><h4>욕실용품</h4></Link>
                        <p><Link to="/categories/1100?keyword=1121">구강/면도용품</Link></p>
                        <p><Link to="/categories/1100?keyword=1122">샤워/목욕용품</Link></p>
                        <p><Link to="/categories/1100?keyword=1123">수건/타월</Link></p>
                        <p><Link to="/categories/1100?keyword=1124">욕실수납/정리</Link></p>
                                           
                      </li>
                    </ul></div>
              </li>
            </ul>
      </div>
        <ul>
          <li><a href="#!"><p>이벤트</p></a></li>
          <li><a href="#!"><p>이달의행사</p></a></li>
          <li><a href="#!"><p>땡처리</p></a></li>
          <li><a href="#!"><p>출석체크</p></a></li>
        </ul>
    </div>
  )
}

export default NavList