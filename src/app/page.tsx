'use client'

import React, { useState } from "react"

import TaskBarComponent from "@/components/TaskBarComponent"
import Desctop from "@/components/Desctop"
import VacancyList from "@/components/VacancyList"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function Home() {
    const [showWindows, setShowWindows] = useState({
        vacancyList: false,
    })

    const toggleWindow = (windowName: string, isVisible: boolean) => {
        setShowWindows((prev) => ({
            ...prev,
            [windowName]: isVisible,
        }))
    }

    const handleOpenWindow = (windowName: string) => toggleWindow(windowName, true)

    return (
        <div className="bg-[url('/wallpaper/home.jpg')] bg-cover min-h-screen">
            <Desctop
                openVacancyList = {() => handleOpenWindow('vacancyList')}
            />
            <TaskBarComponent/>
            <VacancyList
                show={showWindows.vacancyList}
                toggle={() => toggleWindow("vacancyList", !showWindows.vacancyList)}
            />
        </div>
    )
}

export default Home
