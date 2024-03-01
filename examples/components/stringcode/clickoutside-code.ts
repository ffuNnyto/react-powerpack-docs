export const ClickOutsideComponentCodeString = `
    export function App() {
        const [text, setText] = useState('Click me');

        const onClickOutside = () => {
            setText('You Click Outside,Click me again');
        };
        
        return (
            <ClickOutsideComponent onClickOutside={onClickOutside}>
                <button onClick={() => setText('Click me')}>
                    {text}
                </button>
            </ClickOutsideComponent>
        )
    }`
