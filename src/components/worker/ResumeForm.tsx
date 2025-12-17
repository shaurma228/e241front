'use client'

import React, { useState, useEffect } from "react"
import { Experience } from "@/types/props"
import ExperinnceCard from "@/components/worker/ExperinnceCard"
import { Button, Input, TextArea } from "@react95/core"
import ExperienceEditor from './ExperienceEditor'
import { experiences as testExperiences, name as testName, description as testDescription } from "@/data/testResume"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function ResumeForm() {
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [photo, setPhoto] = useState<string>("")

    const [toAddExperience, setToAddExperience] = useState<Experience>({
        ID: 0,
        companyID: undefined,
        companyName: "",
        startDate: null,
        endDate: null,
        qualificationName: "",
        qualificationDescription: "",
    })

    const [isAddingExperience, setIsAddingExperience] = useState<boolean>(false)

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

    const handleAddExperience = (newExperience: Experience) => {
        setToAddExperience(newExperience)
        setExperiences([...experiences, newExperience])
        setIsAddingExperience(false)
    }

    useEffect(() => {
        setExperiences(testExperiences.map(exp => ({
            ...exp,
            startDate: exp.startDate ? new Date(exp.startDate) : null,
            endDate: exp.endDate ? new Date(exp.endDate) : null,
        })))
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
                        onChange={(e) => setDescription(e.target.value)}
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
            <div>
                <Button
                    className="mb-4"
                    onClick={() => setIsAddingExperience(!isAddingExperience)}
                >
                    {isAddingExperience ? 'Отмена' : 'Добавить опыт работы'}
                </Button>
                {isAddingExperience &&
                    <ExperienceEditor
                        experience={toAddExperience}
                        onUpdate={handleAddExperience}
                        onCancel={() => setIsAddingExperience(false)}/>
                }
            </div>
        </div>
    )
}

export default ResumeForm