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

            return state.filter(t => t.age >= action.payload) // need to fix ВЫПОЛНЕНО
        }
        default:
            return state
    }
}
