export const DIRECTION_PRESSED = 'DIRECTION_PRESSED';

//0 = None, 1 = Left, 2 = Up, 3 = Right, 4 = Down
export const directionPressed = direction => ({
    type: DIRECTION_PRESSED,
    direction,
})