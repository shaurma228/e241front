'use client'

import React from "react"
import { Button, Fieldset, Input, Checkbox } from "@react95/core"
import axios from "axios"
import { useRouter } from "next/navigation"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function RegisterForm() {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent) => {
        if (password !== confirmPassword) {
            console.log('Passwords do not match')
            return
        }
        event.preventDefault()
        try {
            const response = await axios.post(`${apiUrl}/api/auth/register`, { login, password })
            const { token, refreshToken } = response.data
            localStorage.setItem('token', token)
            localStorage.setItem('refreshToken', refreshToken)
            console.log('Registration successful')
            router.push('/')
        } catch (error) {
            console.error('Registration failed', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-[320px]">
                <Fieldset className="w-[320px]">
                    <div className="flex items-center justify-center mt-2 mb-2">
                        <div className="w-[80px]">Логин</div>
                        <Input
                            className="w-[220px]"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        ></Input>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <div className="w-[80px]">Пароль</div>
                        <Input
                            className="w-[220px]"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        ></Input>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <div className="w-[80px]">Подтвердить пароль</div>
                        <Input
                            className="w-[220px]"
                            type={showPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        ></Input>
                    </div>
                    <div className="ml-2 mb-2">
                        <Checkbox onClick={() => setShowPassword((v) => !v)}>Показать пароль</Checkbox>
                    </div>
                </Fieldset>
                <div className="w-full flex justify-end">
                    <Button className="mt-2 w-[150px]" type="submit">Зарегестрироваться</Button>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm