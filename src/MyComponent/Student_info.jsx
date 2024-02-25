import React from "react";

export const Students_info = ({ index, student, onDelete, onEdit }) => {
  // console.log(student.fname);
  return (
    <div className="py-3" style={{ marginBottom: "100px" }} key={index}>
      <h1 className=" mt-2 bg-info text-center">
        Student Information of 2023 Excel PTP
      </h1>
      <div>
        <hr />
        <h4>Roll Num = {student.roll_number}</h4>
        <h4>First Name = {student.first_name}</h4>
        <h4>Last Name = {student.last_name}</h4>
        <p>Desc = {student.description}</p>
        <button
          className=" btn-lg btn btn-danger"
          onClick={() => {
            onDelete(student);
          }}
        >
          Delete
        </button>
        <button
          className="btn-lg btn btn-danger ms-3"
          onClick={() => {
            onEdit(student, index);
          }}
        >
          Edit Student
        </button>
        <hr />
      </div>
    </div>
  );
};
