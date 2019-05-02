import React, { useState } from 'react';

import Input from './Controlled/Input'
import Button from './Controlled/Button'

const CompanyForm = (props) => {

    const { initialCompany } = props
    const { setInitialCompany } = props

    const [id, setId] = useState(initialCompany.id)
    const [name, setName] = useState(initialCompany.name)
    const [address, setAddress] = useState(initialCompany.address)
    const [account, setAccount] = useState(initialCompany.account)
    const [admin, setAdmin] = useState(initialCompany.admin)
    const [startDate, setStartDate] = useState(initialCompany.startDate)
    const [end, setEnd] = useState(initialCompany.end)
    const [addEnabled, setAddEnabled] = useState(true)
    const [updateEnabled, setUpdateEnabled] = useState(true)
    const [cancelEnabled, setCancelEnabled] = useState(true)

    const handleAdd = (evt) => {
        evt.preventDefault()

        setInitialCompany({
            id: id,
            name: name,
            address: address,
            account: account,
            admin: admin,
            startDate: startDate,
            end: end
        })
    }

    const handleUpdate = (evt) => {
        evt.preventDefault()

        setInitialCompany({
            name: name,
            address: address,
            account: account,
            admin: admin,
            startDate: startDate,
            end: end
        })
    }

    const handleCancel = (evt) => {
        evt.preventDefault()

        setName(initialCompany.name)
        setAddress(initialCompany.address)
        setAccount(initialCompany.account)
        setAdmin(initialCompany.admin)
        setStartDate(initialCompany.startDate)
        setEnd(initialCompany.end)
    }

    return (
        <form>
            <Input title={'Name:'} placeholder={'Name'} onChange={e => setName(e.target.value)} value={name} />
            <Input title={'Address:'} placeholder={'Address'} onChange={e => setAddress(e.target.value)} value={address} />
            <Input title={'Account:'} placeholder={'Account'} onChange={e => setAccount(e.target.value)} value={account} />
            <Input title={'Admin:'} placeholder={'Admin'} onChange={e => setAdmin(e.target.value)} value={admin} />
            <Input title={'Start Date:'} placeholder={'Start Date'} onChange={e => setStartDate(e.target.value)} value={startDate} />
            <Input title={'End:'} placeholder={'End'} onChange={e => setEnd(e.target.value)} value={end} />
            <Button title={'Add New'} type='btn btn-primary' style={{ margin: '10px 10px 10px 10px' }} onClick={handleAdd} disabled={!addEnabled} />
            <Button title={'Update'} type='btn btn-primary' style={{ margin: '10px 10px 10px 10px' }} onClick={handleUpdate} disabled={!updateEnabled} />
            <Button title={'Cancel'} type='btn btn-primary' style={{ margin: '10px 10px 10px 10px' }} onClick={handleCancel} disabled={!cancelEnabled} />
        </form>
    )
}

export default CompanyForm
