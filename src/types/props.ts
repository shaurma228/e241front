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

    responseStatus?: 'none' | 'pending'
}

export interface Window {
    show: boolean,
    toggle: (windowName: string, isVisible: boolean) => void
}

export interface Company {
    ID: number | undefined,
    name: string | undefined,
}

export interface Companies {
    show: boolean,
    selected: (comp: Company) => void,
}

export interface Experience {
    ID?: number | undefined,
    companyID?: number | undefined,
    companyName?: string | undefined,
    startDate: Date | null,
    endDate: Date | null,
    qualificationName?: string | undefined,
    qualificationDescription?: string | undefined,
}