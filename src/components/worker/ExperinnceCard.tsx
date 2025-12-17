import React, { useState, DateField } from "react"
import type { Experience } from '@/types/props'
import { Button, Fieldset, Input, TextArea } from "@react95/core"

function ExperinnceCard(props: Experience) {
    const [experience, setExperience] = useState(props)

    const [companyID, setCompanyID] = useState<number | undefined>(experience.companyID)
    const [companyName, setCompanyName] = useState<string | undefined>(experience.companyName)
    const [startDate, setStartDate] = useState<string | undefined>(experience.startDate)
    const [endDate, setEndDate] = useState<string | undefined>(experience.endDate)
    const [qualificationName, setQualificationName] = useState<string | undefined>(experience.qualificationName)
    const [qualificationDescription, setQualificationDescription] = useState<string | undefined>(experience.qualificationDescription)

    const [isEditing, setIsEditing] = useState<boolean>(false)

    const handleUpdate = () => {
        setExperience(
            {
                ...experience,
                companyID,
                companyName,
                startDate,
                endDate,
                qualificationName,
                qualificationDescription
            }
        )
        setIsEditing(false)
    }

    return (
        <div>
            <Fieldset legend={experience.companyName + " — " + experience.qualificationName} style={{ marginBottom: '1rem' }} className="h-auto">
                <div className="ml-2">
                    <div><strong>Дата работы: </strong>{experience.startDate} - {experience.endDate}</div>
                    <strong>Описание:</strong>
                    <div className="ml-1">{experience.qualificationDescription}</div>
                </div>
                <div className="flex justify-end mt-2 mb-2 mr-2">
                    <Button
                        onClick={() => setIsEditing(!isEditing)}
                        className="mr-2"
                    >
                        {isEditing ? 'Отменить' : 'Редактировать'}
                    </Button>
                    <Button>Удалить</Button>
                </div>
            </Fieldset>
            {isEditing &&
                <Fieldset legend="Редактировать" style={{ marginBottom: '1rem' }} className="h-auto flex flex-col">
                    <div className="ml-2">
                        <div>
                            <strong>Квалификация:</strong>
                            <Input
                                className="w-[50%] mb-2 ml-1"
                                value={experience.qualificationName}
                                onChange={(e) => setQualificationName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <strong>Описание квалификации: </strong>
                            <TextArea
                                className="w-[70%] mb-2 ml-1 mt-2"
                                value={experience.qualificationDescription}
                                onChange={(e) => setQualificationDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <DateField
                                label="Dash separator"
                                defaultValue={Date(startDate)}
                                format="MM-DD-YYYY"
                            />
                        </div>
                    </div>
                    <div className="mb-2 flex justify-center">
                        <Button onClick={handleUpdate}>Сохранить</Button>
                    </div>
                </Fieldset>
            }
        </div>
    )
}

export default ExperinnceCard