import React from 'react'

import sessionService from '../Service/sessionService'

const Authorize = (props) => {

    sessionService.getAppSession(props.sessionId).then((result) => {
        props.setSession(result)
    })

    return (
        <h3>getting session...</h3>
    )
}

export default Authorize
