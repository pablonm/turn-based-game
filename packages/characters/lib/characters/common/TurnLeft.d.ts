import ActionTypes from '../../enums/ActionTypes';
import Point from '../../interfaces/Point';
import ActionEffect from '../../interfaces/Effects';
import Action from '../../classes/Action';
declare class TurnLeft extends Action {
    code: string;
    name: string;
    type: ActionTypes;
    description: string;
    image: string;
    preview(character: any, map: any): Array<Point>;
    execute(character: any, game: any): ActionEffect;
}
export default TurnLeft;
