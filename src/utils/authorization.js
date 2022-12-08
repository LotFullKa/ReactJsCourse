import users from '../data/users.json'

let signed_users = window.localStorage

users.map(({user}) => signed_users.setItem(user, false))

export function TryAuthorize(name, passw) {
    
    const right_login = users.filter(({user}) => (user == name))
    
    if (right_login.length === 0) {
        return "No user with this login"
    }

    const loged_user = right_login.filter(({password}) => password == passw)

    if (loged_user.length === 0) {
        return "Wrong password"
    }

    
    if (signed_users.getItem(name) === 'true') {
        return "Already signed in"
    }

    signed_users.setItem(name, true)

    return true
}