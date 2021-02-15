// class and constructor

class bestFriend{
    constructor (name,birthdate,game){
        this.name=name;
        this.game=game;
        this.birthdate=birthdate;
    }
    age(){
        var date = new Date;
        return date.getFullYear()-this.birthdate;
    }
    nameGame(){
        return `${this.name} ${this.game}`;
    }
}
let rohit= new bestFriend('rohit',2001,'cod');//give us a object.
console.log(rohit);
//console.log(rohit.game);
const {game,name,birthdate}=rohit;
console.log(game,birthdate,name);
console.log(rohit.age().date);//undefined cause of bal(undeclaring )

console.log(rohit.age());