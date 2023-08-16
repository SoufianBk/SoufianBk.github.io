//animation gros titre première page
document.addEventListener("DOMContentLoaded", function() {
    var titleContainer = document.getElementById("animated-title");
    var brandTitle = "GreenVibes"; // titre

    function animateTitle() {
        var letters = brandTitle.split(""); // Divise le texte en tableau de lettres
        var delay = 150; // Délai en millisecondes entre chaque lettre

        letters.forEach(function(letter, index) {
            setTimeout(function() {
                titleContainer.textContent += letter; // Ajoute la lettre au titre
            }, delay * index);
        });
    }

    animateTitle();
});

