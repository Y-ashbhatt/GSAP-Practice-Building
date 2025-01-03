function loadSVG() {
  fetch("city.svg")
    .then((response) => {
      return response.text();
    })
    .then((svg) => {
      document.getElementById("bg_city").innerHTML = svg;
      document
        .querySelector("#bg_city svg")
        .setAttribute("preserveAspectRatio", "xMidYMid slice");
    });
}
loadSVG();
