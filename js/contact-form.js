document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactform")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(this);

      fetch("https://formsubmit.co/solutionxoffical@gmail.com", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Your message has been sent successfully!");
          document.getElementById("contactform").reset();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to send message. Please try again.");
        });
    });
});
