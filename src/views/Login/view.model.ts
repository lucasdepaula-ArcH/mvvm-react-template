import { ChangeEvent, useState } from "react"
import { postLogin } from "./model"

export function useLoginViewModel() {
    const [email, setEmail] = useState('')

    function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }

    async function handleRequestLogin() {
        console.log('email', email)
        
        await postLogin({ email, password: '123' })
    }

    return { email, handleChangeEmail, handleRequestLogin }
}