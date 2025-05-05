import React , {useState ,useEffect , useRef} from "react"
import { FaArrowRight } from 'react-icons/fa'; 
import "./tdl-mainbox.css"


// iimport "./tdl-mainbox.css";
// import close from "../assets/close.png"; // Changed from src/components/
// import dlt from "../assets/dlt.png"; // Changed from src/components/
// import edit from "../assets/edit.png"; // Changed from src/components/
import loadingLogo from "../assets/loading-logo.svg"; // Changed from src/components/
import AnimeArt from "../assets/AnimeArt.jpg"; // Changed from src/components/
import am1 from "../assets/am.jpg"; // Changed from src/components/
import am2 from "../assets/am2.jpg"; // Changed from src/components/
import am3 from "../assets/am3.jpg"; // Changed from src/components

import mb1  from "../assets/mb1.jpg";
import mb2 from "../assets/mb2.jpg";
import mb3 from "../assets/mb3.jpg";
import mb4 from "../assets/mb4.jpg";
import mb5 from "../assets/mb5.jpg";
import mb6 from "../assets/mb6.jpg";
import mb7 from "../assets/mb7.jpg";
import mb8 from "../assets/mb8.jpg";
import mb9 from "../assets/mb9.jpg";
import mb10 from "../assets/mb10.jpg";
import mb11 from "../assets/mb11.jpg";
import mb12 from "../assets/mb12.jpg";
import mb13 from "../assets/mb13.jpg";


// import ar  from "/home/archkarch/archCustom/deb-for-EVER/All-webDevelopment-Codes/ReactFolio/day3.1_jotdown_app/src/assets/rraa.png";
// import ar  from "/home/archkarch/archCustom/deb-for-EVER/All-webDevelopment-Codes/ReactFolio/day3.1_jotdown_app/src/assets/rra.png";




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



function TdlMainbox(){



/*caching photos*/
  // Register service worker
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




    //>>>>>>>>>>>>>>>>>.styling is given in form of object in react remember kush for ever <<<<<<<<<<<<<<<<<<<<
let modalStyle={};
let titleHU={};
let titleHUstatus={};
let THagain={};
let THagainStatus={};

let Tinput={};
let titleinput={};

let dropDownModal={};
let dropDownModalAg={};

let div_covering_Button={};
let  div_covering_ButtonAg={};
// var bool=0;
// let Taskcounter=0;
let markboxAndContent_Parent={};

let modalStyle_Update_Task={};
var task_entered;

let overlay_for_Modal={};
let overlay_for_Modal_Update_Task={};
let Style_box_of_task_and_dropdown={};



modalStyle_Update_Task={

    display:"none",
}



//these declaration needed before opening keyboard segment
const [isModalOpen ,setModalBoolValue]=useState(false);
const [isModalOpenUpdateTask ,setModalBoolValueUpdateTask]=useState(false);


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







//................................................................................................................................................................................................



// >>>>>>>>>>>>>>>>RESPONSIVENESS STATE VARIABLE <<<<<<<<<<<<<<<<<<<<<<<<<<<

// step1 statevariable to track windows width for desktop and mobile
const [isMobile, setIsMobile] = useState(window.innerWidth <=400);
const [isMobileHeight, setIsMobileHeight] = useState(window.innerHeight <=400)

// step2
// it will run after render


useEffect(function () {

// step2.1 handle resize mai function stored hai which is doing setismobile and wo mai run krunga event listener pr jb windows desktop se mobile pr resize hoege
        const handleResize= function()
        {
            setIsMobile(window.innerWidth <=400);
            setIsMobileHeight(windows.innerHeight<=1080)
        };

        // step2.2
        window.addEventListener("resize" , handleResize) ;
        
        // step3 remove this listenr after work done
        return(  function ()
                {
                    window.removeEventListener("resize",handleResize)
                }
            );
    }
, [] );

// >>>>>>>>>>>>>>>>RESPONSIVENESS STATE VARIABLE  and useEffect ended<<<<<<<<<<<<<<<<<<<<<<<<<<<





// >>>>>>>>>>>>>>>>>>>>>handled here Modal opening part.... <<<<<<<<<<<<<<<<<<<<<<



// You're correct that the useEffect for setTimeout includes the return () => clearTimeout(timer) cleanup, but its primary purpose is more than just cleanup.
//  Let me clarify in short why useEffect was used for setTimeout in your code, focusing on the setTimeout part and addressing your point about the cleanup.


// useEffect ensures the setTimeout (which calls setIsLoading(false) after 3 seconds) runs after the component renders. This delays the transition from the loader to the main content, creating the 3-second loading effect.



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


// useEffect(function(){
//         const newtimer=setTimeout(function () {
//             setisLoadingText(false);
//         }
//     );
// });

const loaderStyle = {
    // overflowX:"hidden",
  position: 'absolute',
  top: 0,
  left: 0,
  width: '10vw',
  height: '10vh',
//   backgroundColor: '#000', // Black background (customize as needed)
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
  animation: 'fadeOut 5s ease-in-out forwards', // Fade out animation
};
const LoaderTextStyle=
{


}
// Keyframes for fade-out (you can define this in CSS or use a library)
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
// let backGroundOFStyleTag_STYLE=
// {
    // backgroundColor:"red",
    // height:"100vh",
    // width:"100vw",
// }

// Inject keyframes into the document (only once)
//added animation explicitly after render using useeffect

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

const[filterType , setFilterType]= useState("ALL");

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
function 

closeModal()
{
    setModalBoolValue(false);
    setValueInput("");
}






overlay_for_Modal_Update_Task={
    display:"none",
}

if (isModalOpen)
{

    overlay_for_Modal_Update_Task={
        display:"none",
    }

    modalStyle_Update_Task={
        display:"none",
    }

  overlay_for_Modal= {
        backgroundColor:"rgba(0,0,0,0.5)" ,
        // backgroundColor:"green" ,
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-Start",
        left:"0",
    
        width:"100%",
        zIndex: "100220",
    
        position:"absolute",
    
        height:"100%",
    
        overflow :"hidden",
        boxSizing:"border-box",
        top:"0",
  }


    Style_box_of_task_and_dropdown = {
        pointerEvents: isMobile ? "none" : "none",
        opacity : isMobile ? "0.9" : "0.5",
        // position:"fixed",
        zIndex: isMobile ? "100219" : "100219", /*had to modify so topbox of .box-of-task-and-dropdownAnd-ThemeBar dont hide when modal open */
        // transformStyle:"preserve3d",
        // border:"2px solid white"
        // backgroundColor:"yellow"
    }




  
    // styling adding css into react into Modal's various tags is this way with camelCase mechanism...
    // modalStyle = {display : "block"  , position : "absolute" , zIndex :"10000" , top:"0" , left:"0", right:"0", bottom:"10" ,backgroundColor:"yellow" ,alignSelf:"end",  };
    modalStyle = {display : "block" ,  margin:"12rem" ,transformStyle:"preserve3d" , zIndex: "200220", position:"absolute", top:"10" , height: isMobile? "19rem":"" , width:isMobile?"23rem":"" ,borderRadius:"1.3rem" ,   boxShadow:"rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",   };
    titleHU={    position: "relative"  , top: isMobile?"-19px" :"-18px" ,  fontSize: isMobile? "1rem":"" }
    titleHUstatus={    position: "relative"  ,top: isMobile?"7px" :"18px" ,   fontSize: isMobile? "1rem":"" }
     
    titleinput={position:"relative" , top: isMobile?"-21px" :"-18px" , left:"25px"  , height:isMobile?"25%" :"52px" , width:  isMobile?"80%" :"80%"}

  
    dropDownModal={position:"relative" , top: isMobile?"7px" :"21px"  , left:"13px"  ,height:isMobile?"25%" :"52px" , width:  isMobile?"80%" :"80%"   , fontSize: isMobile?"17px" :"19px" , fontWeight:"600", paddingLeft:"0.7rem", }
    div_covering_Button = {position: isMobile? "relative" :  "relative" , bottom: isMobile?"-31px" : "-31px"};

}
else
{
    modalStyle={display:"none"};
    
    Style_box_of_task_and_dropdown = {
 
    }


}






if (isModalOpenUpdateTask)
    {
        overlay_for_Modal={
            display:"none",
        }
        modalStyle={
            display:"none",
        }



modalStyle_Update_Task = {display : "block" ,  margin:"12rem" ,transformStyle:"preserve3d" , zIndex: "200220", position:"absolute", top:"10" ,   height: isMobile? "19rem":"" , width:isMobile?"23rem":"", borderRadius:"1.3rem" ,  boxShadow:"rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",    };
THagain={    position: "relative"  , top: isMobile?"-19px" :"-18px" ,  fontSize: isMobile? "1rem":""  }
THagainStatus={   position: "relative"  ,top: isMobile?"7px" :"18px" ,   fontSize: isMobile? "1rem":"" }
Tinput={position:"relative" ,   top: isMobile?"-21px" :"-18px" , left:"25px"  , height:isMobile?"25%" :"52px" , width:  isMobile?"80%" :"80%"}
dropDownModalAg={position:"relative" ,top: isMobile?"7px" :"21px"  , left:"13px"  ,height:isMobile?"26%" :"52px" , width:  isMobile?"80%" :"80%"   , fontSize: isMobile?"17px" :"19px" , fontWeight:"600", paddingLeft:"0.7rem"}
div_covering_ButtonAg = {position: isMobile? "relative" :  "relative" , bottom: isMobile?"-31px" : "-31px"};
overlay_for_Modal_Update_Task=
{
    backgroundColor:"rgba(0,0,0,0.5)" ,
    // backgroundColor:"green" ,
    display:"flex",
    justifyContent:"center",
    alignItems:"flex-Start",
    left:"0",
    width:"100%",
    zIndex: "100220",
    // position:"fixed",
    position:"absolute",
   
    height:"100%",
   
    overflow :"hidden",

    boxSizing:"border-box",
    top:"0",
   
}


Style_box_of_task_and_dropdown = {
    pointerEvents:"none",
    opacity :"0.5", 
    // position:"fixed",
    // zIndex:"-11",
    zIndex: isMobile ? "100219" : "100219",
    // transformStyle:"preserve3d",
    // border:"2px solid white"
    // backgroundColor:"yellow"
}

    }
//.....................................................................................................................................................................















//.....................................................................................................................................................................
//>>>>>>>>>>>>>>>Add task part<<<<<<<<<<<<<<<<


//..................................................................................................
// State variable using useState webhook


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>here concept i used to store data to Browserstorage ~READ kush throughly understand it ...<<<<<<<<<<<<<<<<<<<<<<<<<
// const[to_do  , set_to_do ]=useState(""); ~earlier when i was dealing with 1 task !!
// const[to_do  , set_to_do ]=useState([]); //earlier i stored all tasks inside array now array i stored inside browser storage too
const[to_do  , set_to_do ]=useState( function () {
    const savedTasks= localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) :[] ;
}

) ;

useEffect(function ()  {
    localStorage.setItem("tasks" ,JSON.stringify(to_do) );
    
},[to_do]
) 


// useEffect(() => {
//     const tasks = document.querySelectorAll(".workArea-To-DO > div"); // Select all task divs
//     const header = document.querySelector(".box-of-task-and-dropdownAnd-ThemeBar");
  
//     const handleScroll = () => {
//       if (!header) return;
//       const headerBottom = header.offsetHeight;
//       tasks.forEach((task) => {
//         const taskRect = task.getBoundingClientRect();
//         if (taskRect.top <= headerBottom) {
//           task.style.opacity = "0";
//           task.style.transition = "opacity 7s ease";
//         } else {
//           task.style.opacity = "1";
//         }
//       });
//     };
  
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [to_do]); // Re-run when to_do changes (i.e., when tasks are added/removed)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





// const[datehu ,setdate]=useState("");
const[,setdate]=useState("");
const[editingIndex , SeteditingIndex] = useState(null); //used here for update task  + emt function mai use hua
//to know specific index and than by todo[index].text se mai input ke jgaah pr text bhej paunff

// const[aagyivalue , setValueInput]=useState(""); //""~ye usestate leeya so bcoz ~> means empty / ye maine leeye so event.target.value jo ke input tag ko manipulate kr sku
const[aagyivalue , setValueInput]=useState(""); //""~ye usestate leeya so bcoz ~> means empty / ye maine leeye so event.target.value jo ke input tag ko manipulate kr sku

const[aagyivalueUpdateTask, setvalueinputUpdateTask]=useState("");




//>>>>>>>>>>>>>>>>>>>>>>>>>>>
//making "task_dynamic statevariable bcoz mark krne pr variable ko rerender krwana h naki pahle he 
// and state and prop(value send form parent to child and child to parent) . changes 
            // const [task_dynamic , set_task_dynamic]= useState("");
//<<<<<<<<<<<<<<<<<<<<<<<<<<<,


//..................................................................................................



//i wrote css styling with usestate so i can change it later on render/means not refresh but change in value
// const [task_dynamic , set_task_dynamic]= useState(
    const [task_dynamic ]= useState(
{

        // minHeight:"120px",
        fontSize: isMobile?"17.7px" :"22px",
        fontWeight:isMobile?"600":"700",
        width:isMobile?"210px":"",
        position:"relative",
        right: isMobile?"29px" :"18px",
        bottom: isMobile?"7px" :"11px",

        wordBreak:"break-all",
        overflowWrap:"break-word",
        padding: isMobile?"0.3rem" :"1rem",
        // textWrap:"preety",
        float:"right",
        display:"block",
        alignSelf:"start",
        whiteSpace :"normal",
    }
);




// let datekeStyling={}; //if i want to do style datekeStyling without rendering


// const [datekeStyling , setdatekeStyling]=useState(  ////if i want to do style datekeStyling with rendering
    const [datekeStyling  ]=useState(  ////if i want to do style datekeStyling with rendering
{    
    fontSize: isMobile?"10px":"14px",
    color:"green",
    fontWeight:isMobile?"600":"700",
    // left:isMobile?"598px":"38px",
    alignSelf:"start",
    // display:"block",
    backgroundColor:"white",
    display:"block",
    // display:"block",
    textWrap: "nowrap",
    marginRight:"40%",
    marginTop:"0%",
    position:"relative",
    right: isMobile?"29px" :"18px",
    bottom: isMobile?"7px" :"11px",

    }
);



// const[t_o_m_Headings ,SETtop_of_modal_Heading]=useState("Add-To-DO")
// const[add_taskANDupdateTaskkaChange ,SETadd_taskANDupdateTaskkaChange]=useState("Add Task")


// console.log("bhaar aagyivalue: ",aagyivalue); TRACKING MECHANISM PROF V.DAGA
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
                        
                                    setdate(formatdate);
                    

                              

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
// task_entered="okookok";
// <<<<<<<<<<<<<<<<<<<<<<<< AddtaskPart ends







//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> On change part after this only Add task can take place

// >>>>>>>>>>>>>>>>>on change input value pr store krdee maine setter method setValueInput
//step 1 when ever read this code start from here !
function OnChange_input_value(event)
{
   
    setValueInput(event.target.value);
    console.log("inside on change task_entered : ",task_entered);
    
}

function OnChange_input_value_Update_Task(event)
{
    setvalueinputUpdateTask(event.target.value);
    // console.log("inside on chanaagyivalueUpdateTaskge task_entered : ",task_entered);
    
}


function Update_task_funcN()
{ //READ HERE ALL STEPS WERE VERY IMPORTANT

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

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<On change part after this only Add task can take place












//Vimp ForStyling
// use camel case css styling <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<note ex kushBhardwaj~?B capital!
//.....................................................................................................................................................................

let taskcontent_Subdiv_styling={};
let mark_box_styling={}; //it can't be declared with string declare as object  coz its bydefault syntax // let mark_box_styling = ""; coz later i am using this as variable for css styling where i am doing styling
                                                                                                                                    //....// markBox = <input type="checkbox" style={mark_box_styling} />;

//.....................................................................


//STYLING PART BELOW
//.....................................................................

// styling adding css into react into middleSection where task gonna stay  various tags is this way with camelCase mechanism...


                   
                   

  
                                                    mark_box_styling=
                                                    {
                                                        
                                                        height:isMobile?"17px":"24px",
                                                        width:isMobile?"17px":"24px",
                                                        backgroundColor:"red",
                                                        cursor:"pointer",
                                                        marginRight:"2.3rem",
                                                        marginLeft:"0.3rem",
                                                        marginTop:"0.1rem",
                                                        fontWeight:"600",
                                                        
                                                
                                                    }
                                                    taskcontent_Subdiv_styling = {
                                           
                                                            color: "black",
                                                            backgroundColor: "white",
                                                            width: "100%", // Take full width of parent
                                                            // maxWidth: "650px", // Cap the width
                                                            maxWidth: isMobile?"350px":undefined, // Cap the width
                                                            display: "flex",
                                                            // padding: "0.3rem",
                                                            padding: isMobile ? "0.3rem" : undefined,

                                                            // fontSize: isMobile?"7px": "25px",
                                                            fontSize: isMobile?"7px": undefined,
                                                            // height:isMobile?"auto" :"10%",
                                                            height:isMobile?"auto" :undefined,
                                                            fontWeight: "400",
                                                            borderRadius: "1rem",
                                                            border: "2px solid gray",
                                                            // margin: isMobile ?"1rem" : "2rem",
                                                            margin: isMobile ? "1rem" : undefined,

                                                            boxSizing: "border-box", // Include padding/border in width
                                                            overflowWrap: "break-word", // Ensure text wraps
                                                            zIndex:"49",
                                                            boxShadow: "0px 25px 20px -20px rgba(0, 0, 0, 0.45), -25px 0 20px -20px rgba(0, 0, 0, 0.45)",
                                                            
                                                        
                                                        }; // Style for task
//   }




//......................................................VIMP.......................................................................

//two ways of writing jsx code outside return than inside return
// This JSX is written inside a function, but it’s not being returned or rendered anywhere. J
// JSX needs to be part of the return statement of your component (or a child component) 
// to be rendered in the UI. Simply writing JSX inside a function like this does nothing—
// it’s just a JavaScript expression that gets evaluated and discarded.
// You can declare JSX outside the return statement and store it in a variable (like xyz = <div>...</div>), then use that variable inside the return statement (e.g., {xyz}). This works because:
// JSX is just JavaScript: JSX is syntactic sugar for JavaScript. When you write xyz = <div>...</div>, it gets compiled to a JavaScript expression (e.g., React.createElement("div", null, ...)). You can store this in a variable and use it anywhere in your code.
//these variables are also used later inside return


// inside return
// Rendering Happens in return: The return statement defines what gets rendered to the DOM. When you use {xyz} inside the return, React renders the JSX stored in xyz.
//but without return directly its not allowded to use jsx bcoz

// This JSX is written inside a function, but it’s not being returned or rendered anywhere. J
// JSX needs to be part of the return statement of your component (or a child component) 
// to be rendered in the UI. Simply writing JSX inside a function like this does nothing—
// it’s just a JavaScript expression that gets evaluated and discarded.





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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<
// function  Delete_Middle_Text(index)
// {   



//     set_to_do(to_do.filter (function (formalParameter , i )  {
//                     if (i!==index)
//                     {

                        
//                         // return {
//                         //     ... formalParameter ,
//                         //     dlt_btn : !formalParameter.dlt_btn
//                         // }
//                         console.log("to_do after delete :" , to_do)
//                         return i!==index;
//                         // return index(i) ;
//                     }
//                     return i!==index;
//                 }
//         )
// )
// }

function Delete_Middle_Text(index) {
    set_to_do(to_do.filter(function (formalParameter, i) {
        console.log("to_do after delete :", to_do);
        return i !== index; // Explicit return
    }));
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>



        
const [updateTaskStatus , setupdateTaskStatus]=useState("InComplete");

// let overlay_for_Modal_Update_Task={};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function emt(index)

{
openMOdalUpdateTask();
    
    

SeteditingIndex(index);
console.log("task_entered valuye:",task_entered); //adding  a task , opening a modal do re render and that value gets reset in onchangeprop()
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


















//............................................... note!
//earlier it didnt worked inside addtask function bcoz m changing value of variable without refresh and that falls under refresh
//but if i want without refresh thats called render and i want to make it as state variable
markboxAndContent_Parent={
    display:"flex",
    flexDirection:"row",
    gap:"1px",
    // backgroundColor:"yellow",
    justifyContent:"start",
    width:"100%",
    

}
let textAndDateParentBox={
    display:"flex",
    flexDirection:"column",
    gap:"1px",
    marginRight:"100px",
    justifyContent:"start",
    alignitems:"start",
    // backgroundColor:"green",
}
let deleteBtn=
{
    height:isMobile?"21px":"30px",
    width: isMobile?"21px":"30px",
    border:"1px solid black",
    borderRadius:"0.3rem",
    // padding:"0.1rem",


}
let editBtn =
{
    height:isMobile?"21px":"30px",
    width: isMobile?"21px":"30px",
    border:"1px solid black",
    borderRadius:"0.3rem",
    padding:"0.1rem",
}
let parentOfDeleteAndEditBtn =
{
    display :"flex",
    gap:isMobile?"9px":"13px",
    // marginRight:isMobile?"3.3rem":"",
    position:"relative",
    right: isMobile?"3.1rem" :"18px",
    bottom: isMobile?"2px" :"11px",
}

let deleteImg =
{
    height:"100%",
    width:"100%",
}
let editImg =
{
    height:"100%",
    width:"100%",
}
//...............................................
// here tags declaration in react

let taskContent; //declaration of variable
// let markBox; //declaration of variable
// let FinalDate;  //declaration of variable
// let final_task;
// let todoInitial;
let filteredTask= to_do; //filtered task became array here 

//........................................................................................................................................
//  console.log("value of to do : ",to_do); //tracking i came to know i had to use here -- >" No Todosss"





if (to_do.length ===0  ) //means initial state  now array for multiple task
{


    //styling in react >>>> css styling  vanilla plane css
    //if name is written inside tag
    taskContent = <div className="Mid_Text">No Todos</div>;

    // taskcontent_Subdiv_styling={backgroundColor : "red" };  error bcoz -->In the line taskContent = <div style={taskcontent_Subdiv_styling} className="Mid-Text">No Todos</div>, you’re using taskcontent_Subdiv_styling in the style prop before it’s defined.
    //bcoz if block chlaa he nahi abi or vo if block ke value satisfy ne krra 

  
    
    
} 




else { //means after initial state 
    // markBox =   <input type="checkbox" style={mark_box_styling} /> 
    
    
                if (taskContent !=="") //means task ke andr kuch aagya leekh ke than kyaa daalna ye stage no todos ke baad after add task button click pr aayege 
                {
                        


                    if (filterType === "Completed" )
                    {
                        
    
                                filteredTask = to_do.filter(function (formalP) { 
                                    console.log("filteredTask-CompleteVal : ",filteredTask);
                                    return formalP.Checked } );

                            //arrowfunction for predicate
                            // filteredTask = to_do.filter(task =>task.Checked );

                            if (filteredTask.length === 0) {
                                taskContent = <div className="Mid_Text">No Completed Tasks Yet</div>;
                            }
                             else {  //means length nahi hai 0
                                // If there are completed tasks, map them as usual
                                taskContent = filteredTask.map(function (task, index) {
                                    const taskStyle = {
                                        ...task_dynamic,
                                        textDecoration: task.Checked ? "line-through" : "",
                                        opacity: task.Checked ? "30%" : "100%",
                                    };
                    
                                    return (
                                        <div style={taskcontent_Subdiv_styling} className="task">
                                        
                                        {/* 1 */}
                                        {/* markbox AND content parent */}
                                            <div style={markboxAndContent_Parent}>
                                                <div>
                                                    <input
                                                        onChange={() => markfunction(task.id)}
                                                        type={"checkbox"}
                                                        style={mark_box_styling}
                                                        checked={task.Checked}
                                                    />
                                                </div>


                                                {/*2  textAndDateParentBox */}
                                                
                                                <div style={textAndDateParentBox}>
                                                    {/* 2.1 */}
                                                    <div style={taskStyle}>{task.text} <br /></div>
                                                    
                                                    
                                                    {/* 2.2 */}
                                                    <div style={datekeStyling}>{task.date}</div>
                                                </div>
                                           
                                           
                                           
                                            </div>
                                            


                                            {/* 3 */}
                                            <div style={parentOfDeleteAndEditBtn}>
                                                
                                                {/* 3.1 */}
                                                <button
                                                    style={deleteBtn}
                                                    onClick={() => Delete_Middle_Text(index)} >

                                                    {/* <img src={dlt} style={deleteImg} /> */}
                                                    <img src={"/dlt.png"} style={deleteImg}  alt="preload" />
                                                </button>
                                                
                                                    {/* 3.2 */}
                                                
                                                <button style={editBtn} onClick={() => emt(index)}>
                                                    {/* <img src={edit} style={editImg} /> */}
                                                    <img src={"/edit.png"} style={editImg} alt="preload" />
                                                </button>
                                            
                                            </div>
                                        
                                        
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
                                        const taskStyle = {
                                            ...task_dynamic,
                                            textDecoration: task.Checked ? "line-through" : "",
                                            opacity: task.Checked ? "30%" : "100%",
                                        };
                        
                                        return (
                                            <div style={taskcontent_Subdiv_styling}  className="task">
                                            
                                            {/* 1 */}
                                            {/* markbox AND content parent */}
                                                <div style={markboxAndContent_Parent}>
                                                    <div>
                                                        <input
                                                            onChange={() => markfunction(task.id)}
                                                            type={"checkbox"}
                                                            style={mark_box_styling}
                                                            checked={task.Checked}
                                                        />
                                                    </div>
    
    
                                                    {/*2  textAndDateParentBox */}
                                                    
                                                    <div style={textAndDateParentBox}>
                                                        {/* 2.1 */}
                                                        <div style={taskStyle}>{task.text} <br /></div>
                                                        
                                                        
                                                        {/* 2.2 */}
                                                        <div style={datekeStyling}>{task.date}</div>
                                                    </div>
                                               
                                               
                                               
                                                </div>
                                                
    
    
                                                {/* 3 */}
                                                <div style={parentOfDeleteAndEditBtn}>
                                                    
                                                    {/* 3.1 */}
                                                    <button
                                                        style={deleteBtn}
                                                        onClick={() => Delete_Middle_Text(index)} >
    
                                                        {/* <img src={dlt} style={deleteImg} /> */}
                                                        <img src={"/dlt.png"} style={deleteImg} alt="preload" />
                                                    </button>
                                                    
                                                        {/* 3.2 */}
                                                    
                                                    <button style={editBtn} onClick={() => emt(index)}>
                                                        {/* <img src={edit} style={editImg} /> */}
                                                        <img src={"/edit.png"} style={editImg } alt="preload" />
                                                    </button>
                                                
                                                </div>
                                            
                                            
                                            </div>
                                        );
                                    });
                                }
                        } 
                        
                        

                        else if (filterType === "ALL" )
                            {
                                
                                

                                filteredTask = 
                                
                                taskContent = filteredTask.map(function (task, index) {
                                    const taskStyle = {
                                        ...task_dynamic,
                                        textDecoration: task.Checked ? "line-through" : "",
                                        opacity: task.Checked ? "30%" : "100%",
                                    };
                    
                                    return (
                                        <div style={taskcontent_Subdiv_styling}  className="task">
                                        
                                        {/* 1 */}
                                        {/* markbox AND content parent */}
                                            <div style={markboxAndContent_Parent}>
                                                <div>
                                                    <input
                                                        onChange={() => markfunction(task.id)}
                                                        type={"checkbox"}
                                                        style={mark_box_styling}
                                                        checked={task.Checked}
                                                    />
                                                </div>


                                                {/*2  textAndDateParentBox */}
                                                
                                                <div style={textAndDateParentBox}>
                                                    {/* 2.1 */}
                                                    <div style={taskStyle}>{task.text} <br /></div>
                                                    
                                                    
                                                    {/* 2.2 */}
                                                    <div style={datekeStyling}>{task.date}</div>
                                                </div>
                                           
                                           
                                           
                                            </div>
                                            


                                            {/* 3 */}
                                            <div style={parentOfDeleteAndEditBtn}>
                                                
                                                {/* 3.1 */}
                                                <button
                                                    style={deleteBtn}
                                                    onClick={() => Delete_Middle_Text(index)} >

                                                    {/* <img src={dlt} style={deleteImg} /> */}
                                                    <img src={"/dlt.png"} style={deleteImg} alt="preload" />
                                                </button>
                                                
                                                    {/* 3.2 */}
                                                
                                                <button style={editBtn} onClick={() => emt(index)}>
                                                <img src={"/edit.png"} style={editImg} alt="preload" />
                                                </button>
                                            
                                            </div>
                                        
                                        
                                        </div>
                                    );
                                }); 
                                
                            }
                        



                                                        

                }
        
    //Read it for future error..................
                // taskcontent_Subdiv_styling={backgroundColor : "red" };  error bcoz -->In the line taskContent = <div style={taskcontent_Subdiv_styling} className="Mid-Text">No Todos</div>, you’re using taskcontent_Subdiv_styling in the style prop before it’s defined.
    //error..................

}
//.....................................................................................................................................................................

function dropDownFunction(event){

    console.log("current value", event.target.value);
    setFilterType(event.target.value);



}
// const [changePht , SETchangePht]=useState("Anime") ;
// const [ThemePhoto , setThemePhoto]=useState(am2);
const [ThemePhoto , setThemePhoto]=useState(isMobile ? mb10 : am2);
function changePhoto(event)
{
    if (event.target.value === "AnimeOne")
        {
            // console.log("am2");
            isMobile ? setThemePhoto(mb1) : setThemePhoto(am1);
        }
    else if (event.target.value === "AnimeTwo")
    {
        // console.log("am");
        isMobile ? setThemePhoto(mb2) : setThemePhoto(am2);
    }
    else if (event.target.value === "AnimeThree")
    {
        // console.log("am3");
       isMobile ? setThemePhoto(mb3) :  setThemePhoto(am3);
    }
    else if (event.target.value === "AnimeFourth")
    {
        console.log("AnimeArt");
        // setThemePhoto(AnimeArt);
        
        isMobile ? setThemePhoto(mb4) : setThemePhoto(AnimeArt);
    }

    else if (event.target.value === "AnimeFive")
        {
            // console.log("AnimeArt");
            setThemePhoto(mb5);
            
            // isMobile ? setThemePhoto(mb2) : setThemePhoto(AnimeArt);
        }
        else if (event.target.value === "AnimeSix")
            {
                // console.log("AnimeArt");
                // setThemePhoto(AnimeArt);
                setThemePhoto(mb6)
                
                // isMobile ? setThemePhoto(mb2) : setThemePhoto(AnimeArt);
            }
            else if (event.target.value === "AnimeSeven")
                {
                    // console.log("AnimeArt");
                    // setThemePhoto(AnimeArt);
                    setThemePhoto(mb7)
                    
                    // isMobile ? setThemePhoto(mb2) : setThemePhoto(AnimeArt);
                }
                else if (event.target.value === "AnimeEight")
                    {
                        // console.log("AnimeArt");
                        // setThemePhoto(AnimeArt);
                        setThemePhoto(mb8)
                        // isMobile ? setThemePhoto(mb2) : setThemePhoto(AnimeArt);
                    }
                    else if (event.target.value === "AnimeNine")
                        {
                            // console.log("AnimeArt");
                            // setThemePhoto(AnimeArt);
                            setThemePhoto(mb9)
                            
                            // isMobile ? setThemePhoto(mb2) : setThemePhoto(AnimeArt);
                        }
                        else if (event.target.value === "AnimeTen")
                            {
                                // console.log("AnimeArt");
                                // setThemePhoto(AnimeArt);
                                setThemePhoto(mb10)
                                
                                // isMobile ? setThemePhoto(mb2) : setThemePhoto(AnimeArt);
                            }
                            else if (event.target.value === "AnimeEleven")
                                {
                                    // console.log("AnimeArt");
                                    // setThemePhoto(AnimeArt);
                                    setThemePhoto(mb11)
                                    // isMobile ? setThemePhoto(mb2) : setThemePhoto(AnimeArt);
                                }
                                else if (event.target.value === "AnimeTwelve")
                                    {
                                        // console.log("AnimeArt");
                                        // setThemePhoto(AnimeArt);
                                        setThemePhoto(mb12)
                                        
                                        // isMobile ? setThemePhoto(mb2) : setThemePhoto(AnimeArt);
                                    }
                                    else if (event.target.value === "AnimeThirteen")
                                        {
                                            // console.log("AnimeArt");
                                            // setThemePhoto(AnimeArt);
                                            setThemePhoto(mb13)
                                            // isMobile ? setThemePhoto(mb2) : setThemePhoto(AnimeArt);
                                        }

}

let Wrapper={
    
    display:"flex",
    flexWrap:"wrap",
    overflowX:isMobile? "hidden" :"hidden",

    minHeight:  isMobile ? "100vh" :  "100%",
    minWidth:  isMobile ? "100vw" :  "100vh",

    position:isMobile ?"relative" :"relative",
    
    backgroundImage:  `url(${isMobile ? ThemePhoto : ThemePhoto}`,
    // backgroundSize:"cover",
    backgroundSize: isMobile ? "cover" : "cover",
    backgroundPosition: isMobile ? "center" : "center",
    backgroundRepeat:isMobile ? "no-repeat" : "no-repeat",
    // backgroundAttachment:"fixed",
    backgroundAttachment:isMobile? "scroll" : "fixed",
    paddingTop:"env(safe-area-inset-top)",

}

// i can not show parallax affect on entire scroll
// let ParentofBgThemeImageANDTopBox={


    
// }
 //dusre file se bgimage htaa deeyo bhai
//  let BgThemeImage={

  
// }
//  let topBoxx ={
   
    // display:"flex",
    // backgroundColor:"green",
    // width:"100vw",
    // height:"100vh",
    // backgroundColor
    // zIndex:"101111",
    // position:"absolute",

//  }

 let Theme_Bar={

 }

 let label_Style ={
    // backgroundColor:"",
    // position:"fixed",
    // bottom:"30px",
    // left:"0",

 }

let bgofloader={
   

}
 // let content;
 


 //KKKKKKKKKKKKKKKKKKKKKKKKKKKK>>>>>>>> 2 return krwaya maine ye bcoz of first loading screen loader kkkkkkkkkkkkkkkkkkkkkkk<<<<<<<<<,,
 //jbki react syntax mai ek he krwaya abi tk maine
//  if (isLoading && isLoadingText) {
 if (isLoading ) {
            return(
        //   content = (
        
<div className="parentOfLoaderStyleANDBgofloader">        
                <div className="loaderStyle" style={loaderStyle}  >
                    <img
                        className="loadinglogoImg"
                        src={loadingLogo}
                        alt="preload" /*just message*/
                        onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
                        loading="eager"


                    />
                    <p className="LoaderTextStyle" style={LoaderTextStyle} >CREATOR KUSH-GOD </p>
                </div>
            
            <div>
            <div style={bgofloader} className="bgloader" >  </div>
            </div>
</div>



            );
        }

else
{          
    // content= (
    return (
<div  style={Wrapper} className="Wrapper">
    

    {/* theming area starts */}
     {/* Preload images */}

     {/*READ IT MADE SWITCHING FAST so in short let me ask is it bcoz img tag was used drop down gets easy to fetch image bcoz img tag means images is being fetched out for once from disk which is not shown and storde in cache than drop down fetch it from cache */}
     <div style={{ display: "none" }}>  {/*READ KUSH IMPORTANT HAI disply none bcoz load ke time he manwara hu image by loading eager */}
     
      


                                                <img src={isMobile ? mb4 : am1} alt="preload am"  loading="eager" />    
                                                <img src={isMobile ? mb2 : am2 }  alt="preload am2 " loading="eager"  />
                                                <img src={isMobile ? mb3 : am3} alt="preload am3"  loading="eager" />
                                                {/* Mobile photos starts */}
                                                <img src={mb1} alt="preload mb1" loading="eager" />
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
                        <img src={mb13} alt="preload mb13" loading="eager" />
                                                {/* Mobile Photos ends */}
                                    {/* Add these lines for preloading close, dlt, and edit */}
                                    <img src="/close.png" alt="preload close" loading="eager" />
                                    <img src="/dlt.png" alt="preload dlt" loading="eager" />
                                    <img src="/edit.png" alt="preload edit" loading="eager" />
                                    <img src={ "/letter-k.png"} alt="preload edit" loading="eager" />

        </div> 
        {/* will ask tomorrow about it */}
        


    {/* <div className="ParentofBgThemeImageANDTopBox" style={ParentofBgThemeImageANDTopBox}> */}
           

            {/* <div style={topBoxx}>  */}
    {/* .............................................................................................. */}
                {/* 1 */}
                {/* <div >
                <h1 id="top_heading_todo">TODO LIST</h1>
                </div> */}
    {/* .............................................................................................. */}
            
            
    {/* .............................................................................................. */}        
            {/* 2 */}

        {/* <div> */}
        
                    <div style={Style_box_of_task_and_dropdown} className="box-of-task-and-dropdownAnd-ThemeBar">
                                                                                        {/* 2.1 */}


                                                                                        <div >
                                                                                                {/* <h1 id="top_heading_todo">TODO LIST</h1> */}
                                                                                                <h1 id="top_heading_todo">Jot_Down  <span> <img  className="top-head-K" src="/letter-k.png"alt="preload edit" loading="eager" />aro  </span> </h1>
                                                                                        </div>


                                                                                            {/* child of box-of-task-and-dropdownAnd-ThemeBar and parent of   tash and dropdown*/}
                                                                            <div className="box-of-task-and-dropdown" >
                                                                                    <div>
                                                                                        <button className="add-task-Button" onClick={openModal}>
                                                                                            <p>Add Task</p>
                                                                                        </button>
                                                                                        </div>


                                                                                                    {/* 2.2*/}

                                                                                                    {/* <label for="date" > date</label> */}
                                                                                                    
                                                                                                    {/* <input id="date">
                                                                                                    </input> */}
                                                                                                    <div>
                                                                                                        {/* <select  onChange={function () { 
                                                                                                            dropDownFunction()
                                                                                                        
                                                                                                        } }  */}
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
                                                                                            <div className="ThemeBar" style={Theme_Bar}>
                                                                                             
                                                                                             
                                                                                             {/* child1*/}
                                                                                             {/* <div style={{display:"flex" , gap:"-1px"}} > */}
                                                                                                
                                                                                                
                                                                                                <label  className="label_Style" style={label_Style}> Theme-Select     

                                                                                                {/* <span id="midbox"> */}
                                                                                                    <FaArrowRight style={{ fontSize: '13px', color: 'white' }} /> {/* Add the icon */}
                                                                                                    {/* </span> */}
                                                                                                </label>
                                                                                           
                                                                                                {/* </div> */}
                                                                                                {/* <div className="rightFinger"> &#128073;</div> */}
                                                                                                    
                                                                                                    {/* child2 */}
                                                                                                    {/* <img  className="rightFinger"/>   */}
                                                                                        
                                                                                                {/* <div> */}
                                                                                                {/* </div> */}
                                                                                                {/* <br/> */}
                                                                                                {/* <input typ> */}
                                                                                                {/* </input> */}

                                                                                            {/*child3  */}
                                                                                            <div>
                                                                                                <select className="themeDropDown"  onChange={changePhoto}>
                                                                                                <option value="AnimeOne">AnimeOne</option>
                                                                                                {isMobile ?
                                                                                                        (
                                                                                                            
                                                                                                                <>
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
                                                                                                                    </>
                                                                                                        
                                                                                                        ):
                                                                                                            
                                                                                                        (  
                                                                                                            <>
                                                                                                            <option value="AnimeTwo">AnimeTwo</option>
                                                                                                            <option value="AnimeThree">AnimeThree</option>
                                                                                                            <option value="AnimeFourth">AnimeFourth</option>
                                                                                                            </>
                                                                                                            
                                                                                                        
                                                                                                        )
                                                                                                        

                                                                                            
                                                                                                }
                                                                                                </select>
                                                                                                </div>
                                                                                        
                                                                                            </div>
    {/* theming area ends.. */}

                                                                                                            {/* <<<<<<<<<<<<<<<<<<<<<<<< */}

        
                    </div>


{/* modal thing below started */}

                    <div style={overlay_for_Modal} >
                            
                            <div className="Modal-Div"   style={modalStyle} > 
                            {/* 1 */}
                            <p id="Modal-top-Heading"> What_ToDo? </p>
                
                
                            {/* 2 */}
                            {/* form */}
                
                
                                            {/* 2.1 */}
                                            <label   style={titleHU} for="titleinput"  id="titleHU">Title </label>
                                            
                                                {/* >>>>>>>>>>>>READ
                                            //is input box ke attribut  e/yani react mai bole to prop mai muje value={aagyivalue } lgana pdaa bcoz//
                                            //even after setvalueINput("") is openMOdal and closeModal still inputbox se pichla text ne htrhaa thaa
                                            //so ye precise kaam krgya
                                            <<<<<<<<<<<<<< */}
                                            <input  onChange={OnChange_input_value} style={titleinput} id="titleinput"    value={aagyivalue} ref={AddtaskModalinputRefs}  onClick={ function (){AddtaskModalinputRefs.current.focus()} } />   {/*input is void element means dont use close tag for input tag*/}
                                            {/* Exactly. React doesn’t recognize OnChange_input_value as a valid event handler prop because it’s not a standard React event prop. */}
                                            {/* so use OnChange */}
                
                
                                            <br/> 
                
                
                
                
                
                
                
                
                                            {/* 2.2 */}
                                            <label   style={titleHUstatus} for="titlehu" id="titleHuAgain">Status </label>
                                            <select style={dropDownModal} className="dropDownModal" > 
                
                                                <option selected id="selec" className="dropdownOption-Modal"> <p className="para"> InComplete </p> </option>
                                                <option className="dropdownOption-Modal" >Completed</option>
                                                <option className="dropdownOption-Modal" ></option>
                                            </select>
                                            
                                            {/* <input id="titlehu" />  */}
                                            {/*input is void element means dont use close tag for input tag*/}
                
                
                
                
                
                
                
                
                
                                    {/* 3 */}
                
                                    <div  style={div_covering_Button}  className="div-covering-Button">
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
                        </div>
                </div>
                    



                    {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

    <div style={overlay_for_Modal_Update_Task} >
            
            <div className="Modal-Div"   style={modalStyle_Update_Task} > 
            {/* 1 */}
            <p id="Modal-top-Heading"> Update-To-DO </p>
            
            
            {/* 2 */}
            {/* form */}
            
            
                            {/* 2.1 */}
                            <label   style={THagain} for="titleinputAgain"  id="titleHUAgain">Title </label>
                            
                                {/* >>>>>>>>>>>>READ
                            //is input box ke attribut  e/yani react mai bole to prop mai muje value={aagyivalue } lgana pdaa bcoz//
                            //even after setvalueINput("") is openMOdal and closeModal still inputbox se pichla text ne htrhaa thaa
                            //so ye precise kaam krgya
                            <<<<<<<<<<<<<< */}
                            <input  onChange={OnChange_input_value_Update_Task} style={Tinput} id="titleinputAgain" value={aagyivalueUpdateTask}  ref={UpdatetaskModalinputRefs}  onClick={function() {UpdatetaskModalinputRefs.current.focus()} }/>   {/*input is void element means dont use close tag for input tag*/}
                            {/* <input  onChange={OnChange_input_value} style={titleinput} idAAAA="titleinput"    value={aagyivalue} />   input is void element means dont use close tag for input tag */}
                            {/* Exactly. React doesn’t recognize OnChange_input_value as a valid event handler prop because it’s not a standard React event prop. */}
                            {/* so use OnChange */}
            
            
                            <br/> 
            
            
            
            
            
            
            
            
                            {/* 2.2 */}
                            <label   style={THagainStatus} for="titlehu" >Status </label>
                            <select style={dropDownModalAg} className="dropDownModalAg" value={updateTaskStatus} >  
                                {/* this value updateTaskStatus resolved my part of incomplete and complete */}
            
                                <option selected id="selec" className="dropdownOption-Modal"> <p className="para"> InComplete </p> </option>
                                <option className="dropdownOption-Modal" >Completed</option>
                                <option className="dropdownOption-Modal" ></option>
                            </select>
                            
                            {/* <input id="titlehu" />  */}
                            {/*input is void element means dont use close tag for input tag*/}
            
            
            
            
            
            
            
            
            
                    {/* 3 */}
            
                    <div  style={div_covering_ButtonAg}  className="div-covering-ButtonAg">
                                    {/* 3.1 */}
            
                                    {/* {to_do{function(index)  }}  WAPS*/} 
                                    <button onClick={Update_task_funcN} className="div-Button-in-Modal">
                                                                            <p id="UpdateTaskBtn">UpdateTask</p>
                                    </button>
            
            
                                    {/* 3.2 */}
            
                                    {/* style={cancel_btn_div}  when wrote here than declare at top than define inside ifblock above with name of style prop/attribute */}
                                    <button onClick={closeModalUpdateTask} id="cancel-btn-div" className="div-Button-in-Modal">
                                                                            <p id="cancel-btn">Cancel</p>
                                    </button>
            
            
                        </div>
            
            
            
            
            
            
            
            
            
            
            
            {/* 4 */}
            {/* close button */}
            
            <div id="closeimg-div">
            {/* <img  id="crossimg" src=  {close}       onClick={closeModalUpdateTask}  /> */}
            <img  id="crossimg" src=  {"/close.png"}       onClick={closeModalUpdateTask}  alt="preload" />
            </div>
            </div>
    </div>
            
                    {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                    <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

                    
     

                    
            {/* </div> */}
    {/* .............................................................................................. */}
    {/* 3 */}
    <div         className="workArea-To-DO"> 
        {/* {markBox}  */}
        {/* no need to use here as i declared above */}
            {taskContent}
            
            
            {/* <div> {todoInitial} </div> */}
    
            {/* <div > {final_task} </div> */}
    </div>




  

    {/* .............................................................................................. */}










    {/* ******************************.....................................................................................................................................******************************  */}
    {/* 4 */}
                    {/* modal below in center */}

                
                {/* ..................................................................................................................................... */}



    {/* 5 ifelse ke basis pr new value */}












            
            {/* </div> */}
    {/* </div>         */}
 </div>   
    );
}
    

// return content;
            
        


    
    
    //  );
}

export default TdlMainbox;



//NOTE

