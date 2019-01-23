'use strict'
//podłączam adres serwera pod zmienną
var url = 'http://api.icndb.com/jokes/random';

//tworzę zdarzenie wywołujące połączenie z serwerem i pobranie danych
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
    
  getJoke();
});

//symuluje kliknięcie w przycisk, aby dowcip pojawiał się zaraz po załadowaniu strony
document.getElementById('get-joke').click();


//tworzę miejsce na stronie na wyświetlenie dowcipu
var paragraph = document.getElementById('joke');


//tworzę funkcję ściągającą dowcipy z serwera
function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
      var response = JSON.parse(xhr.response);
      paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
  }
  