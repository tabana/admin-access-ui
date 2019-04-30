import React from 'react'
import Select from 'react-select'
import { useQuery } from 'react-apollo-hooks'

import gql from 'graphql-tag'

const FeaturesSelect = (props) => {

    const { currentUserId } = props
    const { setCurrentFeatureId } = props
    const { currentFeatureId } = props

    const getFeatures = gql(`query{
        features{
            id
            name
            users{
                id
                firstName
                lastName
            }
        }}`)

    const { data, loading, errors } = useQuery(
        getFeatures,
        { fetchPolicy: 'network-only' }
    )

    if (loading) return 'Loading...'
    if (errors && errors.length > 0) { return 'Load features failed.' }

    const options = data.features.filter(f => f.users.some(u => !currentUserId || u.id === currentUserId)).map(feature => {
        return { value: feature.id, label: feature.name }
    })

    const handleChange = (evt, { action }) => {
        if (action === 'clear') {
            setCurrentFeatureId(undefined)
        }

        if (action === 'select-option') {
            setCurrentFeatureId(evt.value)
        }
    }

    return (
        <Select
            isClearable={true}
            value={ currentFeatureId ? options.find(o => o.value === currentFeatureId) : null }
            onChange={handleChange}
            options={options}
        />)
}

export default FeaturesSelect
