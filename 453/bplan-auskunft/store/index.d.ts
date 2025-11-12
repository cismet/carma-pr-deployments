declare const _default: import('@reduxjs/toolkit').EnhancedStore<{
    bplaene: import('./slices/bplaene').BplaeneState & import('redux-persist/es/persistReducer').PersistPartial;
}, import('redux').UnknownAction, import('@reduxjs/toolkit').Tuple<[import('redux').StoreEnhancer<{
    dispatch: import('redux-thunk').ThunkDispatch<{
        bplaene: import('./slices/bplaene').BplaeneState & import('redux-persist/es/persistReducer').PersistPartial;
    }, undefined, import('redux').UnknownAction>;
}>, import('redux').StoreEnhancer]>>;
export default _default;
