/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [제목, a] = useState(['안쩌는 옷', '너무 구려서안팔리는데 잘나가는척 하는 옷', '그냥 주문 들어오면 부랴부랴 만들 옷']);
  let [좋아요, 좋아요업] = useState([0, 0, 0]);
  let [modal, setModal] = useState([false, false, false]) 
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{fontSize : '16px'}}>ReactBlog</h4>
      </div>
      <button onClick={()=>{
        let sorting = [...제목];
        sorting.sort();
        a(sorting)
      }}>상품 정렬</button>
      <button onClick={()=>{

        let arr = [1, 2, 3];

        let copy = [...제목];
        copy[0] = '여자코트 추천'
        a(copy);
      }}>
        마술하나 보여줄까
      </button>
        {
          제목.map(function(a, i){
            return(
            <div className='list' key={i}>
              <h4 onClick={()=>{
                let change = [...modal]
                change[i] = !change[i]
                console.log(change[i], !change[i])
                setModal(change)
              }}>{제목[i]}
               <span onClick={()=>{
                let a = [...좋아요]
                a[i] = a[i]+1
                좋아요업(a)
              }}>❤</span> {좋아요[i]}</h4>
              <p>11월 26일 내 생일</p>
              {
              modal[i] == true? <Modal 제목={제목[i]} /> : null
            }
            </div>
            )
          })
        }
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
    <h4>{props.제목}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button>글수정</button>
  </div>
  )
}


export default App;
