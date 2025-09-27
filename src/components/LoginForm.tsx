'use client'

import React from "react"
import { Button, Input, Fieldset, Checkbox } from "@react95/core"
import axios from "axios"
import { useRouter } from "next/navigation"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function LoginForm() {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const response = await axios.post(`${apiUrl}/api/auth/login`, { login, password })
            const { accessToken, refreshToken } = response.data
            localStorage.setItem('token', accessToken)
            localStorage.setItem('refreshToken', refreshToken)
            console.log('Login successful')
            router.push('/')
        } catch (error) {
            console.error('Login failed', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-[300px]">
                <Fieldset className="w-[300px]">
                    <div className="flex items-center justify-center mt-2 mb-2">
                        <div className="w-[60px]">Login</div>
                        <Input
                            className="w-[220px]"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        ></Input>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <div className="w-[60px]">Password</div>
                        <Input
                            className="w-[220px]"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        ></Input>
                    </div>
                    <div className="ml-2 mb-2">
                        <Checkbox onClick={() => setShowPassword((v) => !v)}>Show password</Checkbox>
                    </div>
                </Fieldset>
                <div className="w-full flex justify-end">
                    <Button className="mt-2 w-[100px]" type="submit">Login</Button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm