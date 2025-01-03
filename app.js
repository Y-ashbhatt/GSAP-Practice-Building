function loadSVG() {
  fetch("city.svg")
    .then((response) => {
      return response.text();
    })
    .then((svg) => {
      document.getElementById("bg_city").innerHTML = svg;
    });
}
loadSVG();
