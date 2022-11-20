///////////////////////////////
// Move, Initial.
///////////////////////////////
console.log(document.querySelectorAll(".social-media__link"))

///////////////////////////////
// Click, Button Contact.
///////////////////////////////
const contact = document.getElementById("buttonContact");

contact.addEventListener("click", () => moveButtonContact());

function moveButtonContact() {
    let Maxheight = document.body.scrollHeight;
    window.scrollTo(0, Maxheight);
}
