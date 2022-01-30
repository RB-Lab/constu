import styled, { StyledComponentProps } from 'styled-components'

/**
 * A general purpose list, used with `ListItem`
 */
export const List = styled.ul`
    margin: 0;
    padding: 0;
`

interface Props extends StyledComponentProps<'li', any, {}, never> {
    /** 
     * Makes list item highlighted on hover and clickable with its whole area
     * used when list item has a checkbox or a radiobutton
     */
    interactive?: boolean
}

/**
 * A list item for `List` component
 */
export const ListItem: React.FC<Props> = ({
    interactive,
    children,
    ...rest
}) => {
    if (interactive) {
        return (
            <InteractiveLi {...rest}>
                <label>{children}</label>
            </InteractiveLi>
        )
    }
    return <Li {...rest}>{children}</Li>
}

const Li = styled.li`
    list-style: none;
`
const InteractiveLi = styled(Li)`
    &:hover {
        background-color: #d3dddd;
    }
    label {
        display: flex;
        align-items: center;
        width: 100%;
        cursor: pointer;
        padding: 5px 10px;
    }
`

