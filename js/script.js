document.addEventListener('DOMContentLoaded', function() {
  
  var lista = document.getElementById('links');

  var itens = lista.getElementsByClassName('itemLista');

  for (var i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', function() {
      var url = this.getAttribute('data-url');

      window.open(url, '_blank');
    });
  }
});



