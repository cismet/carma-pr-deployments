import { Slice } from '@reduxjs/toolkit';
export interface BplaeneState {
    data: any;
    loading: boolean;
}
declare const slice: Slice<BplaeneState>;
export default slice;
export declare const loadBPlaene: (finishedHandler?: () => void) => (dispatch: any) => Promise<void>;
export declare function getPlanFeatureByTitle(_title: string, done: (hit: any) => void): (dispatch: any) => void;
export declare function getPlanFeatures({ boundingBox, point, done, }: {
    boundingBox?: any;
    point?: any;
    done?: any;
}): (dispatch: any, getState: any) => void;
export declare const setData: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/${string}`> | import('@reduxjs/toolkit').ActionCreatorWithPayload<any, `${string}/${string}`> | import('@reduxjs/toolkit').ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, never> | import('@reduxjs/toolkit').ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, any> | import('@reduxjs/toolkit').ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, never> | import('@reduxjs/toolkit').ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, any>, setLoading: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/${string}`> | import('@reduxjs/toolkit').ActionCreatorWithPayload<any, `${string}/${string}`> | import('@reduxjs/toolkit').ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, never> | import('@reduxjs/toolkit').ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, any> | import('@reduxjs/toolkit').ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, never> | import('@reduxjs/toolkit').ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, any>;
export declare const getBPLaene: (state: any) => any;
export declare const getLoading: (state: any) => any;
