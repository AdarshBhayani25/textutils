import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  return (
    <>
       <Navbar title="adarsh" />
       <div className="container">
       <Textform heading="Enter the text below to analyze"/>
       </div>
 
    </>
  );
}

export default App;
