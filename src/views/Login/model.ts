import bff from "../../services/bff";

export interface LoginRequestModel {
    email: string;
    password: string;
}

export interface LoginResponseModel {
    name: string;
    role: string;
    token: string;
}


// class LoginModel {
//     data: LoginResponseModel | null;

//     constructor() {
//         this.data = null;
//     }

//     async postLogin(body: LoginRequestModel) {
//         const res = await bff.post<LoginResponseModel>('/login', { body })
//         this.data = res.data
//     }

//     async postLogout(body: LoginRequestModel) {
//         const res = await bff.post<LoginResponseModel>('/login', { body })
//         this.data = res.data
//     }
// }

export async function postLogin(body: LoginRequestModel) {
    const res = await bff.post<LoginResponseModel>('/login', { body })

    // validador estrutura zod

    // ... gerenciamento do estado, redux, zustand, recoil, *react-query*

    return res
}