function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default StudentList;


//

// import StudentItem from "./StudentItem";

// function StudentList({ getRating }) {
//   return (
//     <div>
//       <StudentItem getRating={getRating} />
//     </div>
//   );
// }

// export default StudentList;
