// Dynamic Project List
const projects = [
  { title: "Weather App", description: "A responsive web app that fetches weather data using APIs." },
  { title: "To-Do List", description: "A simple yet powerful task manager using JavaScript." },
  { title: "Portfolio Website", description: "A personal website to showcase your work and resume." }
];

const projectContainer = document.getElementById("project-list");
projects.forEach(proj => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = <h3>${proj.title}</h3><p>${proj.description}</p>;
  projectContainer.appendChild(div);
});

// Contact form handler
function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();
  const thankYouMsg = document.getElementById("thankYouMessage");

  if (name && email && msg) {
    thankYouMsg.innerText = Thanks for filling the form, ${name}!;
    thankYouMsg.style.display = "block";
    thankYouMsg.style.color = "green";

    // Reset form
    document.getElementById("contactForm").reset();
  } else {
    thankYouMsg.innerText = "Please fill out all fields.";
    thankYouMsg.style.display = "block";
    thankYouMsg.style.color = "red";
  }
}
