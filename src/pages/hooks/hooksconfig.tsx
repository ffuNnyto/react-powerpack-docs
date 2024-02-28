
import ExampleHookUseApi from './examples/example-useapi';
import ExampleUseAsync from './examples/example-useasync';
import ExampleClickOutSide from './examples/example-useclickoutside';
import ExampleUseDisclosure from './examples/example-usedisclosure';
import ExampleUseLastCallback from './examples/example-uselastcallback';
import ExampleUseLocalStorage from './examples/example-uselocalstorage';
import ExampleUseTimeOut from './examples/example-usetimeout';
import ExampleUseToggle from './examples/example-usetoggle';
import { UseApiCodeString } from './string-code/useapi-code';
import { UseAsyncCodeString } from './string-code/useasync-code';
import { UseClickOutSideCodeString } from './string-code/useclickoutside-code';
import { UseDisclosureCodeString } from './string-code/usedisclosure-code';
import { UseLastCallbackCodeString } from './string-code/uselastcallback-code';
import { UseLocalStorageCodeString } from './string-code/uselocalstorage-code';
import { UseTimeOutCodeString } from './string-code/usetimeout-code';
import { UseToggleCodeString } from './string-code/usetoggle-code';

interface IHookConfig {
    title: string;
    description: string;
    source_code: string;
    import_code: string;
    import_style: React.CSSProperties;
    code_style: React.CSSProperties;
    example_code: string;
    example_component: React.ReactNode;
}

export const ImportStyle = {
    backgroundColor: '',
    borderRadius: '2px',
    padding: 10,
    margin: 5,
    display: ''
}

export const CodeStyle = {
    borderRadius: '2px',
    padding: 0,
    margin: 0,

}

const GITHUB_SOURCE_HOOKS_BASE_URL = process.env.GITHUB_SOURCE_HOOKS_BASE_URL;
const HOOK_IMPORT_BASE_URL = process.env.COMPONENT_IMPORT_BASE_URL;

const hookExamples: { [key: string]: IHookConfig } = {
    'useapi': {
        title: 'useApi',
        description: 'Custom Axios Hook',
        source_code: `${GITHUB_SOURCE_HOOKS_BASE_URL}/useapi/useapi.ts`,
        import_code: `${HOOK_IMPORT_BASE_URL} useApi } from 'react-powerpack'`,
        import_style: ImportStyle,
        code_style: CodeStyle,
        example_code: UseApiCodeString,
        example_component: <ExampleHookUseApi />
    },
    'useasync': {
        title: 'useAsync',
        description: 'Handles asynchronous operations',
        source_code: `${GITHUB_SOURCE_HOOKS_BASE_URL}/useasync/useasync.ts`,
        import_code: `${HOOK_IMPORT_BASE_URL} useAsync } from 'react-powerpack'`,
        import_style: ImportStyle,
        code_style: CodeStyle,
        example_code: UseAsyncCodeString,
        example_component: <ExampleUseAsync />
    },
    'uselastcallback': {
        title: 'useLastCallback',
        description: 'Remembers the last callback function',
        source_code: `${GITHUB_SOURCE_HOOKS_BASE_URL}/usecallback/usecallback.ts`,
        import_code: `${HOOK_IMPORT_BASE_URL} useLastCallback } from 'react-powerpack'`,
        import_style: ImportStyle,
        code_style: CodeStyle,
        example_code: UseLastCallbackCodeString,
        example_component: <ExampleUseLastCallback />
    },
    'usetimeout': {
        title: 'useTimeOut',
        description: 'Executes a function after a delay',
        source_code: `${GITHUB_SOURCE_HOOKS_BASE_URL}/usetimeout/usetimeout.ts`,
        import_code: `${HOOK_IMPORT_BASE_URL} useTimeout } from 'react-powerpack'`,
        import_style: ImportStyle,
        code_style: CodeStyle,
        example_code: UseTimeOutCodeString,
        example_component: <ExampleUseTimeOut />
    },
    'useclickoutside': {
        title: 'useClickOutside',
        description: 'Hook for detecting clicks outside',
        source_code: `${GITHUB_SOURCE_HOOKS_BASE_URL}/useclickoutside/useclickoutside.ts`,
        import_code: `${HOOK_IMPORT_BASE_URL} useClickOutside } from 'react-powerpack'`,
        import_style: ImportStyle,
        code_style: CodeStyle,
        example_code: UseClickOutSideCodeString,
        example_component: <ExampleClickOutSide />
    },
    'usedisclosure': {
        title: 'useDisclosure',
        description: 'Manage modal or panel visibility',
        source_code: `${GITHUB_SOURCE_HOOKS_BASE_URL}/usedisclosure/usedisclosure.ts`,
        import_code: `${HOOK_IMPORT_BASE_URL} useDisclosure } from 'react-powerpack'`,
        import_style: ImportStyle,
        code_style: CodeStyle,
        example_code: UseDisclosureCodeString,
        example_component: <ExampleUseDisclosure />
    },
    'usetoggle': {
        title: 'useToggle',
        description: 'Toggle boolean state',
        source_code: `${GITHUB_SOURCE_HOOKS_BASE_URL}/usetoggle/usetoggle.ts`,
        import_code: `${HOOK_IMPORT_BASE_URL} useToggle } from 'react-powerpack'`,
        import_style: ImportStyle,
        code_style: CodeStyle,
        example_code: UseToggleCodeString,
        example_component: <ExampleUseToggle />
    },
    'uselocalstorage': {
        title: 'useLocalStorage',
        description: 'Manage localStorage data',
        source_code: `${GITHUB_SOURCE_HOOKS_BASE_URL}/uselocalstorage/uselocalstorage.ts`,
        import_code: `${HOOK_IMPORT_BASE_URL} useLocalStorage } from 'react-powerpack'`,
        import_style: ImportStyle,
        code_style: CodeStyle,
        example_code: UseLocalStorageCodeString,
        example_component: <ExampleUseLocalStorage />
    },
};

export const getHookByName = (name: string) => {
    return hookExamples[name] || hookExamples['useapi'];
};