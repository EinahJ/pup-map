function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function highlightArea(areaId) {
  // Remove any existing highlight classes from map areas
  var areas = document.getElementsByTagName("area");
  for (var i = 0; i < areas.length; i++) {
    areas[i].classList.remove("highlight");
  }

  // Add highlight class to the selected area
  var area = document.querySelector("area." + areaId);
  area.classList.add("highlight");
}






