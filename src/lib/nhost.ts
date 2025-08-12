import { NhostClient } from '@nhost/react'

const nhost = new NhostClient({
    subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
    region: import.meta.env.VITE_NHOST_REGION,
    clientStorageType: 'web',
    clientStorage: {
        // Use localStorage for web applications
        setItem: (key: string, value: string) => {
            localStorage.setItem(key, value)
        },
        getItem: (key: string) => {
            return localStorage.getItem(key)
        },
        removeItem: (key: string) => {
            localStorage.removeItem(key)
        },
    },
})

export { nhost }