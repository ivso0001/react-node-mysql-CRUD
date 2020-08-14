export interface User {
    userID: number,
    userName: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface UserInput {
    userName: string,
    email: string,
}