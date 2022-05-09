import Api from "../api/"


const loginUser = async (data) => {
    const res = await Api.authLogin(data)
    const resData = await res.json()
    // access_token, refresh_token, user
    if(!resData.access_token) {
        throw new Error(resData)
    }
    localStorage.setItem('access_token', resData.access_token)
    localStorage.setItem('refresh_token', resData.refresh_token)
    localStorage.setItem('user', JSON.stringify(resData.user))
    return resData.user
}

const registerUser = async (data) => {
    const res = await Api.authRegister(data)
    const resData = await res.json()
    console(resData)
}

export const authService = {
    loginUser,
    registerUser
}