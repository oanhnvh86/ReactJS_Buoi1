import logo from './logo.svg';
import './App.css';
// EX1
// import HeaderRCC from './Components/HeaderRCC';
// import CardProduct from './Components/CardProduct';

// EX2
// import HomeComponent from './Components/BTComponent/HomeComponent';

// EX3
// import CardComponent from './Components/DataBinding/CardComponent';

//EX4
import BaiTapThucHanhLayout from './Components/BaiTapLayoutComponent/BaiTapThucHanhLayout';


// App: component chính, component cha, chứa các component con
function App() {
  return (
    <div className="App">
      {/* //EX1
      <HeaderRCC></HeaderRCC>
      <div className='row'>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
      </div> */}

      {/* EX2: BTComponent */}
      {/* <HomeComponent/> */}

      {/* EX3: Data Biding  */}
      {/* <CardComponent/> */}

      {/* EX4: BT BUOI 31 */}
      <BaiTapThucHanhLayout/>

    </div>
  );
}

export default App;
