import { useState, useEffect } from 'react';

function useAjax(initRequest) {
    const [url, setUrl] = useState('');
    const [request, setRequest] = useState(initRequest);
    const [response, setResponse] = useState();

    useEffect(() => {
        async function customAjax() {

            let res = await fetch(request.url ? request.url : url, {
                method: request.method || 'GET',
                body: JSON.stringify(request.body),
                headers: { 'Content-Type': 'application/json' },
            });

            if (request.getMethod) {
                res = await fetch(request.getMethod, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            // console.log('request.url==', request.url);
            
            await setResponse(await res.json());
        }

        console.log('request===',request);
        
        if (request) customAjax();
    }, [request, url]);

    return {
        setUrl,
        setRequest,
        response,
    };
}

export default useAjax;