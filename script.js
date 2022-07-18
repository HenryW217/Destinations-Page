// Get the user input data;
function cardInfo (event) {
    event.preventDefault();

    const inputName = event.target.elements["name"].value;
    const inputLocation = event.target.elements["location"].value;
    const inputPhoto= event.target.elements["photo"].value;
    const inputDescription = event.target.elements["description"].value;
    
    document.getElementById("destinations_container").appendChild(inputName, inputLocation, inputPhoto, inputDescription);
}
// Add event listener;
document.getElementById("userForm").addEventListener("submit", cardInfo);

// Create card;
function createCard (name, location, photo, description){
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.style.width = "17rem";
    card.style.height = "fit-content";
    card.style.margin = "20px;";

    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");    
    img.setAttribute("src", photo);
    img.setAttribute("alt", "a picture of " + name);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
  
    let cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);
  
    let cardSubtitle = document.createElement("h6");
    cardSubtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);





}
