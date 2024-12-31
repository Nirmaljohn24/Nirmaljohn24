import './App.css'
import Counter from './Features/Counter/Counter.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { updateTest } from './features/test/testSlice.js';



function App() {
  const test = useSelector((state) => state.test.value);

  const dispatch = useDispatch();

  const changeValue = () =>{

    const newValue = "Johnson Dravid";

    dispatch(updateTest(newValue));


  }

  return (
    
    <>

    <h1>Value: {test}</h1>
    <button onClick={changeValue}>Click</button>
    <Counter/>
    </>
     
    
  )
}

export default App
