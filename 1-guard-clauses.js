function canDrink(person) {
    if (person?.age !== null) {
        if (person.age < 18) {
            console.log('Nope!');
            return;
        } else if (person.age < 21) {
            console.log('Not in US');
            return;
        } else {
            console.log('Yes!');
            return;
        }
    } else {
        console.log('You ar enot a person.');
        return;
    }
}

canDrink({ age: 22 });
