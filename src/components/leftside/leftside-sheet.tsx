import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/src/components/ui/sheet'
import { ReactNode } from 'react'
import LeftSide from './leftside'

export default function LeftSideSheet({ trigger }: { trigger: ReactNode }) {
    return (
        <Sheet>
            <SheetTrigger>{trigger}</SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                    <LeftSide mobile={true} />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}