import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { Input } from '../ui/input';
import { Link } from 'react-router-dom';
import { Each, Show, useDisclosure } from 'react-powerpack';
import { useState } from 'react';







interface Item {
    term: string
    to: string
}

const ItemsData: Item[] = [
    { term: '<Show />', to: '/components/show' },
    { term: '<Each />', to: '/components/each' },
    { term: '<ClickOutSide />', to: '/components/clickoutsidecomponent' },
    { term: 'useApi', to: '/hooks/useapi' },
    { term: 'useAsync', to: '/hooks/useasync' },
    { term: 'useLastCallback', to: '/hooks/uselastcallback' },
    { term: 'useTimeout', to: '/hooks/usetimeout' },
    { term: 'useClickOutside', to: '/hooks/useclickoutside' },
    { term: 'useDisclosure', to: '/hooks/usedisclosure' },
    { term: 'useToggle', to: '/hooks/usetoggle' }
];

const DefaultItems: Item[] = [
    { term: 'Components', to: '/components/def' },
    { term: 'Hooks', to: '/hooks/def' },
]


export default function SearchDoc({ trigger }: { trigger: JSX.Element }) {


    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Item[]>(DefaultItems);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        if (term.length === 0) {
            setSearchResults([])
            setSearchTerm('')
        }
        else {
            setSearchTerm(term);
            filterResults(term);
        }
    }

    const filterResults = (term: string) => {
        const filteredResults = ItemsData.filter(Item =>
            Item.term.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(filteredResults);
    }

    const { isOpen, close, toggle } = useDisclosure(false);




    return (
        <AlertDialog onOpenChange={toggle} open={isOpen}  >
            <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
            <AlertDialogOverlay className='' onClick={close}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <Input
                            type='text'
                            value={searchTerm}
                            onChange={handleChange}
                            placeholder='Search...'
                            className='w-full m-0 dark:hover:border-white border-dark'
                            autoFocus
                        />
                        <ul>
                            <Show>
                                <Show.When isTrue={searchResults.length > 0}>
                                    <Each of={searchResults} render={(item, index) =>
                                        <Link to={item.to} key={index} onClick={close}>
                                            <li className='bg-secondary p-3 m-2 rounded-lg' key={item.to}>
                                                {item.term}
                                            </li>
                                        </Link>
                                    } />
                                </Show.When>
                            </Show>

                        </ul>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}