import React from 'react'
import { Container } from './ui-kit/layout'
import { Center } from './ui-kit/utils'

interface Props {
    status: string | number
    text: string
}
export const ErrorScreen: React.FC<Props> = (props) => {
    return (
        <Container>
            <Center>
                <h2>{props.status}</h2>
                <h3>{props.text}</h3>
            </Center>
        </Container>
    )
}
