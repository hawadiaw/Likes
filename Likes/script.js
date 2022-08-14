var count = 9;
var likeElement = document.querySelector('#post-1');

function like(){
    count ++;
    likeElement.innerText = count + ' like(s)';
}


var count = 12;
var likeElement = document.querySelector('#post-2');

function like(){
    count ++;
    likeElement.innerText = count + ' like(s)';
}

var count = 9;
var likeElement = document.querySelector('#post-3');

function like(){
    count ++;
    likeElement.innerText = count + ' like(s)';
}


// var likes = [9, 12, 9];
// var spans = [
//     document.querySelector("#post-1"),
//     document.querySelector("#post-2"),
//     document.querySelector("#post-3")
// ];

// function like(id) {
//     likes[id]++;
//     spans[id].innerHTML = likes[id] + " like (s)";
//     console.log(like)
// }