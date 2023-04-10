/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [제목, titleChange] = useState(['안쩌는 옷', '너무 구려서안팔리는데 잘나가는척 하는 옷', '그냥 주문 들어오면 부랴부랴 만들 옷']);
  let [좋아요, 좋아요업] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, inputChange] = useState('');
  let today = new Date();

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{fontSize : '16px'}}>ReactBlog</h4>
      </div>
      {
      제목.map(function(a, i){
        return(
          <div className="list">
            <h4>{a}
            <span onClick={()=>{
              let a = [...좋아요]
              a[i] = a[i] + 1
              좋아요업(a)
            }}>👍 {좋아요[i]}</span>
            </h4>
            <p>옷 이름 : </p>
            <p>옷 가격 : </p>
            <button className='detail' onClick={()=>{setTitle(i);setModal(!modal)
            }}>상세정보</button>
            <button className='delete' onClick={()=>{
              let b = [...제목];
              let e = [...좋아요];
              b.splice(i, 1)
              e.splice(i, 1)
              titleChange(b)
              좋아요업(e)
            }}>삭제하기</button>
          </div>
        )
      })}
      <input onChange={(e)=>{inputChange(e.target.value)}}/>
      <button onClick={()=>{
        if (input.length !== 0)
        {
        let c = [...제목]
        let ddabong = [...좋아요]
        ddabong.push(0)
        c.push(input)
        좋아요업(ddabong)
        titleChange(c)
        }
      }}>글쓰기</button>
      {
        modal == true? <Modal 제목={제목} title={title}/>:null
      }
    </div>
    
  );
}
function Modal(props){
  return(
    <div className="modal">
    <h4>{props.제목[props.title]}</h4>
    <p>옷 이름 :</p>
    <p>옷 가격 :</p>
    <button className='buy'>구매하기</button>
  </div>
  )
}


export default App;
