document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactform");
  if (form) {
    const submitButton = form.querySelector("button[type='submit']");
    const originalButtonText = submitButton.querySelector("span").textContent;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Check if all required fields are filled
      const inputs = form.querySelectorAll(
        "input[required], textarea[required]"
      );
      let isValid = true;
      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
        }
      });

      if (!isValid) {
        // Show warning if form is incomplete
        Swal.fire({
          icon: "warning",
          title: "Incomplete Form",
          text: "Please fill out all required fields.",
          confirmButtonColor: "#f39c12",
          confirmButtonText: "OK",
        });
        return; // Stop submission
      }

      // Disable button and show loading state
      submitButton.disabled = true;
      submitButton.innerHTML =
        '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';

      const formData = new FormData(this);

      fetch("https://formsubmit.co/solutionxoffical@gmail.com", {
        method: "POST",
        body: formData,
        redirect: "manual", // Handle Formsubmit.co redirects
      })
        .then((response) => {
          // Assume success if fetch resolves (email sent)
          return response.text();
        })
        .then((data) => {
          // Show success message only
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. We'll get back to you soon.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          }).then(() => {
            form.reset(); // Reset form after success acknowledgment
          });
        })
        .catch((error) => {
          // Silently fail, no error message
          console.error("Error:", error);
        })
        .finally(() => {
          // Restore button state
          submitButton.disabled = false;
          submitButton.innerHTML = `<span>${originalButtonText}</span>`;
        });
    });
  }
});
