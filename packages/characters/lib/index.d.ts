declare const characters: {
    movement: {
        move: ({ game, characterCode }: {
            game: any;
            characterCode: any;
        }) => any;
        isMovementValid: (map: any, character: any) => boolean;
        getNewPosition: (character: any) => any;
        turnLeft: (params: any) => any;
        turnRight: (params: any) => any;
    };
    charactersInfo: Map<any, any>;
    skillPreviews: Map<any, any>;
    skillEffects: Map<any, any>;
};
export default characters;
