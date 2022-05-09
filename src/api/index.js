const API_URL = process.env.REACT_APP_API_URL;
const TOKEN = localStorage.getItem('access_token');

/*
Api.get('/users/1')
http://localhost:5000/api/v1/users/1

*/

class Api {
    static async get(url) {
        return fetch(`${API_URL}${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        })
    }
    static async post(url, data) {
        return fetch(`${API_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify(data)
        })
    }
    static async put(url, data) {
        return fetch(`${API_URL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify(data)
        })
    }
    static async delete(url) {
        return fetch(`${API_URL}${url}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        })
    }

    // authentication
    static async authLogin(data) {
        return fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    static async authRegister(data) {
        return fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    static async authLogout() {
        return fetch(`${API_URL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        })
    }
}

export default Api