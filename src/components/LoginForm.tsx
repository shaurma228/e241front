'use client'

import React from "react"
import { Button, Input, Fieldset, Checkbox } from "@react95/core"

function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
        <div className="w-[300px]">
            <Fieldset className="w-[300px]">
                <div className="flex items-center justify-center mt-2 mb-2">
                    <div className="w-[60px]">Login</div>
                    <Input className="w-[220px]"></Input>
                </div>
                <div className="flex items-center justify-center mb-2">
                    <div className="w-[60px]">Password</div>
                    <Input className="w-[220px]" type={showPassword ? "text" : "password"}></Input>
                </div>
                <div className="ml-2 mb-2">
                    <Checkbox onClick={() => setShowPassword((v) => !v)}>Show password</Checkbox>
                </div>
            </Fieldset>
            <div className="w-full flex justify-end">
                <Button className="mt-2 w-[100px]">Login</Button>
            </div>
        </div>
    )
}

export default LoginForm