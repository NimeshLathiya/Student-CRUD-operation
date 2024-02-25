import React from "react";
import { Students_info } from "./Student_info";

export const Students = (props) => {
  // console.log("");
  console.log("props.students__===>>>", props);
  return (
    <div className=" overflow-y-scroll">
      {props.students?.initStudent?.length === 0 ? (
        <div class="alert alert-danger mt-4" role="alert">
          Data Not Found!
        </div>
      ) : (
        props.students?.map((student, index) => {
          return (
            <Students_info
              index={index}
              student={student}
              onDelete={props?.onDelete}
              onEdit={props?.onEdit}
              key={student?.rollnumber}
            />
          );
        })
      )}
    </div>
  );
};
