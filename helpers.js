export function handleFormSubmit(evtObj) {
  // Prevents form from automatically submit our info and gives us time to process input our way
  evtObj.preventDefault();

  // TODO - Grab user input on form submit
  let destName = document.getElementById("dest_name").value;
  let locName = document.getElementById("loc_name").value;
  let photoUrl = document.getElementById("photo_url").value;
  let descr = document.getElementById("description").value;

  //   TODO Use user input to create a card
  createCard({ destName, locName, photoUrl, descr });

  // Reset form input fields back to nothing
  evtObj.target.reset();
}

function createCard({ destName, locName, photoUrl, descr }) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";

  card.innerHTML = `
    <img src=${photoUrl} class="card-img-top" alt=${destName} at ${locName}>
    <div class="card-body">
        <h5 class="card-title">${destName}</h5>
        <p class="card-text">${locName}</p>
        <p class="card-text">${descr}</p>
        <div class="action_btns">

        </div>
    </div>
    `;

  // TODO Append card to cards container div
  document.getElementById("cards_container").appendChild(card);

  const editBtn = document.createElement("btn");
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", handleEdit);

  const deleteBtn = document.createElement("btn");
  deleteBtn.innerText = "Remove";
  deleteBtn.addEventListener("click", handleRemove);

  const numsOfCards = document.querySelectorAll(".action_btns").length;

  document
    .querySelectorAll(".action_btns")
    [numsOfCards - 1].appendChild(editBtn);
  document
    .querySelectorAll(".action_btns")
    [numsOfCards - 1].appendChild(deleteBtn);
}

function handleEdit(evt) {
  const editBtn = evt.target;
  const cardBody = editBtn.parentElement.parentElement;
  const [destElt, locElt, descElt] = cardBody.children;

  const imgElt = cardBody.parentElement.children[0];

  const { newDesc, newDest, newLoc, newImgUrl } = getUserInfo();
  updateUserInfo({ newDesc, newDest, newLoc, newImgUrl });
}

function updateUserInfo({ newDesc, newDest, newLoc, newImgUrl }) {
  if (newDest) {
    destElt.innerText = newDest;
  }

  if (newLoc) {
    locElt.innerText = newLoc;
  }

  if (newImgUrl) {
    imgElt.setAttribute("src", newImgUrl);
  }

  if (newDesc) {
    descElt.innerText = newDesc;
  }
}

function getUserInfo() {
  const newDest = prompt("Enter new destination");
  const newLoc = prompt("Enter new location");
  const newDesc = prompt("Enter new description");
  const newImgUrl = prompt("Enter new image url");

  return {
    newDesc,
    newLoc,
    newImgUrl,
    newDest,
  };
}

function handleRemove(evt) {
  const removeBtn = evt.target;
  const card = removeBtn.parentElement.parentElement.parentElement;
  card.remove();
}