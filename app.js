function random() {
    return Math.floor(Math.random()*50);
}
document.addEventListener("keypress",function(event){
    var randomNumber = random();
    alert(randomNumber)
})