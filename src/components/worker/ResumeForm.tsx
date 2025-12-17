'use client'

import React, { useState, useEffect } from "react"
import { Experience } from "@/types/props"
import ExperinnceCard from "@/components/worker/ExperinnceCard"
import { Button, Input, TextArea } from "@react95/core"
import { experiences as testExperiences, name as testName, description as testDescription } from "@/data/testResume"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function ResumeForm() {
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [photo, setPhoto] = useState<string>("")


    // const fetchResumeData = async () => {
    //     try {
    //         const response = await fetch(`${apiUrl}/api/resume`, {
    //             // TODO: Передавать токен
    //         })
    //         const data = await response.json()
    //         setExperiences(data.experiences)
    //         setName(data.name)
    //         setDescription(data.description)
    //         setPhotoURL(data.photoURL)
    //     }
    //     catch (error) {
    //         console.error(error)
    //         //TODO: Выводить toast
    //     }
    // }
    //
    useEffect(() => {
        setExperiences(testExperiences)
        setName(testName)
        setDescription(testDescription)
    }, [])

    return (
        <div>
            <div className="w-[70%]">
                <div>
                    <strong>ФИО:</strong>
                    <Input
                        className="w-full ml-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <strong className="mb-2">Описание:</strong>
                    <TextArea
                        className="w-full ml-2"
                        value={description}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-4 ml-2">
                <Button>сохранить</Button>
            </div>
            <div>
                <div>Список опыта работы:</div>
                {experiences.map(exp => (
                    <ExperinnceCard key={exp.ID} {...exp} />
                ))}
            </div>
        </div>
    )
}

export default ResumeForm