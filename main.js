var pocetna = document.getElementById('current');
var slike = document.getElementsByClassName('thumb');
for (var i = 0; i <slike.length; i++){
    slike[i].addEventListener('click', display); // addeventlistener sadrzi 2 parametra event i funkciju koju treba napraviti
}
function display(){
    var sl = this.getAttribute('src'); //uzimamo source od slike na koju kliknemo
    pocetna.setAttribute('src',sl);// postavljamo taj sorce na glavnu ili pocetnu sliku
}