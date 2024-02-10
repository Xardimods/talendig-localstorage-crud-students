const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const dataStuents = {
    id: generateUniqueId(),
    student_first_name: document.getElementById("firstname").value,
    student_last_name: document.getElementById("lastname").value,
    student_id: document.getElementById("id").value,
    student_course: document.getElementById("course").value,
    student_note: document.getElementById("note").value,
  };

  const uniqueId = generateUniqueId();
  const JSONStudentsData = JSON.stringify(dataStuents);

  localStorage.setItem(uniqueId, JSONStudentsData);
});

function generateUniqueId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
