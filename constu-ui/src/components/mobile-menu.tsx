import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'
import { ListIcon } from './ui-kit/icons/list'

interface Props extends StyledComponentProps<'button', any, {}, never> {}

/**
 * Hamburger menu button, to use on small screen to show/hide
 * left pane (aka drawer)
 */
export const MobileMenu: React.FC<Props> = (props) => {
    return (
        <Button {...props}>
            <ListIcon />
        </Button>
    )
}

const Button = styled.button`
    background-color: transparent;
    margin-left: 8px;
    height: 50px;
    width: 50px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`
