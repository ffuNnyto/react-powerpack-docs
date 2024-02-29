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
import { NavComponents, NavHooks } from '../lib/nav';

interface Item {
    value: string
    url: string
    term?: string
}

const DefaultItems: Item[] = [
    { value: 'Components', url: '/components/def' },
    { value: 'Hooks', url: '/hooks/def' },
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

        let combineNavItems = [...NavComponents, ...NavHooks]
        const filteredResults = combineNavItems.filter(Item =>
            Item.value.toLowerCase().includes(term.toLowerCase())
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
                        <ul className='max-h-[400px] overflow-auto'>
                            <Show>
                                <Show.When isTrue={searchResults.length > 0}>
                                    <Each of={searchResults} render={(item, index) =>
                                        <Link to={item.url} key={index} onClick={close}>
                                            <li className='dark:bg-secondary bg-primary text-white dark:text-primary p-3 m-2 rounded-lg items-center' key={index}>
                                                <input checked={false} type='radio' />
                                                <span className='underline font-bold ml-2'>{item.term || item.value}</span>
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