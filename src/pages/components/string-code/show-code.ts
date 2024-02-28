export const ShowCodeString = `
    export function App() {
        
        const [visible, setVisible] = useState(false);
        
        return (
            <Show>
                <Show.When isTrue={visible}>
                    <div className='bg-blue-500 rounded-xl p-2'>
                        This show when is visible
                    </div>
                </Show.When>
                <Show.Else>
                    <div className='bg-red-500 rounded-xl p-2'>
                        This show when is invisible
                    </div>
                </Show.Else>
            </Show>
        )
    }`