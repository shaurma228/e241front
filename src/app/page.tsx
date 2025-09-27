'use client'

import React, { useEffect, useState } from "react"
import TaskBarComponent from "@/components/TaskBarComponent"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function Home() {

    return (
        <div className="bg-[url('/wallpaper/home.jpg')] bg-cover min-h-screen flex items-center justify-center">
            <TaskBarComponent/>
        </div>
    )
}

export default Home
