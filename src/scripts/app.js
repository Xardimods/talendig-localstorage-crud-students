// const form = document.getElementById("form");
const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const elementsArray = [
    document.getElementById("firstname"),
    document.getElementById("lastname"),
    document.getElementById("id"),
    document.getElementById("course"),
    document.getElementById("note"),
  ];

  const isEmptyField = elementsArray.some((element) => !element.value);

  if (isEmptyField) {
    return alert(`¡Hay campos que no están llenos!`);
  } else {
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
    window.location.href = "/";
  }
});

function generateUniqueId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
