import ActionTypes from '../../enums/ActionTypes';
import Map from '../../interfaces/Map';
import Point from '../../interfaces/Point';
import ActionEffect from '../../interfaces/Effects';
import Game from '../../classes/Game';
import Action from '../../classes/Action';
import Character from '../../classes/Character';
declare class Attack1 extends Action {
    code: string;
    name: string;
    type: ActionTypes;
    description: string;
    image: string;
    preview(character: Character, map: Map): Array<Point>;
    execute(character: Character, game: Game): ActionEffect;
}
export default Attack1;
