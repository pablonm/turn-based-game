import Character from "../classes/Character";
import Game from "../classes/Game";
import Point from "../interfaces/Point";
import ActionEffect from "../interfaces/Effects";
declare const applyDamageOnArea: (game: Game, character: Character, area: Point[], damage: Number) => ActionEffect;
export default applyDamageOnArea;
