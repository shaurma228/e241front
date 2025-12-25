'use client'

import React, { useState, useEffect } from "react"
import { Experience } from "@/types/props"
import ExperinnceCard from "@/components/worker/ExperinnceCard"
import { Button, Input, TextArea } from "@react95/core"
import ExperienceEditor from './ExperienceEditor'
import axios from "axios"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function ResumeForm() {
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [photo, setPhoto] = useState<string>("")
    const [toAddExperience, setToAddExperience] = useState<Experience>({
        companyID: undefined,
        companyName: "",
        startDate: null,
        endDate: null,
        qualificationName: "",
        qualificationDescription: "",
    })
    const [isAddingExperience, setIsAddingExperience] = useState<boolean>(false)

    const fetchResumeData = async () => {
        try {
            const response = await axios.post(`${apiUrl}/api/worker/account`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            const data = response.data
            setName(data.Name)
            setDescription(data.Description)
            setPhoto(data.PhotoPath)
        }
        catch (error) {
            console.error(error)
            //TODO: Выводить toast
        }
    }

    const fetchHistory = async () => {
        try {
            const response = await axios.post(`${apiUrl}/api/history`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            const data = response.data
            setExperiences(data)
        }
        catch (error) {
            console.error(error)
            //TODO: чёто выводить
        }
    }

    const handleAddExperience = async (newExperience: Experience) => {
        setToAddExperience(newExperience)
        setExperiences([...experiences, newExperience])
        setIsAddingExperience(false)
        try {
            await axios.post(`${apiUrl}/api/add-history`,
                {
                    experiences
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            )
            fetchHistory()
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleRemoveExperience = (id?: number) => {
        if (!id) return
        const updatedExperiences = experiences.filter(exp => exp.ID !== id)
        setExperiences(updatedExperiences)
        try {
            axios.post(`${apiUrl}/api/update-history`,
                {
                    experiences
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            )
            fetchHistory()
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleUpdateExperience = (updatedExperience: Experience) => {
        const updatedExperiences = experiences.map(exp =>
            exp.ID === updatedExperience.ID ? updatedExperience : exp
        )
        setExperiences(updatedExperiences)
        try {
            axios.post(`${apiUrl}/api/update-history`,
                {
                    experiences
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            )
            fetchHistory()
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleSaveResume = () => {
        try {
            axios.post(`${apiUrl}/api/worker/fill`,
                {
                    name: name,
                    description: description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            )
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchResumeData()
        fetchHistory()
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
                <Button
                    onClick={handleSaveResume}
                >
                    сохранить
                </Button>
            </div>
            <div>
                <div>Список опыта работы:</div>
                {experiences.map(exp => (
                    <ExperinnceCard key={exp.ID} {...exp} onDelete={handleRemoveExperience} onUpdate={handleUpdateExperience} />
                ))}
            </div>
            <div className="flex flex-col justify-center mt-4">
                <Button
                    className="mb-4 w-fit self-center"
                    onClick={() => setIsAddingExperience(!isAddingExperience)}
                >
                    {isAddingExperience ? 'Отмена' : 'Добавить опыт работы'}
                </Button>
                {isAddingExperience &&
                    <div className="flex justify-center">
                        <ExperienceEditor
                            experience={toAddExperience}
                            onUpdate={handleAddExperience}
                            onCancel={() => setIsAddingExperience(false)}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default ResumeForm