export const UseLastCallbackCodeString = `
    export function App() {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(prevCount => prevCount + 1);
        }

        const lastIncrement = useLastCallback(increment);
        
        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={lastIncrement}>Last Increment</button>
            </div>
        )
    }
    `