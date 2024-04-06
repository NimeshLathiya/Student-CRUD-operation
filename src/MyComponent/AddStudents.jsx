import React, { useEffect } from "react";
import { useState } from "react";

export const AddStudents = ({ addStudent, studentToEdit, isEdit }) => {
  const [rollnumber, setrollno] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [Desc, setdesc] = useState("");
  const { roll_number, first_name, last_name, description} = studentToEdit;

  console.log("edit_data__==>>", studentToEdit);
  useEffect(() => {
    if (studentToEdit) {
      setrollno(roll_number);
      setfname(first_name);
      setlname(last_name);
      setdesc(description);
    }
  }, [studentToEdit]);

  const submit = (e) => {
    e.preventDefault();
    if (!rollnumber || !fname || !lname || !Desc) {
      alert("Please Fill all Details");
    } else {
      addStudent(rollnumber, fname, lname, Desc);
      setrollno("");
      setfname("");
      setlname("");
      setdesc("");
    }
    addStudent(rollnumber, fname, lname, Desc);
  };

  return (
    <div>
      <div className="row"></div>
      <div className="container">
        <div className=" col-md-12">
          <div className="alert alert-success mt-3" role="alert">
            Add a Student
          </div>
          <form onSubmit={submit} className=" mb-3  mt-3">
            <div className="mb-3">
              <label htmlFor="rollno" className="rollno">
                Enter Student Roll No
              </label>
              <input
                type="text"
                className="form-control"
                id="rollno"
                value={rollnumber}
                onChange={(e) => {
                  setrollno(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="studenfirsttname" className="studenfirsttname">
                Enter Student First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="studenfirsttname"
                value={fname}
                onChange={(e) => {
                  setfname(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="studentlastname" className="studentlastname">
                Enter Student Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="studentlastname"
                value={lname}
                onChange={(e) => {
                  setlname(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="studentdesc" className="studentdesc">
                Enter Student Description
              </label>
              <input
                type="text"
                className="form-control"
                id="studentdesc"
                value={Desc}
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
              />
            </div>
            <button className="btn btn-success" type="submit">
              {isEdit ? "Update Student" : "Add Student"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
