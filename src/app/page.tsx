'use client'

import React, { useState } from "react"
import TaskBarComponent from "@/components/TaskBarComponent"
import Desktop from "@/components/Desktop"
import VacancyList from "@/components/windows/VacancyList"
import MyResume from "@/components/windows/MyResume"
import withAuth from "@/hoc/WithAuth"

function Home() {
    const [showWindows, setShowWindows] = useState({
        vacancyList: false,
        myResume: false,
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
                openMyResume={() => handleOpenWindow('myResume')}
            />
            <TaskBarComponent/>
            <VacancyList
                show={showWindows.vacancyList}
                toggle={() => toggleWindow("vacancyList", !showWindows.vacancyList)}
            />
            <MyResume
                show={showWindows.myResume}
                toggle={() => toggleWindow("myResume", !showWindows.myResume)}
            />
        </div>
    )
}

// export default Home
export default withAuth(Home)
