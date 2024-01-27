let slideIndex = 0; // Initialisation de l'index de la diapositive
let slides = document.getElementsByClassName("mySlides"); // Récupération des éléments de diapositive par leur classe
let timer; // Timer pour le diaporama

// Fonction pour afficher les diapositives
function showSlides() {
        // Masquer toutes les diapositives
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
        // Passage à la diapositive suivante
    slideIndex++;
        // Revenir à la première diapositive si on atteint la fin
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Afficher la diapositive actuelle
    slides[slideIndex - 1].style.display = "block";
}
// Fonction pour changer de diapositive avec un décalage donné

function plusSlides(n) {
        // Arrêter le timer pour éviter les changements automatiques pendant la navigation manuelle

    clearTimeout(timer);     
    // Afficher la diapositive avec le décalage donné

    showSlides(slideIndex += n);
}
// Écouter l'événement "click" sur le bouton précédent et passer à la diapositive précédente

document.querySelector(".prev").addEventListener("click", function () {
    plusSlides(-1);
});
// Écouter l'événement "click" sur le bouton suivant et passer à la diapositive suivante

document.querySelector(".next").addEventListener("click", function () {
    plusSlides(1);
});
// Fonction pour démarrer le diaporama automatiquement

function startSlideshow() {
    showSlides();
    timer = setTimeout(startSlideshow, 4000);     // Configurer le timer pour changer de diapositive toutes les 2000 millisecondes (2 secondes)

}

// Configurer le timer pour changer de diapositive toutes les 2000 millisecondes (2 secondes)
startSlideshow();
