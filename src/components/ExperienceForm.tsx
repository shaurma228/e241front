import React from "react"
import {Experience} from "@/types/props"

function ExperienceForm(props: Experience) {
    const { ID, companyName, startDate, endDate, qualificationName, qualificationDescription } = props

    const deleteExperience = () => {
        // Call an API to delete the experience by ID
    }

    const createOrEditExperience = () => {
        if (ID === -1) {} // Call an API to add a new experience
        // Call an API to edit the experience by ID
    }

    return (
        <div>
        </div>
    )
}

export default ExperienceForm