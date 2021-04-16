function canDrink(person) {
    if (person?.age === null) {
        if (person.age < 18) {
            console.log('Nope!');
        } else if (person.age < 21) {
            console.log('Not in US');
        } else {
            console.log('Yes!')
        }
    } else {
        console.log('You ar enot a person.');
    }
}

canDrink({ age: 22 });