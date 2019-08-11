import Directions from '../enums/Directions';
import Point from '../interfaces/Point';
import Map from '../interfaces/Map';
declare const nextPointInDirection: (point: Point, direction: Directions, map: Map) => Point;
export default nextPointInDirection;
