


let name = document.getElementById("name");
let location = document.getElementById("location");
let photo = document.getElementById("photo");
let description = document.getElementById("description");

function createCard (name, location, photo, description) {
    document.createElement("div").setAttribute("class", "card");
    document.createElement("div").innerHTML = `
    <img src = "${photo} class = "card_photo" alt = "a picutre of destination" />
    `
    document.createElement("p").innerHTML = "${name}"
    document.createElement("p").innerHTML = "${location}"
    document.createElement("p").innerHTML = "${description}"
}

document.getElementById("sub_btn").addEventListener("submit", createCard());
