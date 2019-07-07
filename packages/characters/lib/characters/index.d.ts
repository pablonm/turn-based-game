declare const charactersInfo: {
    sample: {
        code: string;
        player: any;
        position: {
            x: any;
            y: any;
            direction: string;
        };
        name: string;
        health: number;
        skills: import("../interfaces/SkillInfo").default[];
    };
};
export default charactersInfo;
