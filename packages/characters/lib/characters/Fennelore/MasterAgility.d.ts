import Point from '../../interfaces/Point';
import ActionEffect from '../../interfaces/Effects';
import Passive from '../../classes/Passive';
declare class MasterAgility extends Passive {
    code: string;
    name: string;
    description: string;
    image: string;
    preview(character: any, map: any): Array<Point>;
    execute(character: any, game: any): ActionEffect;
}
declare const _default: MasterAgility;
export default _default;
