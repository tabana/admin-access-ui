import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

const UsersTable = (props) => {

    const { setCurrentUserId } = props
    const { currentUserId } = props

    const getUsers = gql(`{
        users{
            id
            companyId
            firstName
            lastName
            phone
            email
            company{
                id
                name
            }
        }}`)

    const columns = [
        {
            text: 'Company',
            dataField: 'companyname',
            filter: textFilter(),
            sort: true
        },
        {
            text: 'ID',
            dataField: 'id',
            filter: textFilter(),
            sort: true
        },
        {
            text: 'First Name',
            dataField: 'firstname',
            filter: textFilter(),
            sort: true
        },
        {
            text: 'Last Name',
            dataField: 'lastname',
            filter: textFilter(),
            sort: true
        },
        {
            text: 'Phone',
            dataField: 'phone',
            filter: textFilter(),
            sort: true
        },
        {
            text: 'Email',
            dataField: 'email',
            filter: textFilter(),
            sort: true
        }]

    const { data, loading, errors } = useQuery(getUsers, { fetchPolicy: 'network-only' })

    if (loading) { return 'Loading...' }
    if (errors && errors.length > 0) { return 'Load users failed.' }

    const rows =
        data.users.map(user => {
            return {
                id: user.id,
                firstname: user.firstName,
                lastname: user.lastName,
                companyname: user.company.name,
                phone: user.phone,
                email: user.email
            }
        })

    const handleSelect = (row, isSelect) => {
        if (isSelect) {
            setCurrentUserId(row.id)
            return false
        }
    }

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: handleSelect,
        selected: [currentUserId]
    }

    return (
        <BootstrapTable
            columns={columns}
            data={rows}
            keyField={'id'}
            selectRow={selectRow}
            filter={filterFactory()}
            getDirectiveInfoFromField />
    )
}

export default UsersTable
