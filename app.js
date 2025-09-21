document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("output").innerText = "Stlačil si tlačidlo!";
});

document.getElementById("btn2").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

document.getElementById("btn3").addEventListener("click", () => {
  const now = new Date();
  document.getElementById("time").innerText = "Aktuálny čas: " + now.toLocaleTimeString();
});

document.getElementById("btn4").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  document.getElementById("greeting").innerText =
    name.trim() === "" ? "Prosím, zadaj svoje meno." : `Ahoj, ${name}! Vitaj na mojej stránke.`;
});

document.getElementById("btn5").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

