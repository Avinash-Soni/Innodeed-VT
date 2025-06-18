document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const uploadInput = document.getElementById("upload");
  const permanent = document.getElementById("permanent");
  const current = document.getElementById("current");

  // Show selected file name
  uploadInput.addEventListener("change", () => {
    const file = uploadInput.files[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
  });

  // Autofill current address when double-clicking permanent address
  permanent.addEventListener("dblclick", () => {
    current.value = permanent.value;
    current.focus();
  });

  // Form submit confirmation
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual submission for demo
    if (!form.checkValidity()) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    alert("Form submitted successfully!");
     form.submit();
  });
});
