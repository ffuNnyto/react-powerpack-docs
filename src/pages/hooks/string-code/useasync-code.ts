export const UseAsyncCodeString = `
    export function App() {
        const fetchUserData = async () => {
            const response = await fetch('https://randomuser.me/api/');
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            return response.json();
        };

        const { isLoading, error, result } = useAsync(fetchUserData, []);
        
        return (
            <div>
                {isLoading && <p>Loading user data...</p>}
                {error && <p>Error: {error.message}</p>}
                {result && (
                    <div>
                        do something with result
                    </div>
                )}
            </div>
        );
    }
    `