import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any ВЫПОЛНЕНО
    switch (action.type) {
        case 'sort': { // by name
            const sortedUpState = [...state].sort((a, b) => a.name.localeCompare(b.name))
            const sortedDownState = [...state].sort((a, b) => b.name.localeCompare(a.name))
            return action.payload === 'up' ? sortedUpState : sortedDownState // need to fix ВЫПОЛНЕНО
        }
        case 'check': {
            // const filtredState = state.filter(t => t.age >= action.payload)
            // return filtredState.sort((a, b) => a.age - b.age) // need to fix ВЫПОЛНЕНО
            return state.filter(t => t.age >= action.payload)
        }
        default:
            return state
    }
}
