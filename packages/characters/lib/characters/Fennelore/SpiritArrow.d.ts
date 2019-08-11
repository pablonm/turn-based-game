import ActionTypes from '../../enums/ActionTypes';
import Point from '../../interfaces/Point';
import ActionEffect from '../../interfaces/Effects';
import Map from '../../interfaces/Map';
import Action from '../../classes/Action';
import Character from '../../classes/Character';
import Game from '../../classes/Game';
declare class Attack1 extends Action {
    code: string;
    name: string;
    type: ActionTypes;
    description: string;
    image: string;
    preview(character: Character, map: Map): Array<Point>;
    execute(character: Character, game: Game): ActionEffect;
}
declare const _default: Attack1;
export default _default;
