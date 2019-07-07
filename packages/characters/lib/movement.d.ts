declare const movement: {
    move: ({ game, characterCode }: {
        game: any;
        characterCode: any;
    }) => any;
    isMovementValid: (map: any, character: any) => boolean;
    getNewPosition: (character: any) => any;
    turnLeft: (params: any) => any;
    turnRight: (params: any) => any;
};
export default movement;
