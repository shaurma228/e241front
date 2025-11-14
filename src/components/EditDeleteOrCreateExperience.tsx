'use client'

import React, { useState } from "react"
import CompanyList from "@/components/CompanyList"
import ConfirmDeleteExperience from "@/components/ConfirmDeleteExperience"
import { Company, Experience} from "@/types/props"
import { Button } from "@react95/core"
import axios from "axios"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function EditDeleteOrCreateExperience(props: Experience) {
    const ID = props.ID
    const [company, setCompany] = useState<Company>({ID: props.companyID, Name: props.companyName})
    const [startDate, setStartDate] = useState<string | undefined>(props.startDate)
    const [endDate, setEndDate] = useState<string | undefined>(props.endDate)
    const [qualificationName, setQualificationName] = useState<string | undefined>(props.qualificationName)
    const [qualificationDescription, setQualificationDescription] = useState<string | undefined>(props.qualificationDescription)

    const [showCompanyList, setShowCompanyList] = useState(false)

    // TODO: Передавать токен
    const editExperience = async (event: React.FormEvent) => {
        event.preventDefault()

        if (!startDate || !endDate || !qualificationName || !qualificationDescription || !company.ID) {
            console.log("Все поля должны быть заполнены")
            // TODO: выводить toast и уточнить обязательны ли все поля
            return
        }

        if (!ID) {
            try {
                await axios.post(`${apiUrl}/api/auth/createExperience`, { startDate, endDate, qualificationName, qualificationDescription, company}) // компания отправляется в формате {ID, Name}
                console.log('Successfully added experience')
            }
            catch (error) {
                console.error(error)
                //TODO: Выводить toast
            }
        }
        else {
            try {
                await axios.post(`${apiUrl}/api/auth/editExperience`, { ID, startDate, endDate, qualificationName, qualificationDescription, company}) // компания отправляется в формате {ID, Name}
                console.log('Successfully edited experience')
            }
            catch (error) {
                console.error(error)
                //TODO: Выводить toast
            }
        }
    }

    return (
        <form onSubmit={editExperience}>
            {/*
                TODO: Добавить пикер даты (начала и окончания), и редактирования квалификации (имя и описание)
            */}

            <Button onClick={() => setShowCompanyList(!showCompanyList)}>
                {company.Name}
            </Button>
            <CompanyList
                show={showCompanyList}
                selected={(comp: Company) => setCompany(comp)}
            />

            <Button type="submit">
                Сохранить
            </Button>
            <Button> {/*TODO: открывать ConfirmDeleteExperience*/}
                Удалить
            </Button>
        </form>
    )
}

export default EditDeleteOrCreateExperience