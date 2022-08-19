import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';

function App() {
  return (
    <div className='bg-black font_white'>
      <Header></Header>
      <Posts></Posts>
    </div>
  );
}

export default App;
