import React, { useState, useEffect } from "react"
import { Modal, TitleBar } from "@react95/core"
import { Wab321018 }  from "@react95/icons" //надо обновить иконку
import type { Window, Vacancy } from '@/types/props.ts'
import VacancyCard from "@/components/VacancyCard"
import axios from "axios"

function VacancyList(props: Window) {
    const showVacancyList = props.show
    const toggleShowVacancyList = props.toggle
    const screenW = 100
    const screenH = -30
    const [vacancies, setVacancies] = useState<Vacancy[]>([])

    const handleCloseVacancyList = () => {
        toggleShowVacancyList( "VacancyList", false)
    }

    const fetchVacancies = async () => {
         try {
             const response = await axios.get('/api/vacancy')
             setVacancies(response.data)
         }
         catch (error) {
             console.error(error);
         }
    }

    useEffect(() => {
        fetchVacancies()
    }, [])

    return (
        <div>
            {showVacancyList && (
                // @ts-expect-error: react95 Modal typing incompatible with JSX factory
                <Modal
                    className="resize"
                    key="vacancy-list-modal"
                    width="600px"
                    height="600px"
                    icon={<Wab321018 variant="32x32_4" />}
                    title="Вакансии"
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
                    <div className="overflow-auto h-full">
                        <div className="ml-4 mt-4 mr-4">
                            {vacancies.map(v => (
                                <VacancyCard key={v.vacancyID} {...v} />
                            ))}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default VacancyList