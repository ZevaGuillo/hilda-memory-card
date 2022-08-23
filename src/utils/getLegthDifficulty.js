const getDifficulty = (difficulty) => {
    
    let LengthCards = 0;

    switch (difficulty) {
        case 'easy':
            LengthCards = 3;
        break;
        case 'medium':
            LengthCards = 4;
        break;
        case 'hard':
            LengthCards = 5;
        break;
        default:
            break;
    }


    return LengthCards;

}

export { getDifficulty };