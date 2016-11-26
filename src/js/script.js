'use strict';

document.addEventListener('DOMContentLoaded', inputListener);
var container = document.getElementById('container');
var list;

constructList();

function constructList() {
    var request = new XMLHttpRequest();
    request.open('GET', './list.json');

    request.addEventListener('load', function() {
        list = JSON.parse(request.responseText);

        for (var prop in list) {
            addItemToPage(constructItem(list[prop], prop));
        }

    });

    request.send();
}

function constructItem(item, id) {
    var div = document.createElement('div');
    div.classList.add('item');
    div.id = id;
    var p = document.createElement('p');
    p.innerText = item;
    var button = document.createElement('button');
    button.addEventListener('click', removeItem);
    button.innerText = 'X';

    div.appendChild(p);
    div.appendChild(button);

    return div;
}

function addItemToPage(item) {
    container.appendChild(item);
}

function removeItem(event) {

    var id = event.target.parentElement.id;
    removeItemFromList(id);
    container.removeChild(event.target.parentElement);

}

function removeItemFromList(id) {
    delete list[id];

    sendListToServer();
}

function sendListToServer() {
    var request = new XMLHttpRequest();
    request.open('POST', './list.json');
    request.setRequestHeader('LIST', JSON.stringify(list));

    request.send();
}

function addItem(event) {
	if (event.which == 13 || event.keyCode == 13){
		do {
			var id = randomNumber();
		} while (list.hasOwnProperty(id));

		addItemToPage(constructItem(event.target.value, id));
		list[id] = event.target.value;
		sendListToServer();
		event.target.value = '';
	}
}

function inputListener(){
	document.getElementById('addItem').addEventListener('keydown', addItem);
}

function randomNumber(){
	return Math.floor(Math.random() * (1000));
}