import { useState,useEffect } from "react";
import axios from "axios";

export const NewOrder = () => {

   
  const [data,setData] = useState([]);
  const inisial_state={
    
    name:"",
    new_problem:"",
    brand:""
  }
  const [neworder,setNewOrder]=useState(inisial_state)
  const {name,new_problem,brand} = neworder;
  const handleChange  = (e) =>{
    let{name,value} = e.target;

    setNewOrder((prev) => ({
       ...prev,[name] : value
    }))
}

const handlesubmit = (e) =>{
  e.preventDefault();
 // console.log(studentdata)
 axios.post("http://localhost:8080/orders",neworder)
 setNewOrder(inisial_state)
 fetchdata()

}

const fetchdata = () =>{
  axios.get("http://localhost:8080/orders").then((res) => {
      setData(res.data);
  })
}

useEffect(() => {
  fetchdata()
},[])
//console.log(neworder)
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
          onChange={handleChange}
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          onChange={handleChange}
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
          onChange={handleChange}
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit" onClick={handlesubmit}>submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        <div className="past-orders">
          <span className="id"></span>. <span className="problem"></span>{" "}
          <span className="cost">
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
          </span>
          <p className="status">Status: </p>
          <hr />
        </div>
      </div>
    </div>
  );
};