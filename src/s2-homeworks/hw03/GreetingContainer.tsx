import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any     ------ВЫПОЛНЕНО
    addUserCallback: (name: string)=>void // need to fix any   ------ВЫПОЛНЕНО
}

export const pureAddUser = (name: string, setError: (v:string)=>void, setName: (v:string)=>void, addUserCallback: (name: string)=>void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут   ------ВЫПОЛНЕНО
    if (!name || name.trim().length === 0) {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('')
    }
}

export const pureOnBlur = (name: string, setError: (v:string)=>void) => { // если имя пустое - показать ошибку                                         ------ВЫПОЛНЕНО
    if (!name || name.trim().length === 0) {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e:{key:string}, addUser: ()=>void) => { // если нажата кнопка Enter - добавить                                         ------ВЫПОЛНЕНО
    if (e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any    ----ВЫПОЛНЕНО
    const [error, setError] = useState<string>('') // need to fix any   ----ВЫПОЛНЕНО

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any  ----ВЫПОЛНЕНО
        setName(e.currentTarget.value) // need to fix   -----ВЫПОЛНЕНО

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // 0   need to fix   -----ВЫПОЛНЕНО
    const lastUserName = users.length!==0 && users[users.length-1].name // 'some name' need to fix
                                                                           //   -----ВЫПОЛНЕНО

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
