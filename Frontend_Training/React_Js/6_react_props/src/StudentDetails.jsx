function StudentDetails({ getRating }) {

  return (
    <div>
      <h2>Student Details</h2>

      <button onClick={() => getRating(5)}>
        Give 5-Star Rating ⭐⭐⭐⭐⭐
      </button>
    </div>
  );
}

export default StudentDetails;
