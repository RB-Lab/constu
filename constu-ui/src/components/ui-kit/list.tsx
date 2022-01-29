import styled, { StyledComponentProps } from 'styled-components'

export const List = styled.ul`
    margin: 0;
    padding: 0;
`
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

interface Props extends StyledComponentProps<'li', any, {}, never> {
    interactive?: boolean
}
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
