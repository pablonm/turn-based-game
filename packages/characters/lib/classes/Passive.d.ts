import Point from '../interfaces/Point';
import ActionEffect from '../interfaces/Effects';
import ActionTypes from '../enums/ActionTypes';
import Action from './Action';
declare abstract class Passive extends Action {
    type: ActionTypes;
    abstract code: string;
    abstract name: string;
    abstract description: string;
    abstract image: string;
    preview(character: any, map: any): Array<Point>;
    execute(character: any, game: any): ActionEffect;
}
export default Passive;
