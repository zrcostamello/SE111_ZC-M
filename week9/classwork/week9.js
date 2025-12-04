//Getting the food image tag
var foodImage = document.getElementById("food")

//Getting the button
var foodButton = document.getElementById("foodButton")

//Creating a method that changes the src of the image
function changeImage() {
    console.log(foodImage.src)
    foodImage.src = "hotdog.png"
}

//If button is clicked, execute changeImage
foodButton.addEventListener('click',changeImage)


//-------------------Parent and Child Objects------------

//Getting the first child

//Gets the first object that is a p tag
document.querySelector('p')


var divPTag = document.getElementById("divContainer").children[0];

//Giving the P tag in the class of bigText
divPTag.setAttribute('class','bigText')


divPTag.setAttribute('style','border:1px solid black')
var test = document.getElementById('bacon')


var h1Element = document.createElement('h1');
h1Element.innerText ="This is a new h1 tag"
console.log(h1Element)
document.getElementById("divContainer").appendChild(h1Element)

//Method to nuke divContainer
function bf()
{
    //Getting the div container
    var aboutToDieDiv = document.getElementById('divContainer');
    //Document remove child
    document.querySelector('body').removeChild(aboutToDieDiv)
}

//Button that Executes order 66
document.getElementById('order66').addEventListener('click',bf)


//get all elements with the names tag

var names = document.querySelectorAll('.names')

for(var i = 0; i < names.length; i++)
{
    console.log(names[i].innerText)
    names[i].style.color = "blanchedalmond"
}


//Query Selection | Advanced

var advanceDiv = document.getElementById("advanced")

//Get Children
console.log(document.querySelector("#advanced h2").innerText)

console.log(document.querySelector("#advanced h2 p").innerText)

console.log(document.querySelector("#advanced #generalgrevious"))