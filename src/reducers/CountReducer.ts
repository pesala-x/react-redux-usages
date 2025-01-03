const initialState = {
    count: 0,
    isVisible: true,
};

export const CountReducer = (
    state = initialState,
    action: { type: string, payload?: any }
) => {
    switch (action.type) {
        case 'ADD_COUNT':
            return { ...state, count: state.count + 1 };
        case 'DELETE_COUNT':
            return { ...state, count: state.count - 1 };
        case 'TOGGLE':
            return { ...state, isVisible: !state.isVisible };
        default:
            return state;
    }
};
