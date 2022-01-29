import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export const StyledCheckbox = styled.input`
    margin-right: 6px;
`

interface Props
    extends Omit<StyledComponentProps<'input', any, {}, never>, 'type'> {}

/**
 * Checkbox form element
 */
export const Checkbox: React.FC<Props> = (props) => {
    return <StyledCheckbox type="checkbox" {...props} />
}

export const StyledInput = styled.input`
    font-size: 1.2em;
    padding: 4px 8px;
    min-width: 30%;
    border: #a5a5a5 1px solid;
    border-radius: 3px;
`

/**
 * Text input form field
 */
export const TextInput: React.FC<Props> = (props) => {
    return <StyledInput type="text" {...props} />
}
