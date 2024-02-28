export const UseLocalStorageCodeString = `
    export function App() {
        const [localStorageTest, setLocalStorageTest] = useLocalStorage('uselocalstorage', 'you can edit in realtime and check localstorage')
        
        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setLocalStorageTest(event.target.value)
        }

        return (
            <div>
                <input value={localStorageTest} onChange={onChange} />
            </div>
        )
    }
    `