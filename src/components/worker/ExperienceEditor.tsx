import React, { useState } from "react"
import { Button, Fieldset, Input, TextArea } from "@react95/core"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { testCompanies } from "@/data/testCompanies"
import type { Experience } from '@/types/props'

interface ExperienceEditorProps {
    experience: Experience
    onUpdate: (updatedExperience: Experience) => void
    onCancel: () => void
}

const ExperienceEditor: React.FC<ExperienceEditorProps> = ({ experience, onUpdate, onCancel }) => {
    const [companyID, setCompanyID] = useState<number | undefined>(experience.companyID)
    const [companyName, setCompanyName] = useState<string | undefined>(experience.companyName)
    const [startDate, setStartDate] = useState<Date | null>(experience.startDate)
    const [endDate, setEndDate] = useState<Date | null>(experience.endDate)
    const [qualificationName, setQualificationName] = useState<string | undefined>(experience.qualificationName)
    const [qualificationDescription, setQualificationDescription] = useState<string | undefined>(experience.qualificationDescription)

    const handleSave = () => {
        onUpdate({
            ...experience,
            companyID,
            companyName,
            startDate,
            endDate,
            qualificationName,
            qualificationDescription
        })
    }

    return (
        <Fieldset legend="Редактировать" style={{ marginBottom: '1rem' }} className="h-auto flex flex-col w-fit">
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
                        className="w-[200px] mb-2 ml-1 mr-2"
                        value={qualificationName}
                        onChange={(e) => setQualificationName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <strong>Описание квалификации: </strong>
                    <TextArea
                        className="w-[96%] mb-2 ml-1 mt-2"
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
            <div className="mb-2 mt-2 flex justify-center">
                <Button onClick={handleSave}>Сохранить</Button>
                <Button onClick={onCancel} className="ml-2">Отменить</Button>
            </div>
        </Fieldset>
    )
}

export default ExperienceEditor

