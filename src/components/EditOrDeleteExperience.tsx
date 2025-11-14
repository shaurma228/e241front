'use client'

import React, { useState } from "react"
import CompanyList from "@/components/CompanyList"
import type { Experience } from "@/types/props"

function EditOrDeleteExperience(props: Experience) {
    const ID = props.ID
    const [companyID, setCompanyID] = useState<number>(props.companyID)
    const [companyName, setCompanyName] = useState<string>(props.companyName)
    const [startDate, setStartDate] = useState<string>(props.startDate)
    const [endDate, setEndDate] = useState<string>(props.endDate)
    const [qualificationName, setQualificationName] = useState<string>(props.qualificationName)
    const [qualificationDescription, setQualificationDescription] = useState<string>(props.qualificationDescription)

    const [showCompanyList, setShowCompanyList] = useState(false)

    const deleteExperience = () => {
        // Call an API to delete the experience by ID
    }

    const editExperience = () => {
        // Call an API to edit the experience by ID
    }

    return (
        <div>
         <CompanyList
             show={showCompanyList}
             selected={(cID: number) => setCompanyID(cID)}
         />
        </div>
    )
}

export default EditOrDeleteExperience