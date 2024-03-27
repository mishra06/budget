import React, { useRef , useContext} from 'react'
import { Context } from './../App';
import './AddItem.css'

// const AddItem = ({setExpnc, setTotal}) => {
const AddItem = () => {

    const {setExpnc,setTotal} = useContext(Context)


        const titleRef = useRef();
        const priceRef = useRef();

  return (
    <div className='add_sec'>
        <h1>Add Expenses</h1>
        <div className='input_sec'>
            <input ref={titleRef} placeholder='Enter title' type="text" />
            <input ref={priceRef} placeholder='Enter Price' type="number" />
        </div>
        
        <button
            onClick={()=>{
                const title = titleRef.current.value;
                const price = parseInt(priceRef.current.value);
                if(title==="" || price==="")
                {
                    alert("Please add item")
                }
                else {
                    setExpnc(prev=>[...prev,{title,price}])
                    setTotal(prevValue=>price+prevValue)
                    titleRef.current.value="";
                    priceRef.current.value="";   
                }
               
            }}
        >Add</button>
      
    </div>
  )
}

export default AddItem

 