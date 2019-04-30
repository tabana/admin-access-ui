import adminActions from './adminActions'

function getUsers() {
    let query = `{
        "query": "{
            users{
                id
                companyId
                firstName
                lastName
                company{
                    id
                    name
                }
            }
        }"
    }`
    return adminActions.getUsers(query).then(result => {
        //let data = result.data;
        let users = result.data.data.users;
        return users;
    }, error => {
        console.log(error);
    });
}

export default {
    getUsers
}