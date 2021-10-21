import React, { cloneElement, isValidElement, useEffect, useState } from 'react';
import styled from 'styled-components';

const ResourceLoaderWrapper = styled.div`
    border: 2px solid #c93;
    padding-left: 1em;
    color: #c93;
    margin: 10px;
    margin-bottom: 20px;
`
export const ResourceLoader = ({ getData, resourceName, children }) => {
    const [state, setState] = useState(null);
    useEffect(() => {
        (async () => {
            const data = await getData();
            setState(data);
        })();
    }, [getData]);

    return (
        <>
            {React.Children.map(children, (child, index) => {
                if(isValidElement(child)) {
                    return <ResourceLoaderWrapper>
                        {cloneElement(child, { [resourceName]: state, index })}
                    </ResourceLoaderWrapper>
                }
                return child;
            })}
        </>
    )
}
