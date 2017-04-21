// constructor function which can take in this series of values:
// name, profession, gender, age, strength, hitpoints
function character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.gender = gender;
    this.strength = strength;
    this.hitpoints = hitpoints;
    // each character also has the following functions
    // printStats function, which logs all of its properties
    this.printStats = function () {
        console.log('Name: ' + this.name + "\n=======================\nProfession: " + this.profession + "\n=======================\nAge: " + this.age + "" +
            "\n=======================\nGender: " + this.gender + "\n=======================\nStrength: " + this.strength + "\n=======================\nHitpoints: " + this.hitpoints + "\n+++++++++++++++++++++++\n");
    };
    // isAlive function based on whether its  "hitpoints" are less then zero...
    // return false if character has died and true if it is alive
    this.isAlive = function () {
        if (this.hitpoints > 0) {
            console.log(this.name + " Is Alive");
            return true;
        } else {
            console.log(this.name + " Is Dead");
            return false;
        }
    };
    // attack function takes in a second character and decreases their "hitpoints" by this character's strength
    // levelUp function increases age by 1, strength by 5 and hitpoints by 25
    this.attack = function (char2) {
        char2.hitpoints -= this.strength;
    };
    this.levelUp = function () {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    };



}
    // once the constructor is created 
    // create two unique characters using the "character" constructor var warrior = new character("Tom","Cat", "Boy", 29, 500, 900);
    var rouge = new character("Jerry", "Mouse", "Boy", 65, 400, 9700);
    var warrior = new character("Tom", "Cat", "Boy", 70, 300, 7800);
    // printStats for the each character





    //
    warrior.printStats();
    console.log("\n=========================\n");
    rouge.printStats();

    // have the first character attack the 2nd
    // printStats for the 2nd, and log if it is alive
    warrior.attack(rouge);
    rouge.printStats();
    rouge.isAlive();
    // call levelUp function for the 1st character & printStats
    warrior.levelUp();
    warrior.printStats();



    // BONUS:
    // create a while loop that continues to run so long as both characters' "hitpoints" are above zero
    // each character will attack the other until one dies
    // printStats each time to show changes
function battle(char1, char2) {
    while (char1.isAlive() === true && char2.isAlive() === true) {
        // characters deal damage to one another
        char1.attack(char2);
        char2.attack(char1);
        // prints stats to show changes
        char1.printStats();
        char2.printStats();
    }
}

battle(rouge, warrior);
