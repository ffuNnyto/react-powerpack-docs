export const UseTimeOutCodeString = `
    export function App() {
        const [showMessage, setShowMessage] = useState(false);

        const showMessageAfterDelay = () => {
            setShowMessage(true);
        }
        
        useTimeout(showMessageAfterDelay, 3000);
        
        return (
            <Show>
                <Show.When isTrue={showMessage}>
                    <div>
                        Message displayed after 3 seconds!
                    </div>
                </Show.When>
                <Show.Else>
                    <div>
                        Message will appear in 3 seconds
                    </div>
                </Show.Else>
            </Show>
        )
    }
    `