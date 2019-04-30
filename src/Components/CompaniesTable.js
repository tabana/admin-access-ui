import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

const CompaniesTable = (props) => {

    const { setCurrentCompanyId } = props
    const { currentCompanyId } = props

    const getCompanies = gql(`{
        companies{
            id
            name
            address
            account
            admin
            startDate
            end
            plan
            branding
            tradearea
            prospect
            targetout
            licenses
            bbm
            aeroplan
            consumer
            canadaPost
            tokens
            ttl
            whiteLabel
            ilist
            scene
            iview3
            epsilon
            infoGroup
            iresponse
            repext
        }}`)

    const columns = [
        {
            headerStyle: { width: '40px', textAlign: 'center' },
            text: 'ID',
            dataField: 'id',
            filter: textFilter(),
            sort: true
        },
        {
            headerStyle: { width: '140px', textAlign: 'center' },
            text: 'Name',
            dataField: 'name',
            filter: textFilter(),
            sort: true
        },
        {
            headerStyle: { width: '160px', textAlign: 'center' },
            text: 'Address',
            dataField: 'address',
            filter: textFilter(),
            sort: true
        },
        {
            headerStyle: { width: '160px', textAlign: 'center' },
            text: 'Account',
            dataField: 'account',
            filter: textFilter(),
            sort: true
        },
        {
            headerStyle: { width: '150px', textAlign: 'center' },
            text: 'Admin',
            dataField: 'admin',
            filter: textFilter(),
            sort: true
        },
        {
            headerStyle: { width: '170px', textAlign: 'center' },
            text: 'Start Date',
            dataField: 'startDate',
            filter: textFilter(),
            sort: true
        },
        {
            headerStyle: { width: '170px', textAlign: 'center' },
            text: 'End',
            dataField: 'end',
            filter: textFilter(),
            sort: true
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Plan',
            dataField: 'plan'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Branding',
            dataField: 'branding'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Tradearea',
            dataField: 'tradearea'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Prospect',
            dataField: 'prospect'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Targetout',
            dataField: 'targetout'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Licenses',
            dataField: 'licenses'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'BBM',
            dataField: 'bbm'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Aeroplan',
            dataField: 'aeroplan'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Consumer',
            dataField: 'consumer'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Canada Post',
            dataField: 'canadapost'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Tokens',
            dataField: 'tokens'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'TTL',
            dataField: 'ttl'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'whiteLabel',
            dataField: 'whitelabel'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'iList',
            dataField: 'ilist'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Scene',
            dataField: 'scene'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'iView3',
            dataField: 'iview3'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Epsilon',
            dataField: 'epsilon'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'InfoGroup',
            dataField: 'infogroup'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'iResponse',
            dataField: 'iresponse'
        },
        {
            headerStyle: { width: '100px', textAlign: 'center' },
            text: 'Repext',
            dataField: 'repext'
        }]

    const { data, loading, errors } = useQuery(getCompanies, { fetchPolicy: 'network-only' })

    if (loading) { return 'Loading...' }
    if (errors && errors.length > 0) { return 'Load users failed.' }

    const rows =
        data.companies.map(company => {
            return {
                id: company.id,
                name: company.name,
                address: company.address,
                account: company.account,
                admin: company.admin,
                startDate: company.startDate,
                end: company.end,
                plan: company.plan,
                branding: company.branding,
                tradearea: company.tradearea,
                prospect: company.prospect,
                targetout: company.targetout,
                licenses: company.licenses,
                bbm: company.bbm,
                aeroplan: company.aeroplan,
                consumer: company.consumer,
                canadaPost: company.canadaPost,
                tokens: company.tokens,
                ttl: company.ttl,
                whiteLabel: company.whiteLabel,
                ilist: company.iList,
                scene: company.scene,
                iview3: company.iView3,
                epsilon: company.epsilon,
                infoGroup: company.infoGroup,
                iresponse: company.iResponse,
                repext: company.repext
            }
        })

    const handleSelect = (row, isSelect) => {
        if (isSelect) {
            setCurrentCompanyId(row.id)
            return false
        }
    }

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        onSelect: handleSelect,
        selected: [currentCompanyId]
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

export default CompaniesTable
