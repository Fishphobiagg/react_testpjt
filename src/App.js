/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [제목, a] = useState(['안쩌는 옷', '너무 구려서안팔리는데 잘나가는척 하는 옷', '그냥 주문 들어오면 부랴부랴 만들 옷']);
  let [좋아요, 좋아요업] = useState(0);
  let [modal, setModal] = useState(false);
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
      <div className='list'>
        <h4>{제목[0]} <span onClick={()=>{ 좋아요업(좋아요+1) }}>❤</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{
          let status = 0
        modal == true? status=false: status=true
        setModal(status)
        }}>{제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {
        modal == true? <Modal/> : null
      }
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}


export default App;
