export async function decodeJWT(token: string) {
    try {
        const payloadBase64 = token.split('.')[1];
        const base64 = payloadBase64.replace(/-/g, '+').replace(/_/g, '/')
            .padEnd(payloadBase64.length + (4 - payloadBase64.length % 4) % 4, '=');
        const decodedPayload = JSON.parse(atob(base64));

        return {
            id: decodedPayload['nameid'],
            login: decodedPayload['unique_name'],
            role: decodedPayload['role'],
            exp: decodedPayload['exp']
        };
    } catch (error) {
        console.error('Decoding Error JWT:', error)
        return null
    }
}