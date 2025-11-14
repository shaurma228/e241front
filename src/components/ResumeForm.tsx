'use client'

import React, { useState, useEffect } from "react"
import { Experience } from "@/types/props"
import EitOrDeleteExperience from "@/components/EditOrDeleteExperience"
import CreateExperience from "@/components/CreateExperience"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function ResumeForm() {
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [photoURL, setPhotoURL] = useState<string>("")

    const fetchResumeData = async () => {
        const response = await fetch(`${apiUrl}/api/resume`, { // add try-catch here
            // Include authentication headers here
        })
        const data = await response.json()
        setExperiences(data.experiences)
        setName(data.name)
        setDescription(data.description)
        setPhotoURL(data.photoURL)
    }

    // useEffect(() => {
    //     fetchResumeData()
    // }, [])


    return (
        <div>
            {/*name, description, photoURL with editing and list of EitOrDeleteExperience and creste button*/}
        </div>
    )
}

export default ResumeForm