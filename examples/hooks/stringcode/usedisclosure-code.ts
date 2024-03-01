export const UseDisclosureCodeString=`
    export function App() {
        const { isOpen, open, close, toggle } = useDisclosure();
        
        return (
            <div>
                <button onClick={open}>Open Modal</button>
                <button onClick={close}>Close Modal</button>
                <button onClick={toggle}>Toggle Modal</button>
                <Show>
                    <Show.When isTrue={isOpen}>
                        <div>
                            Modal content
                        </div>
                    </Show.When>
                </Show>
            </div>
        )
    }
    `