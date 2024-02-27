import { Input } from '@/components/ui/input'
export function Search({ value, setValue }: { value?: string, setValue?: React.Dispatch<React.SetStateAction<string>> }) {

  return (
    <div>
      <Input
        value={value}
     
        type='search'
        placeholder='Search...'
        className='md:w-[100px] lg:w-[300px]'
      />
    </div>
  )
}