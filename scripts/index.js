const popup = document.querySelector(".popup");
const editButton = document.querySelector(".button__edit");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__form-input-name");
const jobInput = document.querySelector(".popup__form-input-profession");
const closeButton = document.querySelector(".popup__button-close");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");

function openPopup() {
  popup.classList.add("popup-opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
function closePopup() {
  popup.classList.remove("popup-opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup();
}
editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleProfileFormSubmit);
