function directionPressed(state, action) {
    console.log('in reducer');
    if (!action.direction) {
        console.error('no direction detected in directionPressed.js reducer')
        return state;
    }
    if (action.direction < 0 || action.direction > 4) {
        console.log('invalid direction detected', action.direction);
        return state;
    }
    if (state.direction != action.direction) {
        console.log('new direction detected', action.direction);
        const newDirection = action.direction
        return {
            ...state,
            newDirection,
        };
    } else {
        console.log('same direction detected', action.direction);
        return state;
    }
}

export default directionPressed;