export const fetchData = <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers'],
  ): (() => Promise<TData>) => {
    const url = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT as string
    return async () => {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options,
        },
        credentials: 'include',
        body: JSON.stringify({
          query,
          variables,
        }),
      });
      if (!res.ok) {
        // create error object and reject if not a 2xx response code
        throw new Error(`HTTP status code: ${res.status}`);
      }
  
      const json = await res.json();
  
      if (json.errors) {
        const { message } = json.errors[0] || {};
        throw new Error(message || 'Error…');
      }
  
      return json.data;
    };
  };