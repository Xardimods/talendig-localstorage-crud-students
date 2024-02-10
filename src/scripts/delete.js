document.addEventListener("click", (e) => {
  const targetId = e.target.id;
  if (targetId === "delete-button") {
    const value = e.target.value;

    localStorage.removeItem(value);
    window.location.reload();
  }
});
