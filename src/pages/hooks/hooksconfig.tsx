import ExampleHookUseApi from './examples/example-useapi';
import ExampleUseAsync from './examples/example-useasync';
import ExampleClickOutSide from './examples/example-useclickoutside';
import ExampleUseDisclosure from './examples/example-usedisclosure';
import ExampleUseLastCallback from './examples/example-uselastcallback';
import ExampleUseTimeOut from './examples/example-usetimeout';
import ExampleUseToggle from './examples/example-usetoggle';



interface IComponentConfig {
    title: string
    description: string
    source_code: string
    import_code: string
    import_style: React.CSSProperties,
    code_style: React.CSSProperties,
    example_code: string
    example_component: React.ReactNode
}


export const getHookByName = (name: string) => {
    const components: { [key: string]: IComponentConfig } = {
        'useapi': {
            title: 'useApi',
            description: 'Custom Axios Hook',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/hooks/useapi/useapi.ts',
            import_code: `import { useApi } from 'react-powerpack'`,
            import_style: {
                backgroundColor: 'white',
                borderRadius: '2px',
                padding: 2,
                margin: 2,
                display: 'inline-flex'
            },
            code_style: {
                borderRadius: '2px',
                padding: 0,
                margin: 0,
                background: 'rgba(0,0,0,0.5)'
            },
            example_code: `
let customRequest = useApi('https://randomuser.me/api/', 'get', { useCredentials: true })

let { request, data, error } = useApi('https://randomuser.me/api/', 'get')

let { request, data, error } = useApi('https://randomuser.me/api/', 'get', { useCredentials: true, authorization: { scheme: 'Bearer', token: 'YOUR_TOKEN' } })
`,
            example_component: <ExampleHookUseApi />
        },
        'useasync': {
            title: 'useAsync',
            description: 'Handles asynchronous operations',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/hooks/useasync/useasync.ts',
            import_code: `import { useAsync } from 'react-powerpack'`,
            import_style: {
                backgroundColor: 'white',
                borderRadius: '2px',
                padding: 2,
                margin: 2,
                display: 'inline-flex'
            },
            code_style: {
                borderRadius: '2px',
                padding: 0,
                margin: 0,
                background: 'rgba(0,0,0,0.5)'
            },
            example_code: `
function App() {

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
            
    )
}`,
            example_component: <ExampleUseAsync />
        },
        'uselastcallback': {
            title: 'useLastCallback',
            description: 'Remembers the last callback function',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/hooks/usecallback/usecallback.ts',
            import_code: `import { useLastCallback } from 'react-powerpack'`,
            import_style: {
                backgroundColor: 'white',
                borderRadius: '2px',
                padding: 2,
                margin: 2,
                display: 'inline-flex'
            },
            code_style: {
                borderRadius: '2px',
                padding: 0,
                margin: 0,
                background: 'rgba(0,0,0,0.5)'
            },
            example_code: `
function App() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const lastIncrement = useLastCallback(increment);
    
    return (
        <div className='p-5 items-center border-2 rounded-xl flex'>
            <p >Count: {count}</p>
            <button className='ml-4' variant='secondary' onClick={increment}>Increment</button>
            <button className='ml-4' variant='secondary' onClick={lastIncrement}>Last Increment</button>
        </div>
            
    )
}`,
            example_component: <ExampleUseLastCallback />
        },
        'usetimeout': {
            title: 'useTimeOut',
            description: 'Executes a function after a delay',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/hooks/usetimeout/usetimeout.ts',
            import_code: `import { useTimeOut } from 'react-powerpack'`,
            import_style: {
                backgroundColor: 'white',
                borderRadius: '2px',
                padding: 2,
                margin: 2,
                display: 'inline-flex'
            },
            code_style: {
                borderRadius: '2px',
                padding: 0,
                margin: 0,
                background: 'rgba(0,0,0,0.5)'
            },
            example_code: `
function App() {

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
}`,
            example_component: <ExampleUseTimeOut />
        },
        'useclickoutside': {
            title: 'useClickOutside',
            description: 'Hook for detecting clicks outside',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/hooks/useclickoutside/useclickoutside.ts',
            import_code: `import { useClickOutside } from 'react-powerpack'`,
            import_style: {
                backgroundColor: 'white',
                borderRadius: '2px',
                padding: 2,
                margin: 2,
                display: 'inline-flex'
            },
            code_style: {
                borderRadius: '2px',
                padding: 0,
                margin: 0,
                background: 'rgba(0,0,0,0.5)'
            },
            example_code: `
function App() {

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
}`,
            example_component: <ExampleClickOutSide />
        },
        'usedisclosure': {
            title: 'useDisclosure',
            description: 'Manage modal or panel visibility',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/hooks/usedisclosure/usedisclosure.ts',
            import_code: `import { useDisclosure } from 'react-powerpack'`,
            import_style: {
                backgroundColor: 'white',
                borderRadius: '2px',
                padding: 2,
                margin: 2,
                display: 'inline-flex'
            },
            code_style: {
                borderRadius: '2px',
                padding: 0,
                margin: 0,
                background: 'rgba(0,0,0,0.5)'
            },
            example_code: `
function App() {

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
}`,
            example_component: <ExampleUseDisclosure />
        },
        'usetoggle': {
            title: 'useDisclosure',
            description: 'Toggle boolean state',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/hooks/usetoggle/usetoggle.ts',
            import_code: `import { useDisclosure } from 'react-powerpack'`,
            import_style: {
                backgroundColor: 'white',
                borderRadius: '2px',
                padding: 2,
                margin: 2,
                display: 'inline-flex'
            },
            code_style: {
                borderRadius: '2px',
                padding: 0,
                margin: 0,
                background: 'rgba(0,0,0,0.5)'
            },
            example_code: `
function App() {

    const [isToggled, setToggle] = useToggle(false);
    
    
    return (
        <div>
            <button onClick={setToggle}>Toggle</button>
            {isToggled ? <div>Toggle is ON</div> : <div>Toggle is OFF</div>} 
        </div>
            
    )
}`,
            example_component: <ExampleUseToggle />
        }

    };

    return components[name] || components['useapi'];
};
