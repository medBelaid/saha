import { useState, useEffect } from 'react';

export const useResource = getResourceFunc => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await getResourceFunc();
            setResource(result);
        })();
    }, [getResourceFunc]);

    return resource;
}
