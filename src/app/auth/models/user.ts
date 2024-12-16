

export interface LoginUser {
    email: string;
    password: string;
}

export interface User {
    id: string;
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    address?: string;
}

