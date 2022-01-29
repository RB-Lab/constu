import styled from 'styled-components'

export const Container = styled.main`
    height: 100vh;
    display: flex;
    overflow: hidden;
`
export const LeftPane = styled.div`
    padding: 1.2em 0;
    background-color: #e9e9e9;
    min-width: 15%;
    flex-grow: 0;
    overflow-y: auto;
`
export const RightPane = styled.div`
    padding: 1.2em;
    flex-grow: 1;
    overflow-y: auto;
`
