import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { valueSetter, deleteSelection,dataSetter, deleteTask, addTask } from "./store/slices/ListSlice";
import store from "./store/store";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

const baseURL = "https://drftest.herokuapp.com/tasklist/tasks/";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => 
  {
    // fetch(request, {mode: 'no-cors'}).then(function(response){
    //   return response;
    // }).then(function(j){
    //   console.log(j);
    // }).catch(function(error){
    //   console.log('Request failed', error);
    // })

    

  }, []);

  axios?.get
    (
      baseURL
    )?.then((response) => setData(response.data)).catch(err => console.log(err));

  const allData = useSelector((state)=>{
    return state;
  }
  )
  // console.log("Data : ", allData.listing.myData);
  const selectDelete = ()=>{
    dispatch(deleteSelection());
  }
  //console.log("Data : ",allData?.listing?.myData );
  const taskDelete =(payload)=>{
    dispatch(deleteTask(payload));
  }
  const taskAdd=(payload)=>{
    if(allData?.listing?.value === ""){
      alert("Enter task name");
    }else{
      dispatch(addTask());
    }
  }
  const setValue=(payload)=>{
    dispatch(valueSetter(payload));
  }
  const setData=(payload)=>{
    dispatch(dataSetter(payload));
  }
  function manipulator(e, index) {
    //console.log({ val: e.target.checked });
    const URL = baseURL+index+"/";
    axios.put(URL, {is_checked: e.target.checked})

    // const tempData = allData.listing.myData?.map((elem, pos) => {
    //   if(e.target.checked){
    //     if (pos === index) {
    //       // console.log("Selected element: ", elem?.name , elem?.isChecked);
    //       return {
    //         ...elem,
    //         is_checked: true,
    //       };
          
    //     } else return elem;
    //   }else{
    //     if (pos === index) {
    //       //console.log("Selected element: ", elem?.name , elem?.isChecked);
    //       return {
    //         ...elem,
    //         is_checked: false,
    //       };
          
    //     } else return elem;
    //   }
    // })

    // setData(tempData);

    // console.log("Data : ", allData.listing.myData);
    // setList((prev) =>
    //   prev?.map((elem, pos) => {
    //     if (pos === index) {
    //       return {
    //         ...elem,
    //         isChecked: e.target.checked,
    //       };
    //     } else return elem;
    //   })
    // );
  }

  const muafasf = (e) => {
    setValue(e.target.value);
  };


  const handleLogout=()=>{
    axios.post("https://drftest.herokuapp.com/user/logout/");
    navigate("/Login");
  }
  //------------------------------------------
  // const [value, setValue] = useState("");
  // const [list, setList] = useState([
  //   {
  //     name: "First Element",
  //     taskId: 0,
  //     isChecked: false,
  //   },
  // ]);
  // const [myData, setmyData] = useState([]);

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => setmyData(response.data));
  // }, []);
//-------------------------------------------------
  // useEffect(() => {
  //   fetch(baseURL)
  //       .then(response => response.json())
  //       .then(data => this.setList({data}))

  //   // axios.get(baseURL).then((response) => setList(response.data));
  // }, []);

  //console.log("List: " , {list});
//--------------------------------------------

    //console.log({ list });
  
    // const addTask = () => {
    //   setList([
    //     ...list,
    //     {
    //       name: value,
    //       taskId: list.length,
    //       isChecked: false,
    //     },
    //   ]);
    //   setValue("");
    // };

    // function deleteTask(id) {
    //   setList(myData.filter((elem, index) => index !== id));
    //   setValue("");
    // }
//---------------------------------------------
    // function deleteTask(id) {
    //   setList(list.filter((elem, index) => index !== id));
    //   setValue("");
    // }
  //---------------------------------------------
    // const deleteSelection = () => {
    //   setmyData((prev) => prev.filter((elem) => !elem?.isChecked));
    // };
    
    //------------------------------------------
    return (
      <>
        <h1 className="title">Notes Application</h1>
      <div className="App">
        <div className="tasks">
          <ul className="list-task">
            <h2 className="title-min">Notes</h2>
          {
          /* {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="grid">
              <div className="card" key={id}>
                <h3 className="list-title">{title}</h3>
              </div>
            </div>
          );
        })} */
        }
        {allData.listing.myData.map((post, index) => 
        {
          //const {name} = post;
          return (
            <div className="card">
              <li key={index}>

                  <input
                    checked={post.is_checked}
                    className="checkBoxes"
                    onChange={(e) => manipulator(e, post.id)
                    }
                    type="checkBox"
                  >
                    
                  </input>

                  <button
                    className="delete-button"
                    onClick={() => {
                      // deleteTask(item.taskId);
                      taskDelete(post.id);
                      // deleteTask(index);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="close"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                  </button>

                  <h4 className="list-title">{post?.task_name}</h4>

              </li>
            </div> 
            )})}
            {/* {list.map((item, index) => (
              <li key={index}>
                <p>
                  <input
                    className="checkBoxes"
                    onChange={(e) => manipulator(e, index)}
                    type="checkBox"
                  ></input>

                  {item?.task_name}

                  <button
                    className="delete-button"
                    onClick={() => {
                      // deleteTask(item.taskId);
                      deleteTask(index);
                    }}
                  >
                    Delete
                  </button>
                </p>
              </li>
            ))} */}
          </ul>
          <div className="bottom-bar">
            <input
            className="task-type"
            type="submit text"
            placeholder="Enter a new task"
            value={allData.listing.value}
            spellCheck="true"
            onChange={muafasf}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // addTask();
                taskAdd();
                setValue("");
              }
            }}
            />

            <div className="buttons-two">


              <button className="add-button" onClick={taskAdd}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="add-new"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"></path></svg>
              </button>
              {/* <button className="delete-button-lower" onClick={selectDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="close"><path d="M256 33C132.3 33 32 133.3 32 257s100.3 224 224 224 224-100.3 224-224S379.7 33 256 33zm108.3 299.5c1.5 1.5 2.3 3.5 2.3 5.6 0 2.1-.8 4.2-2.3 5.6l-21.6 21.7c-1.6 1.6-3.6 2.3-5.6 2.3-2 0-4.1-.8-5.6-2.3L256 289.8l-75.4 75.7c-1.5 1.6-3.6 2.3-5.6 2.3-2 0-4.1-.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6 0-2.1.8-4.2 2.3-5.6l75.7-76-75.9-75c-3.1-3.1-3.1-8.2 0-11.3l21.6-21.7c1.5-1.5 3.5-2.3 5.6-2.3 2.1 0 4.1.8 5.6 2.3l75.7 74.7 75.7-74.7c1.5-1.5 3.5-2.3 5.6-2.3 2.1 0 4.1.8 5.6 2.3l21.6 21.7c3.1 3.1 3.1 8.2 0 11.3l-75.9 75 75.6 75.9z"></path></svg>
              </button> */}
              <button className="delete-button-lower" onClick={handleLogout}>LO</button>
            </div>
        </div>
        </div>
        <div className="sList">
          <h3 className="sTitle">Selected Tasks</h3>
          <div className="tasks-two">
            <ul className="list-task-sel">
            {allData.listing.myData.map((item) =>
              item?.is_checked ? (
                <div className="card">
                <li className="text" key={item.id}>
                  <p>{item.task_name}</p>
                </li>
                </div>
              ):
              (<></>)
            )}

            {/* {list.map((item) =>
              item?.isChecked ? (
                <li key={item.taskId}>
                  <p>{item.name}</p>
                </li>
              ) : (
                <></>
              )
            )} */}
            </ul>
          </div>
        </div>
      </div>
      </>
    );
}

export default List;