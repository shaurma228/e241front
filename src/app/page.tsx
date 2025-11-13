'use client'

import React, { useState } from "react"

import TaskBarComponent from "@/components/TaskBarComponent"
import Desktop from "@/components/Desktop"
import VacancyList from "@/components/windows/VacancyList"

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
            <Desktop
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
