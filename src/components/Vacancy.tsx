import React from "react"
import { Button, Fieldset  } from "@react95/core"
import type { Vacancy } from '@/types/props'

function Vacancy(props: Vacancy) {
    const {
        vacancyID, salary, description, workStart, workEnd,
        companyName, companyDescription,
        officeName, officeDescription, officeAddress, officeContact,
        requirements, requiredYears, qualificationName, qualificationDescription, responseStatus
    } = props

    const [responseStatusState, setResponseStatusState] = React.useState<string>(responseStatus || 'none')

    return (
        <Fieldset legend={companyName + " — " + officeName} style={{ marginBottom: '1rem' }} className="h-auto">
            <div className="ml-2 mr-2 mb-2">
                <p><strong>Заработная плата:</strong> {salary}</p>

                <p><strong>О компании:</strong></p>
                <p className="ml-1">{companyDescription}</p>

                <h3><strong>Место работы:</strong></h3>
                <div className="ml-1">
                    <p>{officeName}</p>
                    <p>{officeAddress}</p>
                    <p>{officeContact}</p>
                    {officeDescription && <p>{officeDescription}</p>}
                </div>

                <p><strong>График работы:</strong> {workStart} — {workEnd}</p>

                <h3><strong>Описание вакансии</strong></h3>
                <p className="ml-1">{description}</p>

                <h3><strong>Требования</strong></h3>
                <p className="ml-1">{requirements}</p>

                <p><strong>Требуемый опыт:</strong> {requiredYears}</p>

                <p><strong>Квалификация:</strong> {qualificationName}</p>
                <div className="ml-1">
                    {qualificationDescription && <p>{qualificationDescription}</p>}
                </div>

                <div className="flex justify-end mt-2">
                    <Button>
                        {responseStatusState === 'none' && 'Откликнуться'}
                        {responseStatusState === 'pending' && 'Отклик отправлен'}
                    </Button>
                </div>
            </div>
        </Fieldset>
    )
}

export default Vacancy