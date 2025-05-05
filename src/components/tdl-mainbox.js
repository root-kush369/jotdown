import React , {useState ,useEffect , useRef} from "react"
import { FaArrowRight } from 'react-icons/fa'; 
import "./tdl-mainbox.css"



import loadingLogo from "../assets/loading-logo.svg"; // Changed from src/components/
import AnimeArt from "../assets/AnimeArt.jpg"; // Changed from src/components/
import am1 from "../assets/am.jpg"; // Changed from src/components/
import am2 from "../assets/am2.jpg"; // Changed from src/components/
import am3 from "../assets/am3.jpg"; // Changed from src/components

// import mb1  from "../assets/mb1.jpg";
// import mb2 from "../assets/mb2.jpg";
// import mb3 from "../assets/mb3.jpg";
// import mb4 from "../assets/mb4.jpg";
import mb5 from "../assets/mb5.jpg";
import mb6 from "../assets/mb6.jpg";
import mb7 from "../assets/mb7.jpg";
import mb8 from "../assets/mb8.jpg";
import mb9 from "../assets/mb9.jpg";
import mb10 from "../assets/mb10.jpg";
import mb11 from "../assets/mb11.jpg";
import mb12 from "../assets/mb12.jpg";
import mb13 from "../assets/mb13.jpg";






// import ar from "./components/ar.png"
//...........................................................

// import a from "/home/archkarch/archCustom/deb-for-EVER/All-webDevelopment-Codes/ReactFolio/day3.1_jotdown_app/src/components/"

//................................................................................................
//REMEMBER FOR REACT INTERVIEWS...............

// NOTE STYLING IN DONE ALWAYS OUTSIDE OF RETURN() BCOZ INSIDE RETURN INSIDE TAG WE DECLARE
//..VARIABLE OR I CAN SAY PROP STYLE THAN STYLING TAKES PLACE
//............SECONDLY

//.................................. SOMETIME ON FLY DYNAMICALLY I WANA ADD TAGS/withdataAsElements SO NOT INSIDE RETURN WE CAN USE
//..............CONCEPT OF STATE useState and use ifelse with it

//NOTE ~~~> i used styling prop inside tags so i can style dynamically not already
//

//................................................................................................



// POINT1> PHOTOS CACHING SO TO REDUCE LOAD!
function TdlMainbox(){



/*caching photos*/
//   Register service worker
  useEffect(() => {
    
    
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/serviceworkerfile.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((error) => {
          console.log("Service Worker registration failed:", error);
        });
    }
  }, []);
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

//POINT2 loading screen at begin part
const [isLoading, setIsLoading] = useState(true);
// const [isLoadingText , setisLoadingText]=useState(true);

// const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = 
  setTimeout(() => {
    setIsLoading(false);
    // setisLoadingText(false); //need nahi h iske waise

  }, 3000); // 3-second delay

  return () => clearTimeout(timer);//    Cleanup to prevent memory leaks
}, []);


// POINT2.2 HANDLED TO DO TASK TAKING FROM STORAGE
  // Task state
  const [to_do, set_to_do] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(to_do));
  }, [to_do]);

// useEffect(function(){
//         const newtimer=setTimeout(function () {
//             setisLoadingText(false);
//         }
//     );
// });

// const loaderStyle = {
//     // overflowX:"hidden",
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '10vw',
//   height: '10vh',
// //   backgroundColor: '#000', // Black background (customize as needed)
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   zIndex: 999,
//   animation: 'fadeOut 5s ease-in-out forwards', // Fade out animation
// };
// const LoaderTextStyle=
// {


// }
// Keyframes for fade-out (you can define this in CSS or use a library)
// const loaderAnimation = `
//   @keyframes fadeOut {
//     0% { 
//     opacity: 1;
//     transform:translateZ(-3000px) scale(0) ;
//     height:100% ;
//     width:100%;
//     position:fixed;
//     // overflow-x:hidden;
    
//      }
//     80% { 
//     opacity: 0; 
//     transform:translateZ(-1000px) scale(1) ;
//     height:100% ;
//     width:100%;
//     position:fixed;
//     // overflow-x:hidden;
//     }
    
//     100% { 
//     opacity: 0;
//     transform:translateZ(-700px) scale(1.3) ;
//     height:100%;
//     width:100%;
//     position:fixed; /*this fixed up overflow of loader logo and Bg position fixed in all 3*/
//     // overflow-x:hidden;
//     }
//   }
// `;
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

//POINT3
//All state variables that  i used in modal


const [isModalOpen ,setModalBoolValue]=useState(false);
const [isModalOpenUpdateTask ,setModalBoolValueUpdateTask]=useState(false);

const[aagyivalue , setValueInput]=useState(""); //""~ye usestate leeya so bcoz ~> means empty / ye maine leeye so event.target.value jo ke input tag ko manipulate kr sku
const[aagyivalueUpdateTask, setvalueinputUpdateTask]=useState("");

const[editingIndex , SeteditingIndex] = useState(null); //used here for update task  + emt function mai use hua

const[filterType , setFilterType]= useState("ALL");
const [updateTaskStatus , setupdateTaskStatus]=useState("InComplete");


// const [ThemePhoto , setThemePhoto]=useState(isMobile ? mb10 : am2);
// const [ThemePhoto , setThemePhoto]=useState(am2);

//.....................................................................................

//POINT4 
//>>>>>>>>>>>>>>>>>>>>>>>>OPENING KEYBOARD SEGMENT<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//..............................................................................................................................
// adding refs to input fields as prop or i can say as attribute
const AddtaskModalinputRefs= useRef(null);
const UpdatetaskModalinputRefs=useRef(null);
//..............................................................................................................................

// Focus input when add-task modal opens
useEffect(function () { //i can chnage here name and add to onclick~~~~~>READ KUSH 
    if (isModalOpen && AddtaskModalinputRefs.current) {
        AddtaskModalinputRefs.current.focus();
    }
},[isModalOpen]
)


// Focus input when Update-task modal opens
useEffect(function () {
    if (isModalOpenUpdateTask && UpdatetaskModalinputRefs.current) {
        UpdatetaskModalinputRefs.current.focus();
      }
    },[isModalOpenUpdateTask]
)


//>>>>>>>>>>>>>>>>>>>>>>>>OPENING KEYBOARD SEGMENT ended<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//POINT5 opening modal and closing modal with updatetask ke time wala modal included
function openMOdalUpdateTask()
{
    setModalBoolValueUpdateTask(true);
    
}
function closeModalUpdateTask()
{
    setModalBoolValueUpdateTask(false);
    setupdateTaskStatus("InComplete"); // Reset dropdown
    SeteditingIndex(null); // Reset editing index
}
function openModal()
{
    setModalBoolValue(true);
    setValueInput("");
}
function closeModal()
{
    setModalBoolValue(false);
    setValueInput("");
}


//POIN6 ADDTASKFUNCTION
function add_task_funcN(index)
{
    
    
    // console.log("before aagyivalue: ",aagyivalue); //tracking!!
    if (aagyivalue) //yhaa tk b value new wali aa chuke hoge not " " bcoz before add task onchange activate keeya h mene prop
    {
        
        // console.log("after aagyivalue: ",aagyivalue);
        // set_to_do(aagyivalue); //READ~ye aagyi value pahle he linked setvalueinput se or wo block function ka pahle run hota h
        // set_to_do(aagyivalue); //set_to_do(aagyivalue); // This is the problem! It sets to_do to a string
        // //.........................................................................................................................................................
        // value set krdunga middle mae which is  and us newtask ke niche wha date b laani h so below part done
        
        // declared here apnidate variable with object new Date()
        const   apnidate = new Date() ;
        
        
        const  formatdate= apnidate.toLocaleString("en-US",{
            month  : "long",
            day : "numeric",
            year: "numeric",
                                        hour:"numeric",
                                        minute:"numeric",
                                        hour12:"true",
                                    });
                        
                                    // setdate(formatdate);
                    

                              

        const newTask = {
            id:Date.now(), //iske jgaah mai random number b gnerate krke match krwaa skta tha markfunction mae
            text: aagyivalue, // The task textif (event.target.value) //idhr mapping hue setvalueinput() aagyivalue ke saath hai or wo mene
            //..text mai daaldeya or usko to_do Object/array mai daal deeya [is traah to_Do/set_to_do and aagyivalue/setvalueinput are linked]
            date: formatdate, // The date
            Checked:  false, 
            dlt_btn: false , //shuru mai false rahega
            // To track if the task is marked done
          };

        
          setValueInput(""); 
          set_to_do ( [ ...to_do ,newTask] ); //Note~> to_do ab array hai naki single variable

               
//.........................................................................................................................................................                                    

          setModalBoolValue(false);
    }


    
 

}


//POINT7 function updatetaskfunction
//READ HERE ALL STEPS WERE VERY IMPORTANT
function Update_task_funcN()
{ 

    if (aagyivalueUpdateTask && editingIndex!=null  )
    // {
                set_to_do
                (
                    to_do.map(function(formalP,index){ //step1 i used here foreach use map as foreach dont return it just prints
                    
                        if (index === editingIndex) //step2 here editingindex comparision was imp [these come out as equal and had to be equal]
                        {
                        // set_to_do(  formalP.text);
                            console.log("formalP :", formalP.text); //formalp is data inside that array 
                            console.log("aagyiValueUpdateTask :", aagyivalueUpdateTask);
                            return{
                            ...formalP ,
                                text : aagyivalueUpdateTask , //dubare redeclared  and assigned to keeya text object to ...formalP (means to array to_do)

                            }
                        }
                            return formalP;
                    }
                )
            );
        



    closeModalUpdateTask();
}



//POINT8 MARKFUNCTION


//......................................................VIMP.......................................................................



// let bool=0;
// const [booleanhu , setboolean]=useState(0);
function markfunction(fparameter)
{
  

set_to_do (
    to_do.map(function (formalParameter , i ){
                    // if (i === index ){
                    if (formalParameter.id === fparameter ){ //best works as random number
                    // if (formalParameter.date === fparameter ){//didnt worked bcoz task can be added 3-4 times with in same time
                    // if (formalParameter.text === fparameter ){  //works but suppose everydat task is yoga
                        return {

                            ...formalParameter , //mtlb to_do array ke andr newtask object display krega ye wo 3 values above bcoz wo sb array ke form m store thee 
                                                                                //..its like adding new array on new  existing/same array /array is object so adding object back to function

                            Checked : !(formalParameter.Checked ), //now uske saath mai check uncheck value b paas krra hu
                        } ;
                    }
                        else {
                            return   formalParameter  ;
                                
                            
                        }
    

            }
        )    
    );

}

//POINT9 deletemiddle text

function Delete_Middle_Text(index) {
    set_to_do(to_do.filter(function (formalParameter, i) {
        console.log("to_do after delete :", to_do);
        return i !== index; // Explicit return
    }));
}


//POINT10 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>EDITING MODAL when clicking on edit button



        


// let overlay_for_Modal_Update_Task={};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function emt(index)

{
openMOdalUpdateTask();
    
    

SeteditingIndex(index);
// console.log("task_entered valuye:",task_entered); //adding  a task , opening a modal do re render and that value gets reset in onchangeprop()
//but setvalueinput() had caused re-render which resetted taskentered value to undefined and only reset occur
//due to state variable inside onchangevalueinput() and when re render than taskentered set to undefined and onchange dont run again
//see grok chat !! godmode!


// task  1 to do
console.log("todo[index],text :",to_do[index].text);
setvalueinputUpdateTask(to_do[index].text);



// setupdateTaskStatus(to_do[index].Checked ? "Completed" : "InComplete");

//this solved my update task ke time drop down pr tick untick pr completed ya incomplete kya bhejna
setupdateTaskStatus( function()
            {
                if ( to_do[index].Checked) {
                    return "Completed" ;
                }
            else {
                    return "InComplete"
                }
            }
            
) ;


// to_do.map(function (formalP,index){
//         if (formalP.Checked)
//         {
            
//         }
//     } 
// )





}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//POINT11 dropdown function jo ke parent of dropdown or addtask ke button wala hai so wo wala drop down ke baat krra idhr m



function dropDownFunction(event){

    console.log("current value", event.target.value);
    setFilterType(event.target.value);



}



//POINT12

// here i store themes by concept of map and also stored theme photos in local storage so user can retrieve it too after reload
const themeMap = {
    AnimeOne: am1,
    AnimeTwo: am2,
    AnimeThree: am3,
    AnimeFourth: AnimeArt,
    AnimeFive: mb5,
    AnimeSix: mb6,
    AnimeSeven: mb7,
    AnimeEight: mb8,
    AnimeNine: mb9,
    AnimeTen: mb10,
    AnimeEleven: mb11,
    AnimeTwelve: mb12,
    AnimeThirteen: mb13,
  };

const [ThemePhoto, setThemePhoto] = useState(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    return savedTheme && themeMap[savedTheme] ? themeMap[savedTheme] : am2;
  });



const changePhoto = (event) => {
    const value = event.target.value;
    localStorage.setItem("selectedTheme", value); // Save theme value
    setThemePhoto(themeMap[value] || am2);
}



  //POINT13 TASK RENDERING

let taskContent; 
let filteredTask= to_do; //filtered task became array here 
  if (to_do.length ===0  ) //means initial state  now array for multiple task
  {
  
        
            //styling in react >>>> css styling  vanilla plane css
            //if name is written inside tag
            
            taskContent = <div className="Mid_Text">No Todo's</div>;
        
            // taskcontent_Subdiv_styling={backgroundColor : "red" };  error bcoz -->In the line taskContent = <div style={taskcontent_Subdiv_styling} className="Mid-Text">No Todos</div>, you’re using taskcontent_Subdiv_styling in the style prop before it’s defined.
            //bcoz if block chlaa he nahi abi or vo if block ke value satisfy ne krra 
  
    
      
      
  } 
  
  
  
  
  else { //means after initial state 
      // markBox =   <input type="checkbox" style={mark_box_styling} /> 
      
      
                  if (taskContent !=="") //means task ke andr kuch aagya leekh ke than kyaa daalna ye stage no todos ke baad after add task button click pr aayege 
                  {  //is condition ke need nahi bcoz else part whi resolve krderha h
                          
  
  
                      if (filterType === "Completed" )
                      {
                          
      
                                  filteredTask = to_do.filter( //filtering just got value back
                                    function (formalP) { 
                                    
                                        console.log("filteredTask-CompleteVal : ",filteredTask);
                                      return formalP.Checked 
                                    } 
                                );
  
                              //arrowfunction for predicate /*for completed arrow function*/
                              // filteredTask = to_do.filter(task =>task.Checked );
  
                            // ~IMP  this i used inside completed means when there is task but if fileredtask length is 0 than what to show up
                                                if (filteredTask.length === 0) {
                                                    taskContent = <div className="Mid_Text">No Completed Tasks Yet</div>;
                                                }


                                            else {  //means length nahi hai 0
                                                // If there are completed tasks, map them as usual
                                                taskContent = filteredTask.map(function (task, index) {
                                                //   const taskStyle = {
                                                //       ...task_dynamic,
                                                //       textDecoration: task.Checked ? "line-through" : "",
                                                //       opacity: task.Checked ? "30%" : "100%",
                                                //   };
                                    
                                                    return (  /*READ if confusion in return grok used  : with if else so it directlu syored in task content but i used diff return */
                                                    //   <div style={taskcontent_Subdiv_styling}>

                                                    <div key={task.id} className="task"> {/*using this instead of taskcontent_Subdiv_styling*/}
                                                        
                                                        {/* 1 */}
                                                        {/* markbox AND content parent */}
                                                            {/* <div style={markboxAndContent_Parent}> */}
                                                            {/* <div style={markboxAndContent_Parent}> */}
                                                              
                                                        <div className="markbox-content-parent">
                                                                <div>
                                                                    <input
                                                                        onChange={() => markfunction(task.id)}
                                                                        type={"checkbox"}
                                                                    //   style={mark_box_styling}
                                                                        className="mark-box"
                                                                        checked={task.Checked}
                                                                    />
                                                                </div>


                                                                {/*2  textAndDateParentBox */}
                                                                
                                                                {/* <div style={textAndDateParentBox}> */}
                                                                <div className="text-date-parent">
                                                                    {/* 2.1 */}
                                                                    {/* <div style={taskStyle}>{task.text} <br /></div> */}

                                                                    <div  className="task-text"
                                                                    
                                                                    style={
                                                                    { 
                                                                                textDecoration: task.Checked ? "line-through" : "",
                                                                            opacity: task.Checked ? "0.3" : "1",
                                                                        }
                                                                    }
                                                                    >
                                                                        {task.text}
                                                                        
                                                                        
                                                                        </div>
                                                                    
                                                                    
                                                                    {/* 2.2 */}
                                                                    {/* <div style={datekeStyling}>{task.date}</div> */}
                                                                {/* </div> */}
                                                                    <div  className="task-date">{task.date}</div>
                                                                </div>
                                                        
                                                        
                                                        
                                                            </div>
                                                            


                                                            {/* 3 */}
                                                            {/* <div style={parentOfDeleteAndEditBtn}> */}
                                                            <div className="delete-edit-parent">
                                                                
                                                                {/* 3.1 */}
                                                                <button
                                                                //   style={deleteBtn}
                                                                className="delete-btn"
                                                                    onClick={() => Delete_Middle_Text(index)} >

                                                                    {/* <img src={dlt} style={deleteImg} /> */}
                                                                    {/* <img src={"/dlt.png"} style={deleteImg} alt="preload" /> */}
                                                                    <img src={"/dlt.png"} className="delete-img" alt="preload" />
                                                                </button>
                                                                    {/* 3.2 */}
                                                                
                                                                {/* <button style={editBtn} onClick={() => emt(index)}> */}
                                                                <button className="edit-btn"onClick={() => emt(index)}>
                                                                    {/* <img src={edit} style={editImg} /> */}
                                                                    {/* <img src={"/edit.png"} style={editImg } alt="preload" /> */}
                                                                    <img src={"/edit.png"} className="edit-img" alt="preload" />
                                                                </button>
                                                            
                                                            </div>
                                                                
                                                            {/* </div> */}
                                                        
                                                        
                                                        </div>
                                                    );
                                                });
                                                            }
                              }
                      
  
                      else if (filterType === "InComplete")
                          {
  
          
  
                                  filteredTask = to_do.filter(function (formalP) {
                                      console.log("filteredTask-IncompleteVal : ",filteredTask);
                                      console.log("filteredTask-IncompleteVal text : ",formalP.text);
                                      return !(formalP.Checked);
                                  } )
  
  
  
                                  // filteredTask = to_do.filter(task =>(!task.Checked) );
  
  
                                  if (filteredTask.length === 0) {
                                      taskContent = <div className="Mid_Text">No Incomplete Tasks Yet</div>;
                                  }
                                  
                                  else {  //means length nahi hai 0
                                      // If there are completed tasks, map them as usual
                                      taskContent = filteredTask.map(function (task, index) {
                                        //   const taskStyle = {
                                        //       ...task_dynamic,
                                        //       textDecoration: task.Checked ? "line-through" : "",
                                        //       opacity: task.Checked ? "30%" : "100%",
                                        //   };
                          
                                          return (  /*READ if confusion in return grok used  : with if else so it directlu syored in task content but i used diff return */
                                            //   <div style={taskcontent_Subdiv_styling}>

                                            <div key={task.id} className="task"> {/*using this instead of taskcontent_Subdiv_styling*/}
                                              
                                              {/* 1 */}
                                              {/* markbox AND content parent */}
                                                  {/* <div style={markboxAndContent_Parent}> */}
                                                  <div className="markbox-content-parent">
                                                      <div>
                                                          <input
                                                              onChange={() => markfunction(task.id)}
                                                              type={"checkbox"}
                                                            //   style={mark_box_styling}
                                                              className="mark-box"
                                                              checked={task.Checked}
                                                          />
                                                      </div>
      
      
                                                      {/*2  textAndDateParentBox */}
                                                      
                                                      {/* <div style={textAndDateParentBox}> */}
                                                      <div className="text-date-parent">
                                                          {/* 2.1 */}
                                                          {/* <div style={taskStyle}>{task.text} <br /></div> */}

                                                          <div  className="task-text"
                                                          
                                                          style={
                                                            { 
                                                                        textDecoration: task.Checked ? "line-through" : "",
                                                                    opacity: task.Checked ? "0.3" : "1",
                                                                }
                                                            }
                                                             >
                                                                {task.text}
                                                              
                                                              
                                                              </div>
                                                          
                                                          
                                                          {/* 2.2 */}
                                                          {/* <div style={datekeStyling}>{task.date}</div> */}
                                                      {/* </div> */}
                                                            <div  className="task-date">{task.date}</div>
                                                      </div>
                                                 
                                                 
                                                 
                                                  </div>
                                                  
      
      
                                                  {/* 3 */}
                                                  {/* <div style={parentOfDeleteAndEditBtn}> */}
                                                  <div className="delete-edit-parent">
                                                      
                                                      {/* 3.1 */}
                                                      <button
                                                        //   style={deleteBtn}
                                                         className="delete-btn"
                                                          onClick={() => Delete_Middle_Text(index)} >
      
                                                          {/* <img src={dlt} style={deleteImg} /> */}
                                                          {/* <img src={"/dlt.png"} style={deleteImg} alt="preload" /> */}
                                                          <img src="/dlt.png" className="delete-img" alt="delete" />
                                                      </button>
                                                          {/* 3.2 */}
                                                      
                                                      {/* <button style={editBtn} onClick={() => emt(index)}> */}
                                                      <button className="edit-btn"onClick={() => emt(index)}>
                                                          {/* <img src={edit} style={editImg} /> */}
                                                          {/* <img src={"/edit.png"} style={editImg } alt="preload" /> */}
                                                          <img src="/edit.png" className="edit-img" alt="edit" />
                                                      </button>
                                                  
                                                    </div>
                                                      
                                                  {/* </div> */}
                                              
                                              
                                              </div>
                                          );
                                      });
                                  }
                          } 
                          
                          
  
                          else if (filterType === "ALL" )
                              {
                                  
                                  
  
                                  filteredTask = 
                                  
                                  taskContent = filteredTask.map(function (task, index) {
                                    //   const taskStyle = {
                                    //       ...task_dynamic,
                                    //       textDecoration: task.Checked ? "line-through" : "",
                                    //       opacity: task.Checked ? "30%" : "100%",
                                    //   };
                      
                                      return (
                                        //   <div style={taskcontent_Subdiv_styling}>
                                        <div key={task.id} className="task">
                                          
                                          {/* 1 */}
                                          {/* markbox AND content parent */}
                                              <div className="markbox-content-parent">
                                                  <div>
                                                      <input
                                                          onChange={() => markfunction(task.id)}
                                                          type={"checkbox"}
                                                        //   style={mark_box_styling}
                                                        className="mark-box"

                                                          checked={task.Checked}
                                                      />
                                                  </div>
  
  
                                                  {/*2  textAndDateParentBox */}
                                                  
                                                  {/* <div style={textAndDateParentBox}> */}
                                                  <div className="text-date-parent">
                                                      {/* 2.1 */}
                                                      {/* <div style={taskStyle}>{task.text} <br /> */}
                                                      <div className="task-text" style={
                                                            {
                                                            textDecoration: task.Checked ? "line-through" : "",
                                                            opacity: task.Checked ? "0.3" : "1",
                                                            }
                                                        }
                                                          >
                                                            {task.text} 
                                                            {/* <br /> */}
                                                      </div>
                                                      
                                                      
                                                      {/* 2.2 */}
                                                      {/* <div style={datekeStyling}>{task.date}</div> */}
                                                      <div className="task-date">{task.date}</div>
                                                  </div>
                                             
                                             
                                             
                                              </div>
                                              
  
  
                                              {/* 3 */}
                                              {/* <div style={parentOfDeleteAndEditBtn}> */}
                                              <div className="delete-edit-parent">
                                                  
                                                  {/* 3.1 */}
                                                  <button
                                                      className="delete-btn"
                                                      onClick={() => Delete_Middle_Text(index)} >
  
                                                      {/* <img src={dlt} style={deleteImg} /> */}
                                                      {/* <img src={"/dlt.png"} style={deleteImg} alt="preload" /> */}
                                                                    <img src="/dlt.png" className="delete-img" alt="delete"/>
                                                  </button>
                                                  
                                                      {/* 3.2 */}
                                                  
                                                  <button className="edit-btn"onClick={() => emt(index)}>
                                                  {/* <img src={"/edit.png"} style={editImg} alt="preload" /> */}
                                                  <img src="/edit.png" className="edit-img" alt="edit" />
                                                  </button>
                                              
                                              </div>
                                          
                                          </div>
                                      )
                                        //   {/* </div> */}
                                    //   );
                             
                                }); 
                                  
                              }
                          
  
  
  
                                                          
  
                  }
          
      //Read it for future error..................
                  // taskcontent_Subdiv_styling={backgroundColor : "red" };  error bcoz -->In the line taskContent = <div style={taskcontent_Subdiv_styling} className="Mid-Text">No Todos</div>, you’re using taskcontent_Subdiv_styling in the style prop before it’s defined.
      //error..................
  
  }


  const loaderAnimation = `
  @keyframes fadeOut {
    0% { 
    opacity: 1;
    transform:translateZ(-3000px) scale(0) ;
    height:100% ;
    width:100%;
    position:fixed;
    // overflow-x:hidden;
    
     }
    80% { 
    opacity: 0; 
    transform:translateZ(-1000px) scale(1) ;
    height:100% ;
    width:100%;
    position:fixed;
    // overflow-x:hidden;
    }
    
    100% { 
    opacity: 0;
    transform:translateZ(-700px) scale(1.3) ;
    height:100%;
    width:100%;
    position:fixed; /*this fixed up overflow of loader logo and Bg position fixed in all 3*/
    // overflow-x:hidden;
    }
}
`;

    //POINT14 loader animation
    //created new element here style and added animation inside it
