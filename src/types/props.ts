export interface VacancyProps {
    vacancyID: number
    salary: string
    description: string
    workStart: string
    workEnd: string

    companyID: number
    companyName: string
    companyDescription: string

    officeID: number
    officeName: string
    officeDescription: string
    officeAddress: string
    officeContact: string

    requirements: string
    requiredYears: string
    qualificationName: string
    qualificationDescription: string
}

export interface WindowProps {
    show: boolean,
    toggle: (windowName: string, isVisible: boolean) => void
}