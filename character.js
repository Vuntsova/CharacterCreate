// constructor function which can take in this series of values:
// name, profession, gender, age, strength, hitpoints

function character(name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;

    // printStats function, which logs all of its properties
    this. printStats = function() {
        console.log("Name: "+this.name+"\n=============================\nProfession: "+this.profession+"" +
            "\n=============================\nGender: "+this.gender+"\n=============================\nAge: "+this.age+
            "\n=============================\nStrength: "+this.strength+"\n=============================\nHitpoints: "+
                this.hitpoints+"\n.........................\n");
    };
    // isAlive function based on whether its  "hitpoints" are less then zero...
    // return false if character has died and true if it is alive
    this.isAlive = function () {
        if (this.hitpoints > 0){
            console.log(this.name+" Is Alive");
            return true;
        }else{
            console.log(this.name+" Is Dead");
            return false;
        }
    };
    // attack function takes in a second character and decreases their "hitpoints" by this character's strength
    this.attack = function (char2) {
        char2.hitpoints -= this.strength;
    };
    // levelUp function increases age by 1, strength by 5 and hitpoints by 25
    this.levelUp = function () {
        this.age += 1;
        this.strength +=5;
        this.hitpoints +=25;
    };
}
    // once the constructor is created
    // create two unique characters using the "character" constructor
    var tom = new character("Tom","Cat", "Boy", 29, 500, 900);
    var jerry = new character("Jerry", "Mouse", "Boy", 25, 320, 900);

    // have the first character attack the 2nd
    // printStats for the 2nd, and log if it is alive
    tom.printStats();
    jerry.printStats();

    tom.attack(jerry);
    jerry.printStats();
    jerry.isAlive();

    // BONUS:
    // create a while loop that continues to run so long as both characters' "hitpoints" are above zero
    // each character will attack the other until one dies
    // printStats each time to show changes
    var battle = function(x,y) {
        while (x.isAlive() === true && y.isAlive() ===true){
            x.attack(y);
            y.attack(x);
            x.printStats();
            y.printStats();
        }
    }

    battle(tom,jerry);
