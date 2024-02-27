import { CodeStyle, ImportStyle } from '../components';
import ExampleClickOutsideComponent from './examples/example-clickoutside';
import ExampleEach from './examples/example-each';
import ExampleShow from './examples/example-show';


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


export const getComponentByName = (name: string) => {
    const components: { [key: string]: IComponentConfig } = {
        'show': {
            title: 'Show',
            description: 'Conditional Renderer',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/components/show/show.tsx',
            import_code: `import { Show } from 'react-powerpack'`,
            import_style: ImportStyle,
            code_style: CodeStyle,
            example_code: `
    export function App() {

        const [visible,setVisible] = useState(false)
                
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
    }`,
            example_component: <ExampleShow />
        },
        'each': {
            title: 'Each',
            description: 'Dynamic List Renderer',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/components/foreach/each.ts',
            import_code: `import { Each } from 'react-powerpack'`,
            import_style: ImportStyle,
            code_style: CodeStyle,
            example_code: `
    export function App() {
        
        const [nums,setNums] = useState([0,1,2,3,4,5])
            
        return(
                <Each of={nums} render={(num, index) => 
                    <div>
                        render {num}
                    </div>
            
                } />
        )
    }`,
            example_component: <ExampleEach />
        },
        'clickoutsidecomponent': {
            title: 'ClickOutsideComponent',
            description: 'Component for handling external clicks',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/components/clickoutsidecomponent/clickoutsidecomponent.tsx',
            import_code: `import { ClickOutsideComponent } from 'react-powerpack'`,
            import_style: ImportStyle,
            code_style: CodeStyle,
            example_code: `
    export function App() {
        
        const [text, setText] = useState('Click me')

        const onClickOutside = () => {
            setText('You Click Outside,Click me again')
        }
            
        return(
                <ClickOutsideComponent onClickOutside={onClickOutside}>
                    <button onClick={()=>setText('Click me')}>
                        {text}
                    </button>
                </ClickOutsideComponent>
        )
    }`,
            example_component: <ExampleClickOutsideComponent />
        }
    };

    return components[name] || components['show'];
};
