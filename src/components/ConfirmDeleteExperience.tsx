import React from "react"
import axios from "axios"
import { Button } from "@react95/core"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function ConfirmDeleteExperience(props: {ID: number}) {
    const ID = props.ID

    // TODO: Передавать токен
    const deleteExperience = async () => {
        try {
            await axios.post(`${apiUrl}/api/auth/deleteExperience`, {ID})
            console.log('Successfully deleted experience')
        }
        catch (error) {
            console.error(error)
            //TODO: Выводить toast
        }
    }

    return (
        <div>
            <Button onClick={() => deleteExperience()}>
                Подтвердить
            </Button>
        </div>
    )
}

export default ConfirmDeleteExperience