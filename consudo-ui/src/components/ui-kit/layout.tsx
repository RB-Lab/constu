import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

const animationDuration = 300

/**
 * The topmost element of the application, put all the content inside it
 */
export const Container = styled.main`
    height: 100vh;
    display: flex;
    overflow: hidden;
`

/**
 * Right pane of the application, typically used to display content
 */
export const RightPane = styled.div`
    padding: 1.2em;
    flex-grow: 1;
    overflow-y: auto;
`

interface LeftPaneProps extends StyledComponentProps<'div', any, {}, never> {
    /** controls whether the left pane is visible */
    show: boolean
    /** called when user taps the overlay */
    onClickOut: () => void
}

type Timer = ReturnType<typeof setTimeout>

/**
 * Left pane of the application, typically used to display menus and filters
 * It is hidden on small screens use `show` property to control visibility
 */
export const LeftPane: React.FC<LeftPaneProps> = ({
    onClickOut,
    show,
    ...rest
}) => {
    // remove (display:none) overlay _after_ fade-out ended,
    // insert (display:block) overlay _before_ fade-in started
    const [display, setDisplay] = React.useState(false)
    const [innerShow, setInnerShow] = React.useState(false)
    const timer = React.useRef<Timer | null>(null)
    React.useEffect(() => {
        if (!show) {
            setInnerShow(false)
            timer.current = setTimeout(() => {
                setDisplay(false)
            }, animationDuration)
        } else {
            setDisplay(true)
            setTimeout(() => setInnerShow(true), 0)
            if (timer.current) {
                clearTimeout(timer.current)
            }
        }
    }, [show])

    return (
        <>
            <MobileOverlay
                show={innerShow}
                display={display}
                onClick={onClickOut}
            />
            <LeftPaneDiv show={innerShow} {...rest} />
        </>
    )
}

const LeftPaneDiv = styled.div<{ show?: boolean }>`
    padding: 1.2em 0;
    background-color: #e9e9e9;
    min-width: 15%;
    flex-grow: 0;
    overflow-y: auto;
    transition: all ${animationDuration}ms ease-in-out;
    @media only screen and (max-width: 768px) {
        position: absolute;
        height: 100vh;
        width: 66%;
        left: ${(props) => (props.show ? '0%' : '-100%')};
    }
`
const MobileOverlay = styled.div<{ show?: boolean; display?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all ${animationDuration}ms ease-in-out;
    background-color: #333;
    opacity: ${(props) => (props.show ? 0.7 : 0)};
    display: ${(props) => (props.display ? 'block' : 'none')};
    @media only screen and (min-width: 768px) {
        display: none;
    }
`
