
                /*PROPERTY SLIDER*/
// Track current property and card position
let slideIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.property-slides');
    const cards = document.querySelectorAll('.property-slides .card');
    const container = document.querySelector('.property-slides-container');

    // Safety check
    if (!slider || cards.length === 0) return;

    //one card with including gap
    const cardWidth = cards[0].offsetWidth + 20;

    //card visible on screen (how many?)
    const visibleCards = Math.floor(container.offsetWidth / cardWidth);

    // maximum allowed slide index
    const maxIndex = cards.length - visibleCards;

   //Update slide index 
    slideIndex += direction;

    // boundary check
    if (slideIndex < 0) slideIndex = 0;
    if (slideIndex > maxIndex) slideIndex = maxIndex;

    // move slider
    slider.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
}

                        /*REVIEW TOGGLE*/
function toggleReviews() {
    const reviews = document.querySelector(".more-reviews");
    const btn = document.querySelector(".more-btn");

    if (reviews.style.display === "none" || reviews.style.display === "") {
        reviews.style.display = "block";
        btn.innerText = "Show Less";
    } else {
        reviews.style.display = "none";
        btn.innerText = "More Reviews";
    }
}

                        /*JOB APPLY MODEL*/
function openJobForm() {
    document.getElementById("jobModal").style.display = "flex";
}

function closeJobForm() {
    document.getElementById("jobModal").style.display = "none";
}

                        /*HERO AUTO SLIDER*/
let heroIndex = 1;
const totalHeroSlides = 4; 

//auto change hero slide every 5 seconds
setInterval(() => {
    heroIndex++;
    if (heroIndex > totalHeroSlides) {
        heroIndex = 1;
    }
    document.getElementById("h" + heroIndex).checked = true;
}, 5000); 

                /*PROPERTY DETAILS MODAL*/
function openPropertyDetails(button) {
  const card = button.parentElement;

// Get data attributes
  const rooms = card.getAttribute("data-rooms");
  const bathrooms = card.getAttribute("data-bathrooms");
  const kitchen = card.getAttribute("data-kitchen");
  const area = card.getAttribute("data-area");

  //Fill modal content
  const modal = document.getElementById("propertyModal");
  modal.querySelector("p:nth-of-type(1)").innerHTML = `<strong>Rooms:</strong> ${rooms}`;
  modal.querySelector("p:nth-of-type(2)").innerHTML = `<strong>Bathrooms:</strong> ${bathrooms}`;
  modal.querySelector("p:nth-of-type(3)").innerHTML = `<strong>Kitchen:</strong> ${kitchen}`;
  modal.querySelector("p:nth-of-type(4)").innerHTML = `<strong>Area:</strong> ${area}`;

  modal.style.display = "flex";
}

function closePropertyDetails() {
  document.getElementById("propertyModal").style.display = "none";
}


                        /*SEARCH PROPERTY*/
function searchProperty() {
    const input = document.getElementById("location").value.toLowerCase().trim();
    const cards = document.querySelectorAll(".property-slides .card");

    if (input === "") {
        alert("Please enter a city name");
        return;
    }

    let found = false;

    cards.forEach(card => {
        const cityText = card.querySelector("p").innerText.toLowerCase();

        //remove old highlights
        card.classList.remove("highlight");

        if (cityText.includes(input)) {
            card.classList.add("highlight");
            found = true;
        }
    });

    if (found) {
        // Scroll to properties
        document.getElementById("properties").scrollIntoView({
            behavior: "smooth"
        });
    } else {
        // Scroll to contact agent section
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

        // Show popup
        showNotListedPopup();
    }
}

        // remove previous highlight
        card.classList.remove("highlight");

        if (cityText.includes(input)) {
            card.classList.add("highlight");
            found = true;
        };

    // auto scroll to properties section
    if (found) {
        document.getElementById("properties").scrollIntoView({
            behavior: "smooth"
        });
    } else {
        alert("No property found in this city");
    }

                    /*NOT LISTED POPUP*/
    function showNotListedPopup() {
    const oldPopup = document.querySelector(".not-listed-popup");
    if (oldPopup) oldPopup.remove();

    const popup = document.createElement("div");
    popup.className = "not-listed-popup";
    popup.innerText = "Not listed now — Please contact our agent";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 4000);
}




