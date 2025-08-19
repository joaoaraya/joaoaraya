'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        const time = (60 * 5);
        const path = "/";
        const redirectToURL = setTimeout(() => {
            router.push(path);
        }, time);

        return () => clearTimeout(redirectToURL);
    }, []);

    return (
        <></>
    )
}