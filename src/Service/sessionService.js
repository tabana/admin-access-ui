import sessionActions from './sessionActions'

function extractSessionId(props) {
    const { match: { params }} = props
    return params.sessionId
}

function getAppSession(sessionId) {
    if (!(sessionId === undefined || sessionId.length === 0)) {
        return sessionActions.getSession(sessionId).then(result => {
            let session = {};
            if (!(result === undefined || result.length === 0)) {
                result.data.map(s => {
                    session[s.key] = s.value
                })
            }

            return session
        }, error => {
            console.log(error)
        });
    }
}

export default {
    extractSessionId,
    getAppSession
} 