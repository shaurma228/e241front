import React from "react"
import { Modal, TitleBar } from "@react95/core"
import { Wab321018 }  from "@react95/icons"
import type { WindowProps } from '@/types/props.ts'
import {testVacancies} from "@/data/testVacancies"
import Vacancy from "@/components/Vacancy"

function VacancyList(props: WindowProps) {
    const showVacancyList = props.show
    const toggleShowVacancyList = props.toggle
    const screenW = 100
    const screenH = -30

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
                            {testVacancies.map(v => (
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