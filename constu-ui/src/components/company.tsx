import styled from 'styled-components'
import { ListItem } from './ui-kit/list'
import { Tag, Tags } from './ui-kit/tags'
import { Flex } from './ui-kit/utils'

export const Logo = styled.img`
    width: 100px;
    margin-right: 20px;
    margin-top: 20px;
`

interface CompanyProps {
    email: string
    logoUrl: string
    name: string
    city: string
    description: string
    services: string[]
}

const CompanyContainer = styled(ListItem)`
    margin-bottom: 1.2em;
`
const Header = styled.h3`
    margin-bottom: 0;
`
const Description = styled.div`
    margin: 0 0 0.5em 0;
`
const Email = styled.a`
    text-decoration: underline;
    color: #5f5f5f;
`

export const Company: React.FC<CompanyProps> = (props) => {
    return (
        <CompanyContainer>
            <Flex>
                <div>
                    <Logo src={props.logoUrl} />
                </div>
                <div>
                    <Header>{props.name}</Header>
                    <Description>
                        <strong>{props.city}</strong>
                        <br />
                        {props.description}
                        <br />
                        <Email href={`mailto:${props.email}`}>
                            {props.email}
                        </Email>
                    </Description>
                    <Tags>
                        {props.services.map((s) => (
                            <Tag key={s}>{s}</Tag>
                        ))}
                    </Tags>
                </div>
            </Flex>
        </CompanyContainer>
    )
}
