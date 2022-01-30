import React from 'react'
import { Checkbox } from './ui-kit/inputs'
import { List, ListItem } from './ui-kit/list'

interface AppFormCollection extends HTMLFormControlsCollection {
    filter: RadioNodeList
}

interface Props {
    /** List of available services */
    services: string[]
    /** services currently selected */
    selected: string[]
    /** called when checkboxes checked/removed */
    onSelect: (selected: string[]) => void
}
/**
 * Checkboxes to select subcontractors based on provided services
 */
export const ServiceFilter: React.FC<Props> = ({ onSelect, ...props }) => {
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
            onSelect(selected)
        }
    }, [onSelect])

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
