import React from 'react';

import { useQuery, useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'

import CompanyForm from './CompanyForm'

const CompanyDetail = (props) => {

    const { currentCompanyId } = props

    let initialCompany = {
        name: '',
        address: '',
        account: '',
        admin: '',
        startDate: '',
        end: ''
    }

    const setInitialCompany = (updatedCompany) => {
        initialCompany = { ...updatedCompany }
    }

    const getCompany = gql(`
        query($currentCompanyId: Int) {
            company(id: $currentCompanyId){
                id
                name
                address
                account
                admin
                startDate
                end
            }
		}`)

    const { data, loading, errors } = useQuery(
        getCompany,
        { variables: { currentCompanyId: currentCompanyId, fetchPolicy: 'network-only' } }
    )

    if (loading) return 'Loading...'
    if (errors && errors.length > 0) { return 'Load companies failed.' }

    if (data && data.company && data.company.id && data.company.id > 0) {
        initialCompany = {
            name: data.company.name,
            address: data.company.address,
            account: data.company.account,
            admin: data.company.admin,
            startDate: data.company.startDate,
            end: data.company.end
        }
    }

    const setCompany = gql(`
        mutation addCompany($company: CompanyInput!) {
            addCompany(company: $company) {
                id
                name
                address
                account
                admin
                startDate
                end
            }
        }`)

    const saveCompany = useMutation(
        setCompany,
        {
            variables: {
                company: initialCompany
            }
        }
    )

    return (
        <CompanyForm initialCompany={initialCompany} setInitialCompany={setInitialCompany} />
    )
}

export default CompanyDetail
