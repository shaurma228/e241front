'use client'

import React, { useState } from "react"
import {
    Wab321018,
} from "@react95/icons"

interface WindowSizeProviderProps {
    openVacancyList: () => void
    openMyResume: () => void
}

function Desktop(props: WindowSizeProviderProps) {
    const handleOpenVacancyList = props.openVacancyList
    const handleOpenMyResume = props.openMyResume

    const [activeIcon, setActiveIcon] = useState<number | null>(null)

    const handleToggleIcon = (iconId: number) => {
        setActiveIcon((prev: number | null) => (prev === iconId ? null : iconId))
    }

    return (
        <div className="ml-4">
            <div className="h-4"/>
            <div
                className={`w-[80px] h-[80px] flex flex-col items-center justify-center ${activeIcon === 1 ? "border-[2px] border-white border-dotted bg-[rgba(160,140,55,0.6)]" : ""}`}
                onClick={() => handleToggleIcon(1)}
                onDoubleClick={() => handleOpenVacancyList()}
            >
                <Wab321018 variant="32x32_4"/>
                <p className="text-white select-none">Вакансии</p>
            </div>
            <div
                className={`w-[80px] h-[80px] flex flex-col items-center justify-center ${activeIcon === 1 ? "border-[2px] border-white border-dotted bg-[rgba(160,140,55,0.6)]" : ""}`}
                onClick={() => handleToggleIcon(1)}
                onDoubleClick={() => handleOpenMyResume()}
            >
                <Wab321018 variant="32x32_4"/>
                <p className="text-white select-none">Моё Резюме</p>
            </div>
        </div>
    )
}

export default Desktop