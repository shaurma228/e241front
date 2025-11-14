export interface Vacancy {
    vacancyID: number
    salary: string
    description: string
    workStart: string
    workEnd: string

    companyName: string
    companyDescription: string

    officeName: string
    officeDescription: string
    officeAddress: string
    officeContact: string

    requirements: string
    requiredYears: string
    qualificationName: string
    qualificationDescription: string
}

export interface Experience {
    ID?: number
    companyID?: number
    companyName?: string
    startDate?: string
    endDate?: string
    qualificationName?: string
    qualificationDescription?: string
}

export interface Window {
    show: boolean,
    toggle: (windowName: string, isVisible: boolean) => void
}

export interface Company {
    ID: number | undefined,
    Name: string | undefined,
}

export interface Companies {
    show: boolean,
    selected: (comp: Company) => void,
}