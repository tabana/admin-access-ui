import React, { useState } from 'react';

import Input from './Controlled/Input'
import Button from './Controlled/Button'

const CompanyForm = (props) => {

    const { initialCompany } = props
    const { setInitialCompany } = props

    const [currentCompany, setCurrentCompany] = useState({...initialCompany})

    const handleSubmit = (evt) => {
        evt.preventDefault()

        setInitialCompany(evt)
    }

    const handleClear = (evt) => {
        evt.preventDefault()

        setCurrentCompany(initialCompany)
    }

    const handleInputNameChanged = (evt) => {
        currentCompany.name = evt.target.value
    }

    const handleInputAddressChanged = (evt) => {
        currentCompany.address = evt.target.value
    }

    const handleInputAccountChanged = (evt) => {
        currentCompany.address = evt.target.value
    }

    const handleInputAdminChanged = (evt) => {
        currentCompany.admin = evt.target.value
    }

    const handleInputStartDateChanged = (evt) => {
        currentCompany.startdate = evt.target.value
    }

    const handleInputEndChanged = (evt) => {
        currentCompany.end = evt.target.value
    }

    return (
        <form>
            <Input title={'Name:'} placeholder={'Name'} onChange={handleInputNameChanged} value={currentCompany.name} />
            <Input title={'Address:'} placeholder={'Address'} onChange={handleInputAddressChanged} value={currentCompany.address} />
            <Input title={'Account:'} placeholder={'Account'} onChange={handleInputAccountChanged} value={currentCompany.account} />
            <Input title={'Admin:'} placeholder={'Admin'} onChange={handleInputAdminChanged} value={currentCompany.admin} />
            <Input title={'Start Date:'} placeholder={'Start Date'} onChange={handleInputStartDateChanged} value={currentCompany.startdate} />
            <Input title={'End:'} placeholder={'End'} onChange={handleInputEndChanged} value={currentCompany.end} />
            <Button title='Add' type='btn btn-primary' style={{ margin: '10px 10px 10px 10px' }} onClick={handleSubmit} />
            <Button title='Clear' type='btn btn-primary' style={{ margin: '10px 10px 10px 10px' }} onClick={handleClear} />
        </form>
    )
}

export default CompanyForm
