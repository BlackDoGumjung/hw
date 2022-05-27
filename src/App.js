/* eslint-disable*/ 


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';


function App() {
  
  let post = '분당 국밥 맛집';
  let [글제목, 글제목변경] = useState(['여자코트 추천', '분당 우동 맛집', '리액트 독학']);
  let [날짜, setDate] = useState(['2월 6일', '2월 7일', '2월 8일']);
  let [글내용, setContent] = useState(['여자코트가 더 예뻐요!', '돈가스 맛집만 알고 있음.', '뷰도 같이 해보도록 하자.'])
  
  let [good, setGood] = useState([0,0,0]);
  let [omg, setOmg] = useState([0,0,0]);

  let [modal, setModal] = useState(false);  

  let [title, setTitle] = useState(0); 
  let [content, setContents] = useState(0);
  let [date, setDates] = useState(0);

  // input에 값 입력하기 위한 변수
  let [입력값, 입력값변경] = useState('');


  return ( 
    <div className="App">
      <Example />

      <nav className="black-nav">
        <h4 style={ {borderBottom : '1px solid #fff', color:'#ccc', fontSize : '20px'} } id={post}>REACT BLOG</h4>
      </nav>
      <button onClick={()=>{
        let sortTitle = [...글제목]; 
        sortTitle.sort();
        글제목변경(sortTitle);
      }}>가나다순정렬</button>
      <button onClick={()=>{ 
        let copy = [...글제목]; 
        copy[0] = '남자코트 추천'; 
        글제목변경(copy); } }>글수정</button>

      {
        글제목.map(function(a, i){
          return(
            <div className='list' key={i}>
              <h4 className='title' onClick={()=>{
                modal == true ? setModal(false) : setModal(true)
                setTitle(i);
                setDates(i);
                setContents(i);
              }}>{ a }<span onClick={ (e)=>{ e.stopPropagation(); 
                let copy = [...good];
                copy[i] = copy[i] + 1
                setGood(copy) } }>🥰</span> {good[i]} 
              <span onClick={(e)=>{ e.stopPropagation();
                let copyOmg = [...omg];
                copyOmg[i] = copyOmg[i] + 1
                setOmg(copyOmg) }}>🤦‍♀️</span> {omg[i]}
              </h4>
              <p style={{ marginTop : "0px"}}>{ 날짜[i] }</p>
              <button style= {{marginBottom : '10px'}}onClick={()=>{
                let copy = [...글제목];
                copy.splice(i,1);
                글제목변경(copy)
              }}>삭제</button>
            </div>
          )
        })
      }

        {
          modal == true ? <Modal color={'skyblue'} 글제목={글제목} 날짜={날짜} 글내용={글내용} 글제목변경={글제목변경} title={title} date={date} content = {content} setDate={setDate} setContent={setContent}/> : null     
        }



        <input type="text" style={{padding : '10px', margin : '10px'}} onChange={(e)=>{  
          입력값변경(e.target.value);
          }}></input>
        <button onClick={(e)=>{ 
          let copy =[...글제목];
          copy.push(입력값); 
          글제목변경(copy);
        }}> 입력하기</button>
        

   

    </div>
  );
}




      function Modal(props){
        return (
              <div className='modal' style= {{background: props.color}}>
                <h4>{props.글제목[props.title]}</h4> 
                <p>{props.날짜[props.date]}</p>
                <p>{props.글내용[props.content]}</p>
                <button onClick={()=>{
                  props.글제목변경(['힘껏 고영 돌보기', '판교 우동 맛집', 'JS 독학']);
                  props.setContent(['잘 놀아주기', '모밀도 맛있음', '리액트만 할 순 없지!'])
                }}>글수정</button>
            </div>              
        )    
      }






export default App;
