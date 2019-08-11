import Point from '../interfaces/Point';
import ActionEffect from '../interfaces/Effects';
import ActionTypes from '../enums/ActionTypes';
declare abstract class Action {
    abstract code: string;
    abstract name: string;
    abstract type: ActionTypes;
    abstract description: string;
    abstract image: string;
    abstract preview(character: any, map: any): Array<Point>;
    abstract execute(character: any, game: any): ActionEffect;
    setCode(code: any): Action;
    setName(name: any): Action;
    setType(type: any): Action;
    setDescription(description: any): Action;
    setImage(image: any): Action;
}
export default Action;
