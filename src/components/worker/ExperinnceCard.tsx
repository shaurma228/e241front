import React, { useState } from "react"
import type { Experience } from '@/types/props'
import { Button, Fieldset } from "@react95/core"
import ExperienceEditor from './ExperienceEditor'

interface ExperinnceCardProps extends Experience {
    onDelete?: (ID?: number) => void
    onUpdate?: (updExp: Experience) => void
}

function ExperinnceCard(props: ExperinnceCardProps) {
    const [experience, setExperience] = useState(props)
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const handleUpdate = (updatedExperience: Experience) => {
        setExperience(updatedExperience)
        setIsEditing(false)
        if (props.onUpdate) props.onUpdate(updatedExperience)
    }

    const handleDelete = (ID: number) => {
        setIsEditing(false)
        if (props.onDelete) props.onDelete(ID)
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
                    <Button
                        onClick={() => handleDelete}
                    >Удалить</Button>
                </div>
            </Fieldset>
            {isEditing && (
                <div className="flex justify-center">
                    <ExperienceEditor
                        experience={experience}
                        onUpdate={handleUpdate}
                        onCancel={() => setIsEditing(false)}
                    />
                </div>
            )}
        </div>
    )
}

export default ExperinnceCard