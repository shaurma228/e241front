'use client'

import React, {useEffect, useState} from "react"
import type { Companies } from "@/types/props"
import { List, Button } from "@react95/core"
import axios from "axios"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

interface Company {
    ID: number
    Name: string
}

function CompanyList(props: Companies) {
    const showCompanyList = useState<boolean>(props.show)
    const selected = props.selected
    const [companyList, setCompanyList] = useState<Company[]>([])

    const fetchCompanyList = async () => {
        try {
            const response = await axios.post(`${apiUrl}/companyList`, {}) //Поменять название API под бэк
            setCompanyList(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCompanyList()
    }, [])

    return (
        <div>
            {showCompanyList && (
                <List>
                    {companyList.map((company: Company) => (
                        <Button
                            key={company.ID}
                            onClick={() => selected(company.ID)}
                        >
                            {company.Name}
                        </Button>
                    ))}
                </List>
            )}
        </div>
    )
}

export default CompanyList