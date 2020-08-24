export interface User {
    username: string
    avatar?: string
    firstName: string
    lastName?: string
    verified: boolean
    male?: boolean
    dob?: string
    followers: number
    following: number
    posts: number
}

// Temporary helper method
export function getDummyUser() {
    return {
        username: 'johndoe',
        avatar: '../../images/placeholder_2.png',
        firstName: 'John',
        lastName: 'Doe',
        verified: false,
        male: true,
        followers: 34,
        following: 942313,
        posts: 1
    }
}