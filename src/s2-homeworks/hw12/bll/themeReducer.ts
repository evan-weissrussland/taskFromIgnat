const initState = {
    themeId: 1,
}

type InitialStateType = typeof initState
type ActionChangeThemeIdType = ReturnType<typeof changeThemeId>

export const themeReducer = (state:InitialStateType = initState, action: ActionChangeThemeIdType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
            case 'SET_THEME_ID':
                return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any
