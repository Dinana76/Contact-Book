ocument.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${name}</strong><br/>
    ${email}<br/>
    ${phone}
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  document.getElementById("contactList").appendChild(li);

  document.getElementById("contactForm").reset();
});