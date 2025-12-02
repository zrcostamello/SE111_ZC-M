

var foodImage = document.getElementById("food")

var foodButton = document.getElementById("foodButton")

function changeImage() {
console.log(foodImage.src)
foodImage.src = "hotdog.webp"
}

foodButton.addEventListener('click', changeImage)

//parent children objects

//gets the first opject thats is a p tag
document.querySelector('p')

//getting first child
console.log(document.getElementById("divContainer").children[0]);

var divPTag = (document.getElementById("divContainer").children[0]);


//giving the p tag in the dive the id of bacon
divPTag.setAttribute('id','bacon')



var test = document.getElementById('bacon')

console.log('bacon')

//creating elemtnts
var h1Element = document.createElement('h1');

console.log(h1Element)
divPTag.appendChild(h1Element)

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