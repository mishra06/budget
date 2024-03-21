
import './App.css';
import { useState,createContext } from 'react';
import OverView from './components/OverView';
import ShowBudget from './components/ShowBudget';
import AddItem from './components/AddItem';

export const Context = createContext();

function App() {

  const [expnc, setExpnc]= useState([]);
  const [total , setTotal] = useState(0);

  

  return (
    <Context.Provider value={{total,setTotal,setExpnc,expnc}}>
    <div className='container'>
      <OverView />
      <ShowBudget />
      <AddItem />
    </div>
    </Context.Provider>

    // <div>
    //   <OverView total={total}/>
    //   <ShowBudget expnc={expnc}/>
    //   <AddItem setTotal={setTotal} setExpnc={setExpnc}/>
    // </div>
  );
}

export default App;
