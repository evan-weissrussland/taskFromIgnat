import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortUp} from "@fortawesome/free-solid-svg-icons/faSortUp";
import {faSortDown} from "@fortawesome/free-solid-svg-icons/faSortDown";

// добавить в проект иконки и импортировать
const downIcon = <FontAwesomeIcon icon={faSortDown} />
const upIcon = <FontAwesomeIcon icon={faSortUp} />
const noneIcon = <>
    <FontAwesomeIcon icon={faSortUp} style={{"opacity": "0.2",}}/>
    <FontAwesomeIcon icon={faSortDown} style={{"opacity": "0.2", 'marginLeft':'-10px'}}/>
</>
export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') {
        return down
    }
    if (sort === down) {
        return up
    }
    if (sort === up) {
        return ''
    }
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{'marginLeft':'5px',}}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={}*/}
            {/*/>*/}
            {icon} {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
