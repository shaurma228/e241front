import React from "react"
import Vacancy from "@/components/Vacancy"
import { testVacancies } from "@/data/testVacancies"

function Page() {
    return (
        <div>
            <div className="ml-4 mt-4">
                {testVacancies.map(v => (
                    <Vacancy key={v.vacancyID} {...v} />
                ))}
            </div>
        </div>
    )
}

export default Page