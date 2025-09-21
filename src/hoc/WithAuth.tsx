import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { tokenUpdate } from '@/utils/TokenUpdate'
import { decodeJWT } from '@/utils/DecodeJWT'

export default function withAuth<P extends object>(Component: React.ComponentType<P>) {
    return function AuthenticatedComponent(props: P) {
        const router = useRouter()
        const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

        useEffect(() => {
            const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
            const refreshToken = typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null

            if (!token) {
                console.log('Token not found')
                router.push('/auth')
                return
            }

            try {
                const decodedPayload = decodeJWT(token)

                if (!decodedPayload || (decodedPayload.exp && decodedPayload.exp * 1000 < Date.now())) {
                    console.log('Token is expired')
                    tokenUpdate(refreshToken, router)
                        .then(() => setIsAuthenticated(true))
                        .catch((error) => {
                            console.error('Error updating token:', error)
                            setIsAuthenticated(false)
                        })
                }
                else {
                    setIsAuthenticated(true)
                    console.log('Token is valid')
                }
            } catch (error) {
                console.error('Error decoding token:', error)
                router.push('/auth')
                return
            }
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