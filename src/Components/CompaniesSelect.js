import React from 'react'
import Select from 'react-select'
import { useQuery } from 'react-apollo-hooks'

import gql from 'graphql-tag'

const CompaniesSelect = (props) => {

    const { setCurrentCompanyId } = props
    const { currentCompanyId } = props

    const getCompanies = gql(`{
        companies{
            id
            name
        }}`)

    const { data, loading, errors } = useQuery(getCompanies, { fetchPolicy: 'network-only' })

    if (loading) return 'Loading...'
    if (errors && errors.length > 0) { return 'Load companies failed.' }

    const options = data.companies.map(company => {
        return { value: company.id, label: company.name }
    })

    const handleChange = (selectedOption, { action }) => {
        if (action === 'clear') {
            setCurrentCompanyId(undefined)
        }
        
        if (action === 'select-option') {
            setCurrentCompanyId(selectedOption.value)
        }
    }

    return (
        <Select
            isClearable={true}
            value={ currentCompanyId ? options.find(o => o.value === currentCompanyId) : null }
            onChange={handleChange}
            options={options}
        />)
}

export default CompaniesSelect
