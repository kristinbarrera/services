function toggleBenefitsPopup(serviceType) {
    var benefitsPopup = document.getElementById("benefits-popup-" + serviceType);

    if (benefitsPopup) {
        if (benefitsPopup.style.display === "flex") {
            benefitsPopup.style.display = "none";
        } else {
            benefitsPopup.style.display = "flex";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const servicio = document.querySelectorAll(".servicio");
  
    servicio.forEach((servicio, index) => {
      setTimeout(() => {
        servicio.style.opacity = 1;
      }, index * 1000); // Aparece uno por uno cada 500 milisegundos (ajusta según sea necesario)
    });
  });
function toggleDescription(icon) {
    var description = icon.previousElementSibling.querySelector('.descripcion');
    var arrowIcon = icon.querySelector('img');

    if (description.style.display === "none") {
        description.style.display = "block";
        arrowIcon.style.transform = "rotate(180deg)";
    } else {
        description.style.display = "none";
        arrowIcon.style.transform = "rotate(0deg)";
    }
}

