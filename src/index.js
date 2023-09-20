import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HeaderRCC from './Components/HeaderRCC';
// import CardProduct from './Components/CardProduct';
import App from './App';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//! render(): chỉ cho phép 1 obj jsx: => nếu muốn có cả h1 và HeaderRCC thì phải bỏ 2 cái này vào trong 1 thẻ nào đó. ở đay mình vd thẻ div ở ngoài
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // C1--------------
  // <div>
  //   <h1>Hello ReactJS -2</h1>
  //   <HeaderRCC/>
  //   <CardProduct></CardProduct>
  //   {/* <HeaderRCC></HeaderRCC> */}
  // </div>

  // C2: đưa tất cả component con vào App.js (Componet cha)--------------
  <App/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
