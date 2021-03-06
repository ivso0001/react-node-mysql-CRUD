export interface User {
    userID: number,
    userName: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface UserInputDTO {
    name: string,
    email: string,
}