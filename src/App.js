// import logo from "./logo.svg";
import "./App.css";
import { Header } from "./MyComponent/Header";
import { Students } from "./MyComponent/Students";
import { Footer } from "./MyComponent/Footer";
import { useEffect, useState } from "react";
import { AddStudents } from "./MyComponent/AddStudents";

function App() {
  // let initStudent;
  // if (localStorage.getItem("students") === null) {
  //   initStudent = [];
  // } else {
  //   initStudent = JSON.parse(localStorage.getItem("students"));
  // }

  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState({});
  const [isEdit, setIsEdit] = useState();

  useEffect(() => {
    // did mount
    initialization();
  }, []);

  const initialization = async () => {
    let initStudent = await localStorage.getItem("students");

    if (initStudent !== null) {
      setStudents(JSON.parse(initStudent));
    } else {
      setStudents([]);
    }
  };

  const onDelete = (student) => {
    console.log("Student Delete", student);
    let restedStudents = students.filter((e) => {
      return e !== student;
    });
    setDataToLocalStorage("students", JSON.stringify(restedStudents));
  };

  const onEdit = (student, index) => {
    student["id"] = index;
    console.log("Edit KeyWord students", student, index);
    setStudentToEdit(student);
    setIsEdit(true);
  };

  const addStudent = (rollnumber, fname, lname, Desc) => {
    const mystudents = {
      roll_number: rollnumber,
      first_name: fname,
      last_name: lname,
      description: Desc,
    };
    if (!isEdit) {
      //Add
      console.log("I am add the Students", rollnumber, fname, lname, Desc);
      // setStudents([students, mystudents]);
      let allStudents = [...students, mystudents];
      // console.log("students________________-==========>>", allStudents);
      // localStorage.setItem("students", JSON.stringify(allStudents));
      setDataToLocalStorage("students", JSON.stringify(allStudents));
    } else {
      //Edit
      console.log("students________________-==========>>", students);
      let newStudentsData = students.map((item, i) => {
        // console.log("newStudent --------=>>", newStudentsData);
        if (i == studentToEdit.id) {
          item = mystudents;
        } else {
          item = item;
        }
        return item;
      });
      // localStorage.setItem("students", JSON.stringify(newStudentsData));
      setDataToLocalStorage("students", JSON.stringify(newStudentsData));
      setIsEdit(false);
    }
  };

  const setDataToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
    initialization();
  };

  return (
    <>
      <Header title="Student Crud Operation" />
      <AddStudents
        addStudent={addStudent}
        studentToEdit={studentToEdit}
        isEdit={isEdit}
      />
      <div className="container">
        <Students students={students} onDelete={onDelete} onEdit={onEdit} />
      </div>
      <Footer />
    </>
  );
}

export default App;
