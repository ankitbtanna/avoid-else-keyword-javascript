function canDrink(person) {
    if (person?.age === null) {
        console.log("You ar enot a person.");
        return;
    }
  
    if (person.age < 18) {
        console.log("Nope!");
        return;
    }
    
    if (person.age < 21) {
        console.log("Not in US");
        return;
    }
    
    console.log("Yes!");
    return;
}

canDrink({ age: 22 });

function canDrink(person) {
  if (person?.age === null) {
    console.log("You ar enot a person.");
    return;
  }

    const result = canDrinkResponse(person.age);
    return result;
}

function canDrinkResponse(age) {
    if (person.age < 18) return "Nope!";
    if (person.age < 21) return "Not in US";
    return "Yes!";
}

canDrink({ age: 22 });