useEffect(() => {
    const styleTag = document.createElement('style');
    // const backGroundOFStyleTag=document.createElement("div");
    // backGroundOFStyleTag.innerHTML=backGroundOFStyleTag_STYLE;
    // styleTag.append(backGroundOFStyleTag);

    styleTag.innerHTML = loaderAnimation;
    document.head.appendChild(styleTag);
  
    return () => {
      document.head.removeChild(styleTag); // Cleanup on unmount
    };
  }, [loaderAnimation]); 

// useEffect( function() {
//     const backGroundOFStyleTag=document.createElement("div");
//     document.
// })

  // Empty dependency array ensures this runs once

// Inject keyframes into a <style> tag (optional, if not using CSS file)
// document.head.insertAdjacentHTML('beforeend', `<style>${loaderAnimation}</style>`)
    




//POINT15

 //KKKKKKKKKKKKKKKKKKKKKKKKKKKK>>>>>>>> 2 return krwaya maine ye bcoz of first loading screen loader kkkkkkkkkkkkkkkkkkkkkkk<<<<<<<<<,,
 //jbki react syntax mai ek he krwaya abi tk maine
//  if (isLoading && isLoadingText) {

// if wala part for loader and else se pure ui load hojayege
    if (isLoading ) {
        return(
    //   content = (
    
<div className="parentOfLoaderStyleANDBgofloader">        
            {/* <div className="loaderStyle" style={loaderStyle}  > */}

{/* 1 */}
            <div className="loaderStyle"   >
            
                <img
                    className="loadinglogoImg"
                    src={loadingLogo}
                    alt="preload" /*just message*/
                    onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
                    loading="eager"


                />
                {/* <p className="LoaderTextStyle" style={LoaderTextStyle} >CREATOR KUSH-GOD </p> */}
                <p className="LoaderTextStyle">CREATOR KUSH-GOD</p>
            </div>
                            {/*2  */}
                            <div>
                            {/* <div style={bgofloader} className="bgloader" >  </div> */}
                            <div className="bgloader"></div>
        
                            </div>
</div>



        );
    }

        else
        {          
        // content= ( grok used this variable and later used inside return below but i used directly inside return
                    
        // WRAPPPPPPPPPPPPPER PART HERE 
        return (
                    // <div  style={Wrapper} className="Wrapper">
                        // <div  style={Wrapper} className="Wrapper">
                        <div className="Wrapper" style={{ backgroundImage: `url(${ThemePhoto})` }}>


                    {/* theming area starts */}
                    {/* Preload images */}

                    {/*READ IT MADE SWITCHING FAST so in short let me ask is it bcoz img tag was used drop down gets easy to fetch image bcoz img tag means images is being fetched out for once from disk which is not shown and storde in cache than drop down fetch it from cache */}
                    <div style={{ display: "none" }}>  {/*READ KUSH IMPORTANT HAI disply none bcoz load ke time he manwara hu image by loading eager */}
                    
                    


                                                                {/* <img src={isMobile ? mb4 : am1} alt="preload am"  loading="eager" />    
                                                                <img src={isMobile ? mb2 : am2 }  alt="preload am2 " loading="eager"  />
                                                                <img src={isMobile ? mb3 : am3} alt="preload am3"  loading="eager" /> */}
                                                                {/* Mobile photos starts */}
                                                                {/* <img src={mb1} alt="preload mb1" loading="eager" />
                                                            <img src={mb2} alt="preload mb2" loading="eager" />
                                                            <img src={mb3} alt="preload mb3" loading="eager" />
                                                            <img src={mb4} alt="preload mb4" loading="eager" />
                                                            <img src={mb5} alt="preload mb5" loading="eager" />
                                                            <img src={mb6} alt="preload mb6" loading="eager" />
                                                            <img src={mb7} alt="preload mb7" loading="eager" />
                                                            <img src={mb8} alt="preload mb8" loading="eager" />
                                                            <img src={mb9} alt="preload mb9" loading="eager" />
                                                            <img src={mb10} alt="preload mb10" loading="eager" />
                                                            <img src={mb11} alt="preload mb11" loading="eager" />
                                                            <img src={mb12} alt="preload mb12" loading="eager" />
                                                            <img src={mb13} alt="preload mb13" loading="eager" /> */}
                                                                {/* Mobile Photos ends */}
                                                    {/* Add these lines for preloading close, dlt, and edit */}
                                                    {/* <img src="/close.png" alt="preload close" loading="eager" />
                                                    <img src="/dlt.png" alt="preload dlt" loading="eager" />
                                                    <img src="/edit.png" alt="preload edit" loading="eager" />
                                                    <img src={ "/letter-k.png"} alt="preload edit" loading="eager" /> */}
                                                            <img src={am1} alt="preload am" loading="eager" />
        <img src={am2} alt="preload am2" loading="eager" />
        <img src={am3} alt="preload am3" loading="eager" />
        <img src={AnimeArt} alt="preload AnimeArt" loading="eager" />
        <img src={mb5} alt="preload mb5" loading="eager" />
        <img src={mb6} alt="preload mb6" loading="eager" />
        <img src={mb7} alt="preload mb7" loading="eager" />
        <img src={mb8} alt="preload mb8" loading="eager" />
        <img src={mb9} alt="preload mb9" loading="eager" />
        <img src={mb10} alt="preload mb10" loading="eager" />
        <img src={mb11} alt="preload mb11" loading="eager" />
        <img src={mb12} alt="preload mb12" loading="eager" />
        <img src={mb13} alt="preload mb13" loading="eager" />
        <img src="/close.png" alt="preload close" loading="eager" />
        <img src="/dlt.png" alt="preload dlt" loading="eager" />
        <img src="/edit.png" alt="preload edit" loading="eager" />
        <img src="/letter-k.png" alt="preload letter-k" loading="eager" />

                        </div> 
                        {/* will ask tomorrow about it */}
                        


                    {/* <div className="ParentofBgThemeImageANDTopBox" style={ParentofBgThemeImageANDTopBox}> */}
                    <div className="ParentofBgThemeImageANDTopBox" > {/*not used any where this class*/}
                            {/* <div style={BgThemeImage}> */}
                        
                            {/* </div> */}

                            {/* <div style={topBox}>  */}
                    {/* .............................................................................................. */}
                                {/* 1 */}
                                {/* <div >
                                <h1 id="top_heading_todo">TODO LIST</h1>
                                </div> */}
                    {/* .............................................................................................. */}
                            
                            
                    {/* .............................................................................................. */}        
                            {/* 2 */}

                        {/* <div> */}
                        
                                    {/* <div style={Style_box_of_task_and_dropdown} className="box-of-task-and-dropdownAnd-ThemeBar"> */}
                                                                                                        {/* 2.1 */}


                                                                                                        <div className="box-of-task-and-dropdownAnd-ThemeBar">
                                                                                                                {/* <h1 id="top_heading_todo">TODO LIST</h1> */}
                                                                                                                <h1 id="top_heading_todo">
                                                                                                                    Jot_Down 
                                                                                                                     <span> 
                                                                                                                        <img  className="top-head-K" src="/letter-k.png"alt="preload edit" loading="eager" />aro
                                                                                                                          </span> </h1>
                                                                                                        


                                                                                                            {/* child of box-of-task-and-dropdownAnd-ThemeBar and parent of   tash and dropdown*/}
                                                                                            
                                                                                            
                                                                                            <div className="box-of-task-and-dropdown" > {/* flexparent */}
                                                                                                    

                                                                                                    {/* child1 */}
                                                                                                    <div>
                                                                                                        <button className="add-task-Button" onClick={openModal}>
                                                                                                            <p>Add Task</p>
                                                                                                        </button>
                                                                                                        

                                                                                                    </div>
                                                                                                        
                                                                                                        
                                                                                                        {/* </div>style={ParentofBgThemeImageANDTopBox} */}
                                                                                                        {/* </div className="box-of-task-and-dropdown"> */}


                                                                                                    {/*  child2*/}
                                                                                                                    <div>
                                                                                                            
                                                                                                                        {/* //we don't call we give refrence usually when using events/props */}
                                                                                                                        <select  onChange={dropDownFunction} className="dropDown">
                                                                                                                        
                                                                                                                            <option  className="dropdownOption"> Completed </option>
                                                                                                                            <option   className="dropdownOption"> InComplete</option>
                                                                                                                            <option selected  className="dropdownOption"> ALL </option>
                                                                                                                        </select>
                                                                                                                    </div>


                                                                                    </div>

                                                                                                                    
                                                                                                                               {/* >>>>>>>>>>>>>>>>>>>>>>>> */}
                                                                                                                            {/* theming area starts.*/}
                                                                                                            {/* parent of label imagethumb and dropdown */}
                                                                                                            {/* <div className="ThemeBar" style={Theme_Bar}> */}
                                                                                                            
                                                                                                            {/* child3 */}
                                                                                                            <div className="ThemeBar" >
                                                                                                            
                                                                                                            
                                                                                                            {/* child1*/}
                                                                                                            {/* <div style={{display:"flex" , gap:"-1px"}} > */}
                                                                                                                
                                                                                                                
                                                                                                                {/* <label  className="label_Style" style={label_Style}> Theme-Select      */}
                                                                                                                <label  className="label_Style"> Theme-Select     

                                                                                                                
                                                                                                                    <FaArrowRight style={{ fontSize: '17`px', color: 'white' }} /> {/* Add the icon */}
                                                                                                                    
                                                                                                                </label>
                                                                                                        
                                                                                                            {/* <div> */}
                                                                                                                <select className="themeDropDown"  onChange={changePhoto}>
                                                                                                                        <option value="AnimeOne">AnimeOne</option>
                                                                                                                    {/* {isMobile ?
                                                                                                                        ( */}
                                                                                                                            
                                                                                                                                {/* <> */}
                                                                                                                                    <option value="AnimeTwo">AnimeTwo</option>
                                                                                                                                    <option value="AnimeThree">AnimeThree</option>
                                                                                                                                    <option value="AnimeFourth">AnimeFourth</option>
                                                                                                                                    <option value="AnimeFive">AnimeFive</option>
                                                                                                                                    <option value="AnimeSix">AnimeSix</option>
                                                                                                                                    <option value="AnimeSeven">AnimeSeven</option>
                                                                                                                                    <option value="AnimeEight">AnimeEight</option>
                                                                                                                                    <option value="AnimeNine">AnimeNine</option>
                                                                                                                                    <option value="AnimeTen">AnimeTen</option>
                                                                                                                                    <option value="AnimeEleven">AnimeEleven</option>
                                                                                                                                    <option value="AnimeTwelve">AnimeTwelve</option>
                                                                                                                                    <option value="AnimeThirteen">AnimeThirteen</option>
                                                                                                                                    {/* </> */}
                                                                                                                        
                                                                                                                        {/* ): */}
                                                                                                                            
                                                                                                                        {/* (   */}
                                                                                                                            {/* <> */}
                                                                                                                            <option value="AnimeTwo">AnimeTwo</option>
                                                                                                                            <option value="AnimeThree">AnimeThree</option>
                                                                                                                            <option value="AnimeFourth">AnimeFourth</option>
                                                                                                                            {/* </> */}
                                                                                                                            
                                                                                                                        
                                                                                                                        {/* ) */}
                                                                                                                        

                                                                                                            
                                                                                                                {/* } */}
                                                                                                                        </select>
                                                                                                                </div>
                                                                                                                            {/* theming area ends.. */}
                                                                                                                            {/* <<<<<<<<<<<<<<<<<<<<<<<< */}        

                                                                                                                 
                                                                                                        
                                                                                                            </div>

                        
                                    {/* </div> */}


                    {/* modal thing below started */}

                                    {/* <div style={overlay_for_Modal} > */}

{/* form i used here is very imp~ This means the form will call add_task_funcN() when submitted, either by:
Clicking a submit button.

Pressing Enter while an input or select element inside the form is focused.

 */}
                                    <div className={`modal-overlay  ${isModalOpen ? "active" : ""}   `}   >
                                    <div className="Modal-Div">
                                    <form onSubmit={(e) => { e.preventDefault(); add_task_funcN(); }}> {/* used this so i create prompt on input bar  and called add task function*/}
                                            {/* <div className="Modal-Div"   style={modalStyle} >  */}
                                            
                                    
                                            {/* 1 */}
                                            
                                            <p id="Modal-top-Heading"> What_ToDo? </p>
                                
                                
                                            {/* 2 */}
                                            {/* form */}
                                
                                
                                                            {/* 2.1 */}
                                                            {/*READ In HTML, the htmlFor attribute (which is the JavaScript-accessible property of the for attribute) in a <label> element associates the label with a specific form element */}
                                                            {/* <label   style={titleHU} for="titleinput"  id="titleHU">Title </label> */}
                                                            <label  htmlFor="titleinput"  id="titleHU">Title </label>  {/* for and id ke wjaah se label pr click hone se cursor aajata h alternate of for in htmlFor*/}

                                                                                                    
                                                                {/* >>>>>>>>>>>>READ
                                                            //is input box ke attribut  e/yani react mai bole to prop mai muje value={aagyivalue } lgana pdaa bcoz//
                                                            //even after setvalueINput("") is openMOdal and closeModal still inputbox se pichla text ne htrhaa thaa
                                                            //so ye precise kaam krgya
                                                            <<<<<<<<<<<<<< */}
                                                            {/* <input  onChange={OnChange_input_value} style={titleinput} id="titleinput"    value={aagyivalue} ref={AddtaskModalinputRefs}  onClick={ function (){AddtaskModalinputRefs.current.focus()} } />   input is void element means dont use close tag for input tag */}
                                                            {/* <input  onChange={OnChange_input_value} style={titleinput} id="titleinput"    value={aagyivalue} ref={AddtaskModalinputRefs}  onClick={ function (){AddtaskModalinputRefs.current.focus()} } />   input is void element means dont use close tag for input tag */}

                                                            <input
                                                                    onChange={(e) => setValueInput(e.target.value)}
                                                                    id="titleinput"
                                                                    value={aagyivalue}
                                                                    ref={AddtaskModalinputRefs}
                                                                    required
                                                                    />
                                                            {/* Exactly. React doesn’t recognize OnChange_input_value as a valid event handler prop because it’s not a standard React event prop. */}
                                                            {/* so use OnChange */}
                                                            {/* refs part attribute used here for opening keyboard */}
                                
                                
                                                            <br/> 
                                
                                
                                
                                
                                
                                
                                
                                
                                                            {/* 2.2 */}
                                                            {/* <label   style={titleHUstatus} for="titlehu" id="titleHuAgain">Status </label> */}
                                                            <label  htmlFor="status" id="titleHuAgain">Status </label>
                                                            {/* <select style={dropDownModal} className="dropDownModal" >  */}
                                                            <select  className="dropDownModal" > 
                                                            
                                
                                                                <option selected id="selec" className="dropdownOption-Modal"> <p className="para"> InComplete </p> </option>
                                                                <option className="dropdownOption-Modal" >Completed</option>
                                                                {/* <option className="dropdownOption-Modal" ></option> */}
                                                            </select>
                                                            
                                                            {/* <input id="titlehu" />  */}
                                                            {/*input is void element means dont use close tag for input tag*/}
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                                    {/* 3 */}
                                
                                                    {/* <div  style={div_covering_Button}  className="div-covering-Button"> */}
                                                    <div   className="div-covering-Button">
                                                                    {/* 3.1 */}
                                
                                                                    {/* {to_do{function(index)  }}  WAPS*/} 
                                                                    <button onClick={add_task_funcN} className="div-Button-in-Modal">
                                                                                                            {/* <p>{add_taskANDupdateTaskkaChange}</p> */}
                                                                                                            <p>Add Task</p>
                                                                    </button>
                                
                                
                                                                    {/* 3.2 */}
                                
                                                                    {/* style={cancel_btn_div}  when wrote here than declare at top than define inside ifblock above with name of style prop/attribute */}
                                                                    <button onClick={closeModal} id="cancel-btn-div" className="div-Button-in-Modal">
                                                                                                            <p id="cancel-btn">Cancel</p>
                                                                    </button>
                                
                                
                                                        </div>
                                    
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                    
                                    {/* 4 */}
                                    {/* close button */}
                                                    
                                                        <div id="closeimg-div">
                                                            {/* <img  id="crossimg" src=  {close}       onClick={closeModal}  /> */}
                                                            <img  id="crossimg" src=  {"/close.png"}       onClick={closeModal} alt="preload"  />
                                                        </div>
                                        

                                        </form>

                                    </div>
                                    
                                    </div>
                                    

                        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

                    {/* same as overlay for modal icreated overlayfor UpdatesMOdal  */}
                    <div className={`modal-overlay ${isModalOpenUpdateTask ? "active" : ""}`}>
                        {/* <div className="Modal-Div"> */}
                                <div className="Modal-Div">
                                    <form onSubmit={(e) => { e.preventDefault(); Update_task_funcN(); }}>
                                    <p id="Modal-top-Heading">Update-To-DO</p>
                                    <label htmlFor="titleinputAgain" id="titleHUAgain">Title</label>
                                    <input
                                        onChange={(e) => setvalueinputUpdateTask(e.target.value)}
                                        id="titleinputAgain"
                                        value={aagyivalueUpdateTask}
                                        ref={UpdatetaskModalinputRefs}
                                        required
                                    />
                                    <label htmlFor="statusAgain">Status</label>
                                    <select className="dropDownModal" value={updateTaskStatus}>
                                        <option>InComplete</option>
                                        <option>Completed</option>
                                    </select>
                                    <div className="div-covering-Button">
                                        <button type="submit" className="div-Button-in-Modal">
                                        <p id="UpdateTaskBtn">Update Task</p>
                                        </button>
                                        <button type="button" onClick={closeModalUpdateTask} className="div-Button-in-Modal" id="cancel-btn-div">
                                        <p id="cancel-btn">Cancel</p>
                                        </button>
                                    </div>
                                    <div id="closeimg-div">
                                        <img id="crossimg" src="/close.png" onClick={closeModalUpdateTask} alt="close" />
                                    </div>
                                    </form>
                                </div>
                    {/* </div> */}
</div>



                            <div className="workArea-To-DO">{taskContent}</div>
                        </div>

                        </div>
                    );
        }
}
export default TdlMainbox;
     