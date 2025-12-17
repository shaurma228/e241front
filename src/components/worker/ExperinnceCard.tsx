import React from "react"
import type { Experience } from '@/types/props'
import { Button, Fieldset } from "@react95/core"

function ExperinnceCard(props: Experience) {
    const ID = props.ID
    const companyID = props.companyID
    const companyName = props.companyName
    const startDate = props.startDate
    const endDate = props.endDate
    const qualName = props.qualificationName
    const qualDescription = props.qualificationDescription

    return (
        <Fieldset legend={companyName + " — " + qualName} style={{ marginBottom: '1rem' }} className="h-auto">
            <div className="ml-2">
                <div><strong>Дата работы: </strong>{startDate} - {endDate}</div>
                <strong>Описание:</strong>
                <div className="ml-1">{qualDescription}</div>
            </div>
            <div className="flex justify-end mt-2 mb-2 mr-2">
                <Button className="mr-2">Редактировать</Button>
                <Button>Удалить</Button>
            </div>
        </Fieldset>
    )
}

export default ExperinnceCard