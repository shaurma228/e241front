'use client'

import React from "react"
import { Tabs, Tab } from "@react95/core"
import LoginForm from "@/components/LoginForm"
import RegisterForm from "@/components/RegisterForm"

function Auth() {
    return (
        <div className="bg-[url('/wallpaper/auth.jpg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="h-[300px]">
                <Tabs defaultActiveTab="Login" className="w-[300px]">
                    <Tab title="Login">
                        <LoginForm/>
                    </Tab>
                    <Tab title="Register">
                        <RegisterForm/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Auth