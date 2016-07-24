var main = function (){ // w obiekcie oddzielamy przecinkami
	var codersProObject = {
		name: "Jan",
		number: 3,
		isReady: true
	}
	console.log(codersProObject);
	console.log('Mam na imię ' + codersProObject.name + ', a mój numer to ' + codersProObject.number);

	codersProObject.name = 'Ania'; // zmieniamy wnętrze pola
	codersProObject.number = 2;

	codersProObject.laptop = 'HP'; // dodajemy nowe pola
	console.log('Mam na imię ' + codersProObject.name + ', a mój numer to ' + codersProObject.number + ' ,a mój laptop to ' + codersProObject.laptop);


	var secondCPObject = {
		name : 'Robert',
		number : 5,
		surname: 'Beinaravicius',
		print: function (){
			console.log(this.name, this.surname);
			return this.name+this.surname;
		},

		getNameAndNumber: function(){ // dodajemy funkcje do secondCPObject i zwraca nam stol Robert, krzeslo 5, ale to tylko na potrzeby tej funkcji,
			// nie zmienia to zmiennych w calym seconCPObject, tylko na potrzeby tej funkcji
			console.log(this.name, this.number);
			return{
				stol: this.name,
				krzeslo: this.number
			}
			console.log(this.name, this.number);
		},


		 addNumber: function(num, mul){
            if(!num) {
                $('#error_message').text('Brak parametru num');
                return 'brak num';
            } else if(!mul) {
                $('#error_message').text('Brak parametru mul');
                return 'brak mul';
            }
            var sum = num + this.number;
            sum = sum*mul;
            return sum;
        }
	}

    console.log(secondCPObject.addNumber());

	secondCPObject.getFiveNames = function(){ // dodawanie funkcji do obiektu secondCPObject
		return this+name+this.name+this.name+this.name+this.name;
	}

	console.log(secondCPObject.print());
	secondCPObject.print();



}


$(document).ready(main);