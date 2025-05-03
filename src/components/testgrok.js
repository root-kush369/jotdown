import React, { useState } from "react";
import "./tdl-mainbox.css";
import close from "/home/archkarch/archCustom/deb-for-EVER/All-webDevelopment-Codes/ReactFolio/day3_counter_app/src/components/close.png";

function TDL_mainbox() {
  let modalStyle = {};
  let titleHU = {};
  let titleHuAgain = {};
  let titleinput = {};
  let dropDownModal = {};
  let div_covering_Button = {};

  // Modal opening part
  const [isModalOpen, setModalBoolValue] = useState(false);

  function openModal() {
    setModalBoolValue(true);
  }

  function closeModal() {
    setModalBoolValue(false);
  }

  if (isModalOpen) {
    modalStyle = { display: "block" };
    titleHU = { position: "relative", top: "-18px" };
    titleinput = { position: "relative", top: "-18px", left: "25px", height: "52px", width: "80%" };
    titleHuAgain = { position: "relative", top: "11px" };
    dropDownModal = { position: "relative", top: "21px", left: "13px", height: "52px", width: "80%", fontSize: "19px", fontWeight: "600" };
    div_covering_Button = { position: "relative", bottom: "-31px" };
  } else {
    modalStyle = { display: "none" };
  }

  // Add task part
  const [to_do, set_to_do] = useState(""); // Start with empty string
  const [inputValue, setInputValue] = useState(""); // Store input value

  function add_task_funcN() {
    if (inputValue) {
      set_to_do(inputValue); // Set the task
      setInputValue(""); // Clear the input
      setModalBoolValue(false); // Close the modal
    }
  }

  function OnChange_input_value(event) {
    setInputValue(event.target.value); // Update input value as user types
  }

  // Use if-else to determine what to render
  let taskContent;
  if (to_do === "") {
    taskContent = <span className="Mid-Text">No Todos</span>;
  } else {
    taskContent = <div className="task-div">{to_do}</div>;
  }

  return (
    <div>
      {/* 1 */}
      <h1 className="top-heading-toDO">TODO LIST</h1>

      {/* 2 */}
      <div className="box-of-task-and-dropdown">
        <button className="add-task-Button" onClick={openModal}>
          <p>Add Task</p>
        </button>

        <select className="dropDown">
          <option className="dropdownOption">Completed</option>
          <option selected className="dropdownOption">InComplete</option>
          <option className="dropdownOption">ALL</option>
        </select>
      </div>

      {/* 3 - Dynamically render task with if-else */}
      <div className="workArea-To-DO">{taskContent}</div>

      {/* 4 - Modal */}
      <div className="Modal-Div" style={modalStyle}>
        <p id="Modal-top-Heading">Add TODO</p>

        <label style={titleHU} htmlFor="titleinput" id="titleHU">
          Title
        </label>
        <input
          onChange={OnChange_input_value}
          value={inputValue}
          style={titleinput}
          id="titleinput"
        />

        <br />
        <label style={titleHuAgain} htmlFor="titlehu" id="titleHuAgain">
          Status
        </label>
        <select style={dropDownModal} className="dropDownModal">
          <option selected id="selec" className="dropdownOption-Modal">
            InComplete
          </option>
          <option className="dropdownOption-Modal">Completed</option>
          <option className="dropdownOption-Modal"></option>
        </select>

        <div style={div_covering_Button} className="div-covering-Button">
          <button onClick={add_task_funcN} className="div-Button-in-Modal">
            <p>Add Task</p>
          </button>

          <button id="cancel-btn-div" className="div-Button-in-Modal">
            <p id="cancel-btn">Cancel</p>
          </button>
        </div>

        <div id="closeimg-div">
          <img id="crossimg" src={close} onClick={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default TDL_mainbox;