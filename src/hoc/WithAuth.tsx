import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { tokenUpdate } from '@/utils/TokenUpdate'

export default function withAuth<P extends object>(Component: React.ComponentType<P>) {
    return function AuthenticatedComponent(props: P) {
        const router = useRouter()
        const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

        useEffect(() => {
            const refreshToken = localStorage.getItem('refreshToken')

            tokenUpdate(refreshToken, router)
                .then(() => setIsAuthenticated(true))
                .catch((error) => {
                    console.error('Error updating token:', error)
                    setIsAuthenticated(false)
                }
            )
        }, [router])

        useEffect(() => {
            if (isAuthenticated === false) {
                router.push('/auth')
            }
        }, [isAuthenticated, router])

        if (isAuthenticated === null) {
            return null
        }

        return <Component {...props} />
    }
}