import React, { useState } from "react";
import Notebook from "./Notebook"
import CompleteTasks from "./CompleteTasks";
import { Link } from "react-router-dom";

 const Thirdpage = ()=>{

const [myobj,setmyobj] =useState("");
const [val,setVal] = useState();
const [allwork,setallwork] = useState([]);
const [saved_data, setSaved_data] = useState([]);
const [tasks,allTasks] = useState([]);
const [completeTasks,setCompleteTasks] = useState([]);
const [editInd,setEditInd] = useState();
const [editData,setEditData] = useState();
const [saved,setSaved] = useState(false);

  const handleInput = (value)=>{
    console.log(value);
    console.log("onchange click",value);
    setVal(value);
  }

  // handling edit button
  const handleEditButton = (e) =>{      
    setEditData(e.target.value);
    setSaved(true);
  }

  //handle Editable Save button after editing
   const handleEditableSave=()=>{
    // console.log("save button for edit index",index);
    const dataAfterEdit=[...saved_data]
    dataAfterEdit[editInd] = editData;
    setSaved_data(dataAfterEdit);
    setEditInd(-1);
   }

//saved task

function handleSaveClick(){
  console.log("save is cicked");
  const updatedSaved_data  = [...saved_data,val];
  console.log("saved data",updatedSaved_data);
  setSaved_data(updatedSaved_data);
}

// delete task
const deleteTask = (ind)=>{
  const deleteNewTask = [...saved_data];
  deleteNewTask.splice(ind,1);
  console.log(deleteNewTask);
  console.log("index is",ind); 
  setSaved_data(deleteNewTask);
  console.log("task has deleted successfully"); 
}

//Complete task
const completeTask = (index)=>{
  const updateCompleteTask = [...completeTasks,saved_data[index]];
  setCompleteTasks(updateCompleteTask);
}

//Edit task
const editTask=(indexEdit)=>{
  setEditInd(indexEdit);
  setEditData(saved_data[indexEdit])
}

//handle complete task
const handleCompleteTask=()=>{
  //handle complete task will happen by using Redux Tool kit
  
}

  return (
    <div className="bg-blue-950  h-screen">
    <div className="flex">
    <div className="">
      <div className="mx-60">
        <h1 className="text-white"> works:</h1>
      </div>
      
      <div className=" mx-28 my-10 ">

        <div>
        <textarea placeholder="Enter your work here" 
        rows={20} 
        onChange = {(e)=> handleInput(e.target.value)} 
        className="w-96 h-1/2 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0 mx-4">
        </textarea>
        </div>

        <div>
          <button className="text-black border-black rounded-3xl bg-blue-400 w-96 mx-4 mt-3 h-10"
            onClick={handleSaveClick}>
            Save
          </button>
        </div>

        <div>
          <button className="text-black border-black rounded-3xl bg-blue-400 w-96 mx-4 mt-3 h-10"
            onClick={handleSaveClick}>
            All Tasks
          </button>
        </div>

        <div>
          <Link to="/Meetings/completedTasks"><button className="text-black border-black rounded-3xl  bg-blue-400 w-96 mx-4 mt-3 h-10"
            onClick={handleCompleteTask}>
            Complete Tasks
          </button>
          </Link>
        </div>

      </div>
      </div>

      <div className="mx-52 text-white">

            {saved_data.map((data,index)=> {
              if(index===editInd){
              return(
              <div>
        
                <textarea 
                rows={20} 
                className="w-96 h-1/2 px-3 py-2 border border-slate-600 rounded-xl focus:outline-0 mx-4 text-black"
                value={editData}
                onChange={(e)=>handleEditButton(e)}
              
              > </textarea>
                <button className="h-9 w-24 bg-red-500 rounded-3xl text-black mt-4"
                  onClick={handleEditableSave}>save</button>
              </div>
            )}
            else{
              return(
              <div>
              <button className="text-black rounded-3xl bg-blue-400 w-132 h-16 my-16 flex">
              <h1 key={index} className="text-lg sm:text-sm p-2">{data}</h1>

              <button 
              onClick={()=>deleteTask(index)} 
              className="h-9 w-24 bg-red-100 rounded-3xl text-black mt-4">Delete</button>

              <button 
              onClick={()=>completeTask(index)} 
              className="h-9 w-24 bg-red-100 rounded-3xl text-black mt-4 ">Complete</button>
              <button onClick={()=>editTask(index)} className="h-9 w-24 bg-red-100 rounded-3xl text-black mt-4">Edit</button>
              </button>
              </div>
            )}
            })
            }
      
      </div>
    </div>
    </div>
  );
};
export default Thirdpage;