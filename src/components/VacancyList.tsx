'use client'

import React, { useState, useEffect } from 'react'
import { List, Modal, TitleBar } from "@react95/core"
import { Wab321018 }  from "@react95/icons"

interface VacancyListProps {
    show: boolean,
    toggle: (windowName: string, isVisible: boolean) => void
}

function VacancyList(props: VacancyListProps) {
    const showVacancyList = props.show
    const toggleShowVacancyList = props.toggle
    const [screenW, setScreenW] = useState(0)
    const [screenH, setScreenH] = useState(0)

    useEffect(() => {
        setScreenW(window.innerWidth / 2 - 300)
        setScreenH(-30)
    }, [])

    const handleCloseVacancyList = () => {
        toggleShowVacancyList( "VacancyList", false)
    }

    return (
        <div>
            {showVacancyList && (
                // @ts-expect-error: react95 Modal typing incompatible with JSX factory
                <Modal
                    className="resize"
                    key="vacancy-list-modal"
                    width="600px"
                    height={"500px"}
                    icon={<Wab321018 variant="32x32_4" />}
                    title="Vacancy List"
                    dragOptions={{
                        defaultPosition: {
                            x: screenW,
                            y: screenH
                        }
                    }}
                    titleBarOptions={[
                        <Modal.Minimize key="minimize-modal" />,
                        <TitleBar.Close key="close" onClick={handleCloseVacancyList} />,
                    ]}
                > 
                    <List>
                        <List.Item>A</List.Item>
                        <List.Item>B</List.Item>
                        <List.Item>C</List.Item>
                        <List.Item>D</List.Item>
                    </List>
                </Modal>
            )}
        </div>
    )
}

export default VacancyList