import Game from './classes/Game';
declare const characters: {
    charactersInfo: Map<any, any>;
    actions: Map<any, any>;
    maps: Map<any, any>;
    Game: typeof Game;
    deserializer: (js: any) => Game;
};
export default characters;
