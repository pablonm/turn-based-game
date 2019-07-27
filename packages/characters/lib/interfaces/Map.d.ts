interface MapPadding {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
interface MapSize {
    x: number;
    y: number;
}
interface Map {
    code: string;
    padding: MapPadding;
    size: MapSize;
    tiles: Array<Array<string>>;
}
export default Map;
