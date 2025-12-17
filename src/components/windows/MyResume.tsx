import React from "react"
import { Modal, TitleBar} from "@react95/core"
import { Wab321018 }  from "@react95/icons" //надо обновить иконку
import type { Window } from '@/types/props.ts'
import ResumeForm from "@/components/worker/ResumeForm"

function MyResume(props: Window) {
    const showMyResume = props.show
    const toggleShowMyResume = props.toggle
    const screenW = 100
    const screenH = -30

    const handleCloseVacancyList = () => {
        toggleShowMyResume( "MyResume", false)
    }

    return (
        <div>
            {showMyResume && (
                // @ts-expect-error: react95 Modal typing incompatible with JSX factory
                <Modal
                    className="resize"
                    key="my-resume-modal"
                    width="600px"
                    height="600px"
                    icon={<Wab321018 variant="32x32_4" />}
                    title="Моё резюме"
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
                            <ResumeForm/>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default MyResume