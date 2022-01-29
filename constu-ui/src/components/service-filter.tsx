import React from 'react'
import { Checkbox } from './ui-kit/inputs'
import { List, ListItem } from './ui-kit/list'

interface AppFormCollection extends HTMLFormControlsCollection {
    filter: RadioNodeList
}

interface Props {
    services: string[]
    selected: string[]
    onSelect: (selected: string[]) => void
}
export const ServiceFilter: React.FC<Props> = (props) => {
    const formRef = React.useRef<HTMLFormElement>(null)
    const handleFormChange = React.useCallback(() => {
        if (formRef.current) {
            const form = formRef.current.elements as AppFormCollection
            const selected: string[] = []
            form.filter.forEach((elem) => {
                if (elem instanceof HTMLInputElement && elem.checked) {
                    selected.push(elem.value)
                }
            })
            props.onSelect(selected)
        }
    }, [])

    return (
        <form ref={formRef}>
            <List>
                {props.services
                    .sort((a, b) => a.localeCompare(b))
                    .map((filter) => (
                        <ListItem interactive key={filter}>
                            <Checkbox
                                onChange={handleFormChange}
                                name="filter"
                                value={filter}
                                checked={props.selected.includes(filter)}
                            />
                            <span>{filter}</span>
                        </ListItem>
                    ))}
            </List>
        </form>
    )
}
