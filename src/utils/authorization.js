import users from '../data/users.json'

const NO_USER_WITH_THIS_LOGIN = "No user with this login"
const WRONG_PASSWORD = 'Wrong password'
const ALREADY_SINGED_IN = "Already signed in"

let signed_users = window.localStorage

users.map(({user}) => signed_users.setItem(user, false))

export function TryAuthorize(name, passw) {
    
    const right_login = users.filter(({user}) => (user == name))
    
    if (right_login.length === 0) {
        return NO_USER_WITH_THIS_LOGIN
    }

    const loged_user = right_login.filter(({password}) => password == passw)

    if (loged_user.length === 0) {
        return WRONG_PASSWORD
    }

    
    if (signed_users.getItem(name) === 'true') {
        return ALREADY_SINGED_IN
    }

    signed_users.setItem(name, true)

    return true
}

export function UnAuthorize(name) {
    signed_users.setItem(name, false)
}