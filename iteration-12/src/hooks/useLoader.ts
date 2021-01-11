import { useState, useEffect, DependencyList } from 'react';

export enum StatusLoader {
    loading,
    hasData,
    hasError,
    notContent
}

export const useLoader = <T>(api: () => Promise<T>, dep?: DependencyList): [StatusLoader, T] => {
    const [status, setStatus] = useState(StatusLoader.loading);
    const [data, setData] = useState<T>(null);

    useEffect(() => {
        api()
        .then((response) => {
            if(response){
                setData(response);
                setStatus(StatusLoader.hasData);
            } else {
                setData(null);
                setStatus(StatusLoader.hasError);
            }

            
        })
        .catch(() => {
            setData(null);
            setStatus(StatusLoader.hasError);
        })
    }, dep)

    return [status, data];
}