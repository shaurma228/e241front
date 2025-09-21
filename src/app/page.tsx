'use client'

import React, { useEffect, useState } from "react"
import withAuth from "@/hoc/WithAuth"
import axios from "axios"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function Home() {
    const [testText, setTestText] = useState('')

    const fetchTest = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/home/test`)
            setTestText(response.data.message)
        } catch (error) {
            console.error('Error fetching test data', error)
        }
    }

    useEffect(() => {
        fetchTest()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {testText}
        </div>
    )
}

export default withAuth(Home)
