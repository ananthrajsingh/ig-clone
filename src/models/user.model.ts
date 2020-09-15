export interface UserModel {
    id: number
    username: string
    avatar?: string
    firstName: string
    lastName?: string
    verified: boolean
    gender: GENDER
}



export enum GENDER {
    MALE = 1,
    FEMALE,
    OTHER
}

