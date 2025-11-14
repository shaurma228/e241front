'use client'

import React, { useEffect, useState } from "react"
import type { Companies, Company } from "@/types/props"
import { List, Button } from "@react95/core"
import axios from "axios"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

function CompanyList(props: Companies) {
    const showCompanyList = useState<boolean>(props.show)
    const selected = props.selected
    const [companyList, setCompanyList] = useState<Company[]>([])

    // TODO: Передавать токен (хз надо или нет)
    const fetchCompanyList = async () => {
        try {
            const response = await axios.post(`${apiUrl}/companyList`, {}) //Поменять название API под бэк
            setCompanyList(response.data)
        }
        catch (error) {
            console.error(error)
            //TODO: Выводить toast
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
                            onClick={() => selected(company)}
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