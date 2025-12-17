import React, { useState } from "react"
import type { Experience } from '@/types/props'
import { Button, Fieldset, Input, TextArea } from "@react95/core"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { testCompanies } from "@/data/testCompanies" //TODO: Подключать список компаний с апишки

function ExperinnceCard(props: Experience) {
    const [experience, setExperience] = useState(props)

    const [companyID, setCompanyID] = useState<number | undefined>(experience.companyID)
    const [companyName, setCompanyName] = useState<string | undefined>(experience.companyName)
    const [startDate, setStartDate] = useState<Date | null>(experience.startDate)
    const [endDate, setEndDate] = useState<Date | null>(experience.endDate)
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
        //TODO: Вызывать апишку для обновления и проверять валидность
        setIsEditing(false)
    }
    
    return (
        <div>
            <Fieldset legend={experience.companyName + " — " + experience.qualificationName} style={{ marginBottom: '1rem' }} className="h-auto">
                <div className="ml-2">
                    <div><strong>Дата работы: </strong>
                        {experience.startDate ? new Date(experience.startDate).toLocaleDateString() : "Не указано"} -
                        {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "Не указано"}
                    </div>
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
                    <Button>Удалить</Button> {/*TODO: Вызывать апишку для удаления*/}
                </div>
            </Fieldset>
            {isEditing &&
                <Fieldset legend="Редактировать" style={{ marginBottom: '1rem' }} className="h-auto flex flex-col">
                    <div className="ml-2">
                        <div>
                            <strong>Компания:</strong>
                            <select
                                className="w-[50%] mb-2 ml-1"
                                value={companyID ?? 0}
                                onChange={(e) => {
                                    const selectedCompanyID = Number(e.target.value)
                                    setCompanyID(selectedCompanyID)
                                    const selectedCompany = testCompanies.find(c => c.ID === selectedCompanyID)
                                    setCompanyName(selectedCompany ? selectedCompany.name : undefined)
                                }}
                            >
                                {testCompanies.map((company) => (
                                    <option key={company.ID} value={company.ID}>
                                        {company.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <strong>Квалификация:</strong>
                            <Input
                                className="w-[50%] mb-2 ml-1"
                                value={qualificationName}
                                onChange={(e) => setQualificationName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <strong>Описание квалификации: </strong>
                            <TextArea
                                className="w-[70%] mb-2 ml-1 mt-2"
                                value={qualificationDescription}
                                onChange={(e) => setQualificationDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <strong>Дата начала: </strong><DatePicker selected={startDate} onChange={(e) => setStartDate(e)} />
                        </div>
                        <div>
                            <strong>Дата окончания: </strong><DatePicker selected={endDate} onChange={(e) => setEndDate(e)} />
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