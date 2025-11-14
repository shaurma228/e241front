'use client'

import React, { useState, useEffect } from "react"
import { Experience } from "@/types/props"
import EitOrDeleteExperience from "@/components/EditDeleteOrCreateExperience"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function ResumeForm() {
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [photoURL, setPhotoURL] = useState<string>("")

    const fetchResumeData = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/resume`, {
                // TODO: Передавать токен
            })
            const data = await response.json()
            setExperiences(data.experiences)
            setName(data.name)
            setDescription(data.description)
            setPhotoURL(data.photoURL)
        }
        catch (error) {
            console.error(error)
            //TODO: Выводить toast
        }
    }

    useEffect(() => {
        fetchResumeData()
    }, [])

    return (
        <div>
            {/*name, description, photoURL with editing and list of EitOrDeleteExperience and creste button*/}
        </div>
    )
}

export default ResumeForm