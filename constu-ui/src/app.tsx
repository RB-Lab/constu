import React from 'react'
import { Company } from './components/company'
import { ErrorScreen } from './components/error'
import { Loader } from './components/loader'
import { ServiceFilter } from './components/service-filter'
import { TextInput } from './components/ui-kit/inputs'
import { Container, LeftPane, RightPane } from './components/ui-kit/layout'
import { List } from './components/ui-kit/list'

interface Company {
    name: string
    city: string
    logo: string
    description: string
    email: string
    services: string[]
}

interface ErrorType {
    status: number
    message: string
}

// TODO get API address from environment
const host = 'http://localhost:3030'
export function App() {
    const [data, setData] = React.useState<Company[] | undefined>()
    const [error, setError] = React.useState<ErrorType | string | null>(null)
    const [filters, setFilters] = React.useState<string[]>([])
    const [selectedFilters, setSelectedFilters] = React.useState<string[]>([])
    const [searchString, setSearchString] = React.useState<string>('')
    React.useEffect(() => {
        fetch(`${host}/api/companies`)
            .then(async (res) => {
                if (res.status !== 200) {
                    let message = res.statusText
                    try {
                        message = (await res.json()).message
                    } finally {
                        throw new HttpError(res.status, message)
                    }
                }
                return res
            })
            .then((res) => res.json())
            .then((res: Company[]) => {
                setData(res)
                const services = res.flatMap((company) => company.services)
                const uniqueServices = Array.from(new Set(services))
                setFilters(uniqueServices)
            })
            .catch((e) => {
                if (e.status) {
                    setError({ status: e.status, message: e.message })
                } else {
                    setError(String(e))
                }
            })
    }, [])

    if (!data) {
        if (error !== null) {
            if (typeof error === 'string') {
                return <ErrorScreen status="Oops" text={error} />
            }
            return <ErrorScreen status={error.status} text={error.message} />
        }
        return <Loader />
    }

    const companies = data.filter((company) => {
        const hasSelectedService = selectedFilters.length
            ? selectedFilters.every((filter) =>
                  company.services.includes(filter)
              )
            : true
        return (
            hasSelectedService &&
            new RegExp(searchString, 'ig').test(company.name)
        )
    })
    return (
        <Container>
            <LeftPane>
                <ServiceFilter
                    services={filters}
                    selected={selectedFilters}
                    onSelect={setSelectedFilters}
                />
            </LeftPane>
            <RightPane>
                <TextInput
                    name="company-name"
                    value={searchString}
                    placeholder="Company Name"
                    onChange={(e) => {
                        setSearchString(e.target.value)
                    }}
                />
                <List>
                    {companies.map((company) => (
                        <Company
                            key={company.email}
                            name={company.name}
                            city={company.city}
                            description={company.description}
                            email={company.email}
                            services={company.services}
                            logoUrl={`${host}/img/logo/${company.logo}`}
                        />
                    ))}
                </List>
            </RightPane>
        </Container>
    )
}

class HttpError extends Error {
    status: number
    constructor(status: number, message: string) {
        super(message)
        this.status = status
    }
}
