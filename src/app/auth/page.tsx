'use client'

import React from "react"
import { Tabs, Tab } from "@react95/core"
import LoginForm from "@/components/LoginForm"
import RegisterForm from "@/components/RegisterForm"

function Auth() {
    return (
        <div className="bg-[url('/wallpaper/auth.jpg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="h-[300px]">
                <Tabs defaultActiveTab="Вход" className="w-[300px]">
                    <Tab title="Вход">
                        <LoginForm/>
                    </Tab>
                    <Tab title="Регистрация">
                        <RegisterForm/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Auth