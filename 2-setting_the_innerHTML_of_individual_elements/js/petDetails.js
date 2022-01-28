const pet = {
    type: "pig",
    colour: "#ff0000",
    age: 0,
    isFriendly: true,
    name: "Benny",
};

// 1. Select the pet detail dom element by class
const petDetail = document.querySelector(".pet-detail");

// 3. play with friendly value


// pet.isFriendly === false
// 4.  check pet is friendly or not

// 5. use the colour in a variable
// 2. change the innerHTML of the pet details

const petColour = pet.colour;
const petType = pet.type;
const petAge = pet.age > 0 ? pet.age : "information about age is not available";
const isPetFriendly = pet.isFriendly;

petDetail.innerHTML = `<h4 style="color: ${petColour}">Type of pet : ${pet.type}</h4>
<p>Age: ${petAge}</p>
<p>Friendly: ${pet.isFriendly ? "yes" : "no"}</p>`

