export const UseApiCodeString = `
    export function App() {
        let { request, data} = useApi('https://randomuser.me/api/', 'get');
        
        return (
            <Show>
                <Show.When isTrue={data !== null}>
                    {JSON.stringify(data, null, 2)}
                </Show.When>
                <Show.Else>
                    <div>request error</div>
                </Show.Else>
            </Show>
        );
    }
    `