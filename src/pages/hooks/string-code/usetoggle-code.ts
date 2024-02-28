export const UseToggleCodeString=`
    export function App() {
        const [isToggled, setToggle] = useToggle(false);
        
        return (
            <div>
                <button onClick={setToggle}>Toggle</button>
                {isToggled ? <div>Toggle is ON</div> : <div>Toggle is OFF</div>} 
            </div>
        )
    }
    `