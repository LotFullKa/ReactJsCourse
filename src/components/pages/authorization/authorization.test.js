import {TryAuthorize, UnAuthorize} from '../../../utils/authorization'

const WRONG_USER_NAME = "Non_User"
const WRONG_PASSWORD = ""
const RIGHT_USER_NAME = 'Admin'
const RIGHT_PASSWORD = 'admin'

const NO_USER_WITH_THIS_LOGIN = "No user with this login"
const WRONG_PASSWORD_ANSWER = 'Wrong password'
const ALREADY_SINGED_IN = "Already signed in"

describe('TryAuthorize', 
    () => {

        test('should be defined as a function', () => {
            expect(TryAuthorize).toBeInstanceOf(Function)
        })

        test('should retrun no user with this login', () => {
            expect(TryAuthorize(WRONG_USER_NAME, WRONG_PASSWORD)).toBe(NO_USER_WITH_THIS_LOGIN)
        })

        test('should return wrong password', () => {
            expect(TryAuthorize(RIGHT_USER_NAME, WRONG_PASSWORD)).toBe(WRONG_PASSWORD_ANSWER)
        })

        test('should return true', () => {
            expect(TryAuthorize(RIGHT_USER_NAME, RIGHT_PASSWORD)).toBe(true)
            UnAuthorize(RIGHT_USER_NAME)
        })

        test('should return already authorized', ()=>{
            expect(TryAuthorize(RIGHT_USER_NAME, RIGHT_PASSWORD)).toBe(true)
            UnAuthorize(RIGHT_USER_NAME)
            expect(TryAuthorize(RIGHT_USER_NAME, RIGHT_PASSWORD)).toBe(true)
            expect(TryAuthorize(RIGHT_USER_NAME, RIGHT_PASSWORD)).toBe(ALREADY_SINGED_IN)
        })
    })