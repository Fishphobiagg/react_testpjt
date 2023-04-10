/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [제목, a] = useState(['안쩌는 옷', '너무 구려서안팔리는데 잘나가는척 하는 옷', '그냥 주문 들어오면 부랴부랴 만들 옷']);
  let [좋아요, 좋아요업] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, inputChange] = useState('');


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
          </div>
        )
      })}
      <input onChange={(e)=>{inputChange(e.target.value); console.log(input)}}/>

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
