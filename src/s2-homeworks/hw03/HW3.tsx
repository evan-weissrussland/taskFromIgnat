import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - описать тип UserType                                        -------ВЫПОЛНЕНО
* 2 - указать нужный тип в useState с users                      -------ВЫПОЛНЕНО
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами  -------ВЫПОЛНЕНО
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов                   -------ВЫПОЛНЕНО
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error  ------ВЫПОЛНЕНО
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback   ------ВЫПОЛНЕНО
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! НЕ ВЫПОЛНЕНО!!!!!!!
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)                                                          -----ВЫПОЛНЕНО
* 9 - в файле Greeting.tsx дописать типизацию пропсов                     -----ВЫПОЛНЕНО
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id?: string // need to fix any   ------ВЫПОЛНЕНО
    name?: string // need to fix any   ------ВЫПОЛНЕНО
}

export const pureAddUserCallback = (name: string, setUsers: (array:UserType[])=>void, users: UserType[]) => { // need to fix any                ------ВЫПОЛНЕНО
    const user = { // need to fix   ------ВЫПОЛНЕНО
        _id: v1(), name:name
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any -----ВЫПОЛНЕНО

    const addUserCallback = (name: string) => { // need to fix any      -----ВЫПОЛНЕНО
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
