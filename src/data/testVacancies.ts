import type { Vacancy } from '@/types/props'

export const testVacancies: Vacancy[] = [
    {
        vacancyID: 1,
        salary: "80 000 ₽",
        description: "Разработка и поддержка фронтенд-приложений на React/TypeScript.",
        workStart: "09:00",
        workEnd: "18:00",

        companyName: "Acme Tech",
        companyDescription: "Молодая команда, работающая над b2b продуктами.",

        officeName: "Офис в Москве",
        officeDescription: "Уютный офис рядом со станцией метро.",
        officeAddress: "г. Москва, ул. Примерная, 1",
        officeContact: "+7 (495) 000-00-01",

        requirements: "Опыт разработки на React, понимание TypeScript и современных инструментов сборки.",
        requiredYears: "2+ года",
        qualificationName: "Middle",
        qualificationDescription: "Уверенные знания в компонентной архитектуре и тестировании."
    },
    {
        vacancyID: 2,
        salary: "120 000 ₽",
        description: "Ведущий разработчик фронтенда, архитектура, code review.",
        workStart: "10:00",
        workEnd: "19:00",

        companyName: "Beta Solutions",
        companyDescription: "Крупная компания в сфере SaaS.",

        officeName: "Главный офис",
        officeDescription: "",
        officeAddress: "г. Санкт-Петербург, Невский пр., 10",
        officeContact: "+7 (812) 000-00-02",

        requirements: "Опыт проектирования архитектуры фронтенд-приложений, mentoring.",
        requiredYears: "5+ лет",
        qualificationName: "Senior",
        qualificationDescription: "Опыт в масштабируемых проектах и ведении команды.",
        responseStatus: "pending"
    }
]

