let content;

if (isLoading) {
  content = (
    <div style={loaderStyle}>
      <img
        src={loadingLogo}
        alt="Loading Logo"
        style={{ width: "100px", height: "100px" }} // Adjust size as needed
      />
    </div>
  );
}
 else {
  content = (
    <div style={Wrapper} className="Wrapper">
      {/* Your existing JSX content */}
      <div style={{ display: "none" }}>
        <img src={AnimeArt} alt="preload AnimeArt" />
        <img src={am} alt="preload am" />
        <img src={am2} alt="preload am2" />
        <img src={am3} alt="preload am3" />
      </div>
      <div style={Theme_Bar}>
        <label className="label_Style" style={label_Style}>
          Theme-Select
        </label>
        <br />
        <select className="themeDropDown" onChange={changePhoto}>
          <option selected>AnimeOne</option>
          <option>AnimeTwo</option>
          <option>AnimeThree</option>
          <option>AnimeFourth</option>
        </select>
      </div>
      <div
        className="ParentofBgThemeImageANDTopBox"
        style={ParentofBgThemeImageANDTopBox}
      >
        <div style={BgThemeImage}></div>
        <div style={topBox}>
          <div>
            <h1 id="top_heading_todo">TODO LIST</h1>
          </div>
          <div className="parentX">
            <div
              style={Style_box_of_task_and_dropdown}
              className="box-of-task-and-dropdown"
            >
              <div>
                <button className="add-task-Button" onClick={openModal}>
                  <p>Add Task</p>
                </button>
              </div>
              <div>
                <select onChange={dropDownFunction} className="dropDown">
                  <option className="dropdownOption">Completed</option>
                  <option className="dropdownOption">InComplete</option>
                  <option selected className="dropdownOption">
                    ALL
                  </option>
                </select>
              </div>
            </div>
            <div style={overlay_for_Modal}>
              <div className="Modal-Div" style={modalStyle}>
                <p id="Modal-top-Heading">Add-To-DO</p>
                <label style={titleHU} htmlFor="titleinput" id="titleHU">
                  Title
                </label>
                <input
                  onChange={OnChange_input_value}
                  style={titleinput}
                  id="titleinput"
                  value={aagyivalue}
                />
                <br />
                <label style={titleHuAgain} htmlFor="titlehu" id="titleHuAgain">
                  Status
                </label>
                <select style={dropDownModal} className="dropDownModal">
                  <option selected id="selec" className="dropdownOption-Modal">
                    <p className="para">InComplete</p>
                  </option>
                  <option className="dropdownOption-Modal">Completed</option>
                  <option className="dropdownOption-Modal"></option>
                </select>
                <div
                  style={div_covering_Button}
                  className="div-covering-Button"
                >
                  <button
                    onClick={add_task_funcN}
                    className="div-Button-in-Modal"
                  >
                    <p>{add_taskANDupdateTaskkaChange}</p>
                  </button>
                  <button id="cancel-btn-div" className="div-Button-in-Modal">
                    <p id="cancel-btn">Cancel</p>
                  </button>
                </div>
                <div id="closeimg-div">
                  <img
                    id="crossimg"
                    src={close}
                    onClick={closeModal}
                    alt="close"
                  />
                </div>
              </div>
            </div>
            <div style={overlay_for_Modal_Update_Task}>
              <div className="Modal-Div" style={modalStyle_Update_Task}>
                <p id="Modal-top-Heading">Update-To-DO</p>
                <label style={titleHU} htmlFor="titleinput" id="titleHU">
                  Title
                </label>
                <input
                  onChange={OnChange_input_value_Update_Task}
                  style={titleinput}
                  id="titleinput"
                  value={aagyivalueUpdateTask}
                />
                <br />
                <label style={titleHuAgain} htmlFor="titlehu" id="titleHuAgain">
                  Status
                </label>
                <select style={dropDownModal} className="dropDownModal">
                  <option selected id="selec" className="dropdownOption-Modal">
                    <p className="para">InComplete</p>
                  </option>
                  <option className="dropdownOption-Modal">Completed</option>
                  <option className="dropdownOption-Modal"></option>
                </select>
                <div
                  style={div_covering_Button}
                  className="div-covering-Button"
                >
                  <button
                    onClick={Update_task_funcN}
                    className="div-Button-in-Modal"
                  >
                    <p>Update Task</p>
                  </button>
                  <button id="cancel-btn-div" className="div-Button-in-Modal">
                    <p id="cancel-btn">Cancel</p>
                  </button>
                </div>
                <div id="closeimg-div">
                  <img
                    id="crossimg"
                    src={close}
                    onClick={closeModalUpdateTask}
                    alt="close"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="workArea-To-DO">{taskContent}</div>
        </div>
      </div>
    </div>
  );
}

return content;