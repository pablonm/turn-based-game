import ActionTypes from '../../enums/ActionTypes';
import Point from '../../interfaces/Point';
import ActionEffect from '../../interfaces/Effects';
import Action from '../../classes/Action';
declare class Attack1 extends Action {
    code: string;
    name: string;
    type: ActionTypes;
    description: string;
    image: string;
    preview(character: any, map: any): Array<Point>;
    execute(character: any, game: any): ActionEffect;
}
declare const _default: Attack1;
export default _default;
