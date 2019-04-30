import React, { useState } from 'react';

import { useQuery, useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'

import Input from './Controlled/Input'
import Button from './Controlled/Button'
import Radio from './Controlled/Radio'

const UserForm = (props) => {

    const { currentUserId } = props

    const [
        record = {
            id: undefined,
            firstName: undefined,
            lastName: undefined,
            companyName: undefined,
            email: undefined,
            phone: undefined,
            admin: 'No'
       },
       setRecord] = useState()

    const getUser = gql(`
        query($currentUserId: Int!) {
            user(id: $currentUserId){
                id
                firstName
                lastName
                email
                phone
                admin
                company{
                    id
                    name
                }
            }
		}`)

    const { data, loading, errors } = useQuery(
        getUser,
        { variables: { currentUserId: currentUserId }, fetchPolicy: 'network-only' }
    )

    if (loading) return 'Loading...'
    if (errors && errors.length > 0) { return 'Load users failed.' }

    if (data && data.user) {
        setRecord({
            id: data.user.id,
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            companyName: data.user.company.name,
            email: data.user.email,
            phone: data.user.phone,
            admin: data.user.admin === 1 ? 'Yes' : 'No'
        })
    }

    const setUser = gql(`
        mutation addUser($user: UserInput!) {
            addUser(user: $user) {
                id
                firstName
                lastName
                email
                phone
                admin
            }
        }`)

    const saveUser = useMutation(
        setUser,
        {
            update: (proxy, { data: { addUser } }) => {
                try {
                    record.id = addUser.id
                } catch (err) {
                    console.error(err)
                }
            },
            variables: {
                user: {
                    firstName: record.firstName,
                    lastName: record.lastName,
                    companyName: record.companyName,
                    email: record.email,
                    phone: record.phone,
                    admin: record.admin === 'Yes' ? 1 : 0
                }
            }
        }
    )

    const handleSubmit = (evt) => {
        evt.preventDefault()

        saveUser()
    }

    const handleClear = (evt) => {
        evt.preventDefault()

        setRecord({
            id: undefined,
            firstName: undefined,
            lastName: undefined,
            companyName: undefined,
            email: undefined,
            phone: undefined,
            admin: 'No'
        })
    }

    const handleOptionAdminChanged = (evt) => {
        record.admin = evt.target.value
    }

    const handleInputFirstNameChanged = (evt) => {
        record.firstName = evt.target.value
    }

    const handleInputLastNameChanged = (evt) => {
        record.lastName = evt.target.value
    }

    const handleInputEmailChanged = (evt) => {
        record.email = evt.target.value
    }

    const handleInputPhoneChanged = (evt) => {
        record.phone = evt.target.value
    }

    return (
        <form onSubmit={handleSubmit}>
            <Radio title={'Administrator:'} options={['Yes', 'No']} onChange={handleOptionAdminChanged} selectedOption={record.admin} />
            <Input title={'First Name:'} placeholder={'First Name'} onChange={handleInputFirstNameChanged} value={record.firstName} />
            <Input title={'Last Name:'} placeholder={'Last Name'} onChange={handleInputLastNameChanged} value={record.lastName} />
            <Input title={'Email:'} placeholder={'Email'} onChange={handleInputEmailChanged} value={record.email} />
            <Input title={'Phone:'} placeholder={'Phone'} onChange={handleInputPhoneChanged} value={record.phone} />
            <Button title='Add' type='btn btn-primary' style={{ margin: '10px 10px 10px 10px' }} onClick={handleSubmit} />
            <Button title='Clear' type='btn btn-primary' style={{ margin: '10px 10px 10px 10px' }} onClick={handleClear} />
        </form>
    )
}

export default UserForm
