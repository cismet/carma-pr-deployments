export default convertItemToFeature;
declare function convertItemToFeature(itemIn: any, poiColors: any): Promise<{
    id: any;
    text: any;
    type: string;
    featuretype: string;
    selected: boolean;
    geometry: any;
    crs: {
        type: string;
        properties: {
            name: string;
        };
    };
    properties: any;
}>;
