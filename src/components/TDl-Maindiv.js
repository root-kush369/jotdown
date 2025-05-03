import "./TDL-Maindiv.css"
import TDL_mainbox from "./tdl-mainbox";
function BG_TDl(props){


    return(
        <div className="bg-main"> 
        {props.children}
            <TDL_mainbox> </TDL_mainbox>


        </div>

    );
}

export default BG_TDl ;