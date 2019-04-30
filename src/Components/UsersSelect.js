import React from 'react'
import Select from 'react-select'
import { useQuery } from 'react-apollo-hooks'

import gql from 'graphql-tag'

const UsersSelect = (props) => {

    const { setCurrentUserId } = props
    const { currentUserId } = props

    const getUsers = gql(`{
        users{
            id
            companyId
            firstName
            lastName
            company{
                id
                name
            }
        }}`)

    const { data, loading, errors } = useQuery(getUsers, { fetchPolicy: 'network-only' })

    if (loading) return 'Loading...'
    if (errors && errors.length > 0) { return 'Load users failed.' }

    const options = data.users.map(user => {
        return { value: user.id, label: user.firstName + ' ' + user.lastname + ' - ' + user.company.name }
    })

    const handleChange = (evt, { action }) => {
        if (action === 'clear') {
            setCurrentUserId(undefined)
        }

        if (action === 'select-option') {
            setCurrentUserId(evt.value)
        }
    }

    return (
        <Select
            isClearable={true}
            value={currentUserId ? options.find(o => o.value === currentUserId) : null}
            onChange={handleChange}
            options={options}
        />)
}

export default UsersSelect
