


var main = function () {
    var page = 1, numberOfElementsPerPage = 5, numberOfPages = 1;

    var userArray = [], id = 0;
    function userClass(_name, _surname, _age){  //to jest konstruktor klasy!!!
        this.name = _name;
        this.surname = _surname;
        this.age = _age;
        this.id = id++;
    }
    userClass.prototype.printPerson = function (){
        console.log(this.name, this.surname, this.age);
    };
    var addToList = function (){
        var tempUserObject = new userClass($('#name').val(), $('#surname').val(), parseInt($('#age').val()));
        userArray.push(tempUserObject);
        numberOfPages = Math.ceil(userArray.length/numberOfElementsPerPage);
        printList();
    };
    var printList = function (){

        $('#list_of_users').empty();

        userArray.forEach(function(user, i){ //idex danegu usera w tablicy userArray 
            if(i>=(page-1)*numberOfElementsPerPage && i<page*numberOfElementsPerPage){

                var button = $('<button class="remove" id="' + user.id + '">REMOVE</button>').click(function(){ // stworzony przycisk  i przypisuje mu event click
                    console.log(user); // po kliknieciu w console i usuwamy // ta funksja zostaje tylko w pamieci tego przycisku
                    removeUser(user);
                })

                var upButton = $('<button class="up" id="' + user.id + '">UP</button>').click(function(){
                    console.log();
                    moveUp(user);

                })

                var downButton = $('<button class="down" id="' + user.id + '">DOWN</button>').click(function(){
                    console.log();
                    moveDown(user);

                })

                var firstPage = $('<button class="firstPage" id="' + user.id + '">FIRST PAGE</button>').click(function(){
                    console.log();
                    firstPage(user);

                })

                var lastPage = $('<button class="lastPage" id="' + user.id + '">LAST PAGE</button>').click(function(){
                    console.log();
                    lastPage(user);
                })




                $('#list_of_users')
                    .append('<p>' + user.name + ' ' + user.surname + '</p>') // do niego imie i nazwisko w pragrfai ei przycisk, funkcje lancuchowe
                    .append(button)
                    .append(upButton)
                    .append(downButton);
                

            }

        })
        console.log(numberOfPages);
        $('#page').text(page);
        $('#number_of_pages').text(numberOfPages);
    }

    var removeUser = function (user) {   //wywyolanie removeUser z parametrenm user (wszystko na .klick nastepnie wykonuje metode splice, 
                                 //indexOf metoda przypisana do tabloic itd i zwraca pozsce w arrayu - podaje index usera w tej tablicy)
        userArray.splice(userArray.indexOf(user), 1);
        numberOfPages = Math.ceil(userArray.length/numberOfElementsPerPage); //ustala 
        if(page>numberOfPages){
            page=numberOfPages;
        }
        if(page==0){
            page=1;
            numberOfPages=1;
        }
        printList();

    };

    var moveUp = function(user){ 
        var index = userArray.indexOf(user)
        if(index>0){ 
            var zawierany = userArray[index]
            userArray[index] = userArray[index+1]
            userArray[index+1] = zawierany;
            printList();
        }

    }


    var moveDown = function(user){
        var index = userArray.indexOf(user)
        if(index<userArray.length-1){
            var zawierany = userArray[index]
            userArray[index] = userArray[index-1]
            userArray[index-1] = zawierany;
            printList();
        }
    }

    var firstPage = function(user){ 
        var index = userArray.indexOf(user)
        if(page>1){ 
            page=1;
            printList();
        }

    }

    var lastPage = function(user){ 
        var index = userArray.indexOf(user)
        if(page>1){ 
           
            printList();
        }

    }

    var addInput = function () {
        userClass.prototype.newValue = '445';
        printList();
    }
    $('#next_page').click(function(){
        if(page<numberOfPages){
            page++;
            printList();

        }
    });

    $('#previous_page').click(function(){
        if(page>1){
            page--;
            printList();
        }

    });

    $('#first_page').click(function(){
        page=1;
        printList();
    });

    $('#last_page').click(function(){
        page=numberOfPages;
        printList();
    });

    $('#add_to_list').click(addToList);
    $('#print_list').click(printList);
    $('#add_input').click(addInput);
}
$(document).ready(main);