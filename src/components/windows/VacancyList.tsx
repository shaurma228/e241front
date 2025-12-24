import React, { useState } from "react"
import { Modal, TitleBar } from "@react95/core"
import { Wab321018 }  from "@react95/icons" //надо обновить иконку
import type { Window } from '@/types/props.ts'
import {testVacancies} from "@/data/testVacancies"
import Vacancy from "@/components/Vacancy"

function VacancyList(props: Window) {
    const showVacancyList = props.show
    const toggleShowVacancyList = props.toggle
    const screenW = 100
    const screenH = -30
    const [filterStatus, setFilterStatus] = useState<'none' | 'pending' | 'accepted' | 'rejected' | ''>('');

    const handleCloseVacancyList = () => {
        toggleShowVacancyList( "VacancyList", false)
    }

    const filteredVacancies = filterStatus
        ? testVacancies.filter(v => v.responseStatus === filterStatus)
        : testVacancies

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
                            <div className="mb-4">
                                <label htmlFor="filterStatus" className="mr-2">Фильтр по статусу:</label>
                                <select
                                    id="filterStatus"
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
                                >
                                    <option value="">Все</option>
                                    <option value="pending">Ожидание</option>
                                </select>
                            </div>
                            {filteredVacancies.map(v => (
                                <Vacancy key={v.vacancyID} {...v} />
                            ))}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default VacancyList