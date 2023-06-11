'use client'

import { Tab } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import Button from '../Buttons/Button';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function TextAreaTrace() {
    const [textareaValue, setTextareaValue] = useState('');
    const [traceInfo, setTraceInfo] = useState(false)

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);
    };

    const handleClick = () => {
        setTraceInfo(true)
        alert(`Oh my god you traced: ${textareaValue}`)
    }

  return (
    <form action="#" className='w-full'>
      <Tab.Group>
        <Tab.List className="flex items-center">
            <Tab
            className={({ selected }) =>
                classNames(
                selected
                    ? 'bg-gradient-to-r from-grad-light-1 to-grad-light-2 text-black hover:bg-gray-200'
                    : 'bg-white border-[1px] border-grey hover:text-gradient text-gray-500 hover:bg-white hover:text-black',
                'rounded-md min-w-[80px] px-3 py-1.5 text-sm semibold'
                )
            }
            >
            Write
            </Tab>
            <Tab
            className={({ selected }) =>
                classNames(
                selected
                    ? 'bg-gradient-to-r from-grad-light-1 to-grad-light-2 text-black hover:bg-gray-200'
                    : 'bg-white border-[1px] border-grey hover:text-gradient text-gray-500 hover:bg-white hover:text-black',
                'ml-2 rounded-md min-w-[80px] px-3 py-1.5 text-sm semibold'
                )
            }
            >
            Preview
            </Tab>

        </Tab.List>
        <Tab.Panels className="mt-2">
            <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
            <label htmlFor="comment" className="sr-only">
                Comment
            </label>
            <div>
                <textarea
                    rows={3}
                    name="trace-area"
                    id="trace-area"
                    className="px-3 block bg-white/70 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-grey placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grad-light-1 dark:focus:ring-grad-light-2 sm:text-[16px] sm:leading-6"
                    placeholder="Write your text to record on the blockchain"
                    value={textareaValue}
                    onChange={handleTextareaChange}
                />
            </div>
            </Tab.Panel>
            <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
            <div className="border-b border-grey">
                <div className="px-3 pt-2 pb-12 mx-px mt-px text-[18px]">
                    {textareaValue}
                </div>
            </div>
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="flex justify-center mt-8">
        <Button 
            text='Blockchain your text'
            type='button'
            onClick={handleClick}
        />
      </div>
      {traceInfo && (
        <div className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2'>
            <div className='w-full h-full cursor-default border-[1px] border-grey px-8 py-4 text-center rounded-md hover:shadow-lg hover:-translate-y-1 transition'>
                <h4 className='bold text-[18px]'>Transaction cost</h4>
                <p>0.0000023 SOL or 0.00001 $</p>
            </div>
            <div className='w-full h-full cursor-default border-[1px] border-grey px-8 py-4 text-center rounded-md hover:shadow-lg hover:-translate-y-1 transition'>
                <h4 className='bold text-[18px]'>Transaction link</h4>
                <a href='https://solscan.io/' className='text-gradient bold'>{'https://solscan.io/hn2fg9z'.slice(0, 25)}...</a>
            </div>
        </div>
      )}
    </form>
  )
}