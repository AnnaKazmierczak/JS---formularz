
var main = function() {
	var userArray= [];

	function userClass(_name, _surname, _age){ // przepis.// to jest konstruktor klasy, zapisujemy go podobnie jak funkcje
		this.name - _name; // tworzymy klasę - szklanka, a obiekt to konkretnie ta szklanka z uszkiem, zielona itd
		this.surname = _surname;
		this.age - _age;
		this.printPerson = function(){
			console.log(this.name, this.surname, this.age);
		};
	}						

	var addToList = function(){
		var tempUserObject = new userClass($('#name').val(), $('#surname').val(), parseInt($('#age').val()));// nowe danie//  new - twirzenie nowej instancji, byty typu userClass

		userArray.push(tempUserObject);

	};

	var printList = function(){
		console.log(userArray);

		for (var i =0; i < userArray.length; i++){
			$('#list_of_users').append('<p>'  + userArray[i].name + '' + userArray[i].surname + '</p><button onclick ="removeUser">REMOVE</button>');
		}

	}

	var removeUser = function(user){
		console.log();
	}

	var addInput= function(){
		userClass.prototype.newValue = '445'; // prototyp to elementy startowe znajdujace sie w uderClass// dla kazdej userClass jedna funkcja wiec
		printList();
	}



	$('#add_to_list').click(addToList); // wywylujemy funkcje
	$('#print_list').click(printList); // wywolujemy funcje
	$('#add_input').click(addInput);
}




$(document).ready(main);
