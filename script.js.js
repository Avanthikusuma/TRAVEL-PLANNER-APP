function addTrip() {
  const destination = document.getElementById("destination").value;
  const tripList = document.getElementById("tripList");

  if(destination.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = "✈️ Trip to " + destination;
    tripList.appendChild(li);

    document.getElementById("destination").value = "";
  }
}
