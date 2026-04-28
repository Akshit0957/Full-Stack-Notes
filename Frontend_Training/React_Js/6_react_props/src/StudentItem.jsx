function StudentItem(props) {

  return (
    <div>
      <h2>Student Item</h2>

      <button
        onClick={() => props.sendFeedback("Child says Hello Parent!")}
      >
        Send Message To Parent
      </button>
    </div>
  );
}

export default StudentItem;


// import StudentDetails from "./StudentDetails";

// function StudentItem({ getRating }) {
//   return (
//     <div>
//       <StudentDetails getRating={getRating} />
//     </div>
//   );
// }

// export default StudentItem;
