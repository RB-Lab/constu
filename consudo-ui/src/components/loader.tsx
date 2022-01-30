import React from 'react'
import { Container } from './ui-kit/layout'
import { Center } from './ui-kit/utils'

/**
 * Loader element that is shown in the middle of the screen
 */
export const Loader: React.FC = () => {
    return (
        <Container>
            <Center>
                <h2>Loading...</h2>
            </Center>
        </Container>
    )
}
