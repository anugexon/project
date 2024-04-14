document.addEventListener("DOMContentLoaded", function() {
    // Get the login form element
    const loginForm = document.getElementById("loginForm");

    // Add event listener for form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        const formData = new FormData(loginForm);
        const ageGroup = formData.get("ageGroup");

        // Check the selected age group
        if (ageGroup === "above70") {
            // Add class to body for dark mode
            document.body.classList.add("dark-mode");

            // Add class to adjust font size
            document.body.classList.add("large-font");
        } 
        else {
            // Remove class for dark mode
            document.body.classList.remove("dark-mode");

            // Remove class for large font size
            document.body.classList.remove("large-font");
        }

        // Redirect the user to the patient-home.html page
        window.location.href = "patient-home.html";
    });
});


// Function to handle form submission for booking appointment
function handleAppointmentBooking(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const formData = new FormData(appointmentForm);
    const date = formData.get("date");
    const time = formData.get("time");
    const doctor = formData.get("doctor");

    // Log the form data to the console (you can send it to your server for processing)
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Doctor:", doctor);

    // Add your code here to process the appointment booking (e.g., send the data to your server)

    // Clear the form after submission (optional)
    appointmentForm.reset();
}

// Add event listener for form submission
const appointmentForm = document.getElementById("appointmentForm");
appointmentForm.addEventListener("submit", handleAppointmentBooking);

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for all buttons with class "book-appointment-btn"
    document.querySelectorAll('.book-appointment-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Redirect to the appointment page
            window.location.href = "patient-home.html";
        });
    });
});

const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');

function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== '') {
    appendMessage('You', message);
    // Here you can send the message to the server or process it locally
    // Example: sendToServer(message);
    messageInput.value = '';
  }
}

function receiveMessage(sender, message) {
  appendMessage(sender, message);
}

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatMessages.appendChild(messageElement);
}

