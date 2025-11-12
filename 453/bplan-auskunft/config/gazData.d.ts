import { ENDPOINT } from '../../../../../libraries/commons/resources/src/index.ts';
export namespace gazDataConfig {
    export { crs };
    export { prefix };
    export { sources };
}
declare const crs: "25832";
declare const prefix: "GazDataForHochwasserkarteByCismet";
declare const sources: {
    topic: ENDPOINT;
    url: string;
    crs: string;
}[];
export {};
