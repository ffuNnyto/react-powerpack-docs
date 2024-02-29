import ExampleClickOutsideComponent from './examples/example-clickoutside';
import ExampleEach from './examples/example-each';
import ExampleInfiniteLoader from './examples/example-infiniteloader';
import ExampleShow from './examples/example-show';
import ExampleTextFit from './examples/example-textfit';
import { ClickOutsideComponentCodeString } from './string-code/clickoutside-code';
import { EachCodeString } from './string-code/each-code';
import { InfiniteLoaderCodeString } from './string-code/infiniteloader-code';
import { ShowCodeString } from './string-code/show-code';
import { TextFitCodeString } from './string-code/textfit-code';




interface IComponentConfig {
    title: string
    description: string
    source_code: string
    import_code: string
    import_style: React.CSSProperties,
    code_style: React.CSSProperties,
    precomponent_info?: React.ReactNode
    example_source_url: string
    example_code: string
    example_component: React.ReactNode
}

const ImportStyle = {
    backgroundColor: '',
    borderRadius: '2px',
    padding: 10,
    margin: 5,
    display: ''
}

const CodeStyle = {
    borderRadius: '2px',
    padding: 0,
    margin: 0,
}


const GITHUB_SOURCE_COMPONENTS_BASE_URL = process.env.GITHUB_SOURCE_COMPONENTS_BASE_URL;
const COMPONENT_IMPORT_BASE_URL = process.env.COMPONENT_IMPORT_BASE_URL;
const GITHUB_DOCS_EXAMPLE = process.env.GITHUB_DOCS_COMPONENTS_EXAMPLE;

const componentExamples: { [key: string]: IComponentConfig } = {
    'show': {
        title: 'Show',
        description: 'Conditional Renderer',
        source_code: `${GITHUB_SOURCE_COMPONENTS_BASE_URL}/show/show.tsx`,
        import_code: `${COMPONENT_IMPORT_BASE_URL} Show } from 'react-powerpack'`,
        code_style: CodeStyle,
        import_style: ImportStyle,
        example_code: ShowCodeString,
        example_source_url: `${GITHUB_DOCS_EXAMPLE}/example-show.tsx`,
        example_component: <ExampleShow />
    },
    'each': {
        title: 'Each',
        description: 'Dynamic List Renderer',
        source_code: `${GITHUB_SOURCE_COMPONENTS_BASE_URL}/foreach/each.ts`,
        import_code: `${COMPONENT_IMPORT_BASE_URL} Each } from 'react-powerpack'`,
        code_style: CodeStyle,
        import_style: ImportStyle,
        example_code: EachCodeString,
        example_source_url: `${GITHUB_DOCS_EXAMPLE}/example-each.tsx`,
        example_component: <ExampleEach />
    },
    'clickoutsidecomponent': {
        title: 'ClickOutsideComponent',
        description: 'Component for handling external clicks',
        source_code: `${GITHUB_SOURCE_COMPONENTS_BASE_URL}/clickoutsidecomponent/clickoutsidecomponent.tsx`,
        import_code: `${COMPONENT_IMPORT_BASE_URL} ClickOutsideComponent } from 'react-powerpack'`,
        code_style: CodeStyle,
        import_style: ImportStyle,
        example_code: ClickOutsideComponentCodeString,
        example_source_url: `${GITHUB_DOCS_EXAMPLE}/example-clickoutside.tsx`,
        example_component: <ExampleClickOutsideComponent />
    },
    'textfit': {
        title: 'TextFit',
        description: 'Component for autoresizing text',
        source_code: `${GITHUB_SOURCE_COMPONENTS_BASE_URL}/textfit/textfit.tsx`,
        import_code: `${COMPONENT_IMPORT_BASE_URL} TextFit } from 'react-powerpack'`,
        code_style: CodeStyle,
        import_style: ImportStyle,
        example_code: TextFitCodeString,
        example_source_url: `${GITHUB_DOCS_EXAMPLE}/example-textfit.tsx`,
        example_component: <ExampleTextFit />
    },
    'infiniteloader': {
        title: 'InfiniteLoader',
        description: 'Component for updating data on scroll',
        source_code: `${GITHUB_SOURCE_COMPONENTS_BASE_URL}/infiniteloader/infiniteloader.tsx`,
        import_code: `${COMPONENT_IMPORT_BASE_URL} InfiniteLoader } from 'react-powerpack'`,
        code_style: CodeStyle,
        import_style: ImportStyle,
        example_code: InfiniteLoaderCodeString,
        example_source_url: `${GITHUB_DOCS_EXAMPLE}/example-infiniteloader.tsx`,
        example_component: <ExampleInfiniteLoader />
    }
};

// Función para obtener un componente por nombre
export const getComponentByName = (name: string) => {
    return componentExamples[name] || componentExamples['show'];
};