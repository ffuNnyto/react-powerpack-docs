export const UseClickOutSideCodeString = `
    export function App() {
        const [text, setText] = useState('Click Outside')
        
        const ref = useClickOutside(() => {
            setText('Now Click inside the box')
        });
        
        useTimeout(showMessageAfterDelay, 3000);
        
        return (
            <div>
                <div onClick={() => setText('Click Outside')} ref={ref}>
                    {text}
                </div>
            </div>
        )
    }
    `