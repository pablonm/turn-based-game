import ActionTypes from '../../enums/ActionTypes';
import Point from '../../interfaces/Point';
import ActionEffect from '../../interfaces/Effects';
import Action from '../../classes/Action';
import Character from '../../classes/Character';
import Game from '../../classes/Game';
declare class Move extends Action {
    code: string;
    name: string;
    type: ActionTypes;
    description: string;
    image: string;
    preview(character: any, map: any): Array<Point>;
    execute(character: Character, game: Game): ActionEffect;
}
export default Move;
