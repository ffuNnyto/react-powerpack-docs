import { CodeStyle, IComponentConfig, ImportStyle } from '../components';
import ExampleClickOutsideComponent from './examples/example-clickoutside';
import ExampleEach from './examples/example-each';
import ExampleInfiniteLoader from './examples/example-infiniteloader';
import ExampleShow from './examples/example-show';
import ExampleTextFit from './examples/example-textfit';


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
        },
        'textfit': {
            title: 'TextFit',
            description: 'Component for autoresizing text',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/components/textfit/textfit.tsx',
            import_code: `import { TextFit } from 'react-powerpack'`,
            import_style: ImportStyle,
            code_style: CodeStyle,
            example_code: `
    export function App() {
        
      
            
        return(
                <>
                    <div style={{width:200,height:50}}>
                        <TextFit>Hello World</TextFit>
                    </div>
                    <div style={{width:200,height:100}}>
                        <TextFit>Hello World</TextFit>
                    </div>
                    <div style={{width:200,height:150}}>
                        <TextFit>Hello World</TextFit>
                    </div>
                </>
        )
    }`,

            example_component: <ExampleTextFit />
        },
        'infiniteloader': {
            title: 'InfiniteLoader',
            description: 'Component for updating data on scroll',
            source_code: 'https://github.com/ffuNnyto/react-powerpack/blob/main/src/components/infiniteloader/infiniteloader.tsx',
            import_code: `import { InfiniteLoader } from 'react-powerpack'`,
            import_style: ImportStyle,
            code_style: CodeStyle,
            example_code: `
    export function App() {
        const [numbers, setNumbers] = useState<number[]>(Array.from({ length: 10 }, (_, i) => i + 1));
        const [isLoading, setIsLoading] = useState<boolean>(false);

        const handleLoadMore = () => {
            setIsLoading(true);
            setNumbers(prevNumbers => [...prevNumbers, ...Array.from({ length: 10 }, (_, i) => prevNumbers.length + i + 1)]);
            setIsLoading(false);
        }

        const CustomLoader = () => {
            return <div>Loading...</div>;
        }

        const renderContent = () => {
            return (
                <ul>
                    <Each of={numbers} render={(number, idx) =>
                        <li key={idx}>
                            item: {number} with index: {idx}
                        </li>
                    } />
                </ul>
            );
        };
        
      
            
        return(
            <div style={{overflow:'auto',maxHeight:'200px'}}>
                <InfiniteLoader
                    onLoadMore={handleLoadMore}
                    isLoading={isLoading}
                    renderContent={renderContent}
                    loadingComponent={<CustomLoader />}
                />
            </div>
        )
    }`,

            example_component: <ExampleInfiniteLoader />
        }
    };

    return components[name] || components['show'];
};
