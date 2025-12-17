import {Experience} from "@/types/props"

export const name: string = "Егор Веснин Ильич"
export const description: string = "Гигашлёпа"

export const experiences: Experience[] = [
    {
        ID: 1,
        companyID: 101,
        companyName: "ООО «ТехноСфера»",
        startDate: "2018-09",
        endDate: "2020-05",
        qualificationName: "Frontend-разработчик",
        qualificationDescription: "Разработка интерфейсов на Vue.js, верстка по макетам, интеграция с REST API, юнит-тестирование компонентов."
    },
    {
        ID: 2,
        companyID: 102,
        companyName: "ЗАО «Инновейт»",
        startDate: "2020-06",
        endDate: "2022-12",
        qualificationName: "Frontend Team Lead",
        qualificationDescription: "Координация небольшой команды, ревью кода, оптимизация производительности SPA, внедрение CI/CD процессов."
    },
    {
        ID: 3,
        companyID: 103,
        companyName: "Фриланс / Проекты",
        startDate: "2023-01",
        endDate: "2023-09",
        qualificationName: "Фронтенд-инженер (контракты)",
        qualificationDescription: "Разработка пользовательских панелей управления, интеграция платежных решений, адаптивная верстка."
    },
    {
        ID: 4,
        companyID: 104,
        companyName: "ООО «Данные и Аналитика»",
        startDate: "2023-10",
        endDate: "Present",
        qualificationName: "Fullstack-разработчик",
        qualificationDescription: "Поддержка и развитие веб-приложения, работа с бэкендом на Node.js, написание интеграционных тестов, участие в проектировании API."
    }
]