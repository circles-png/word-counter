import { useRef, useState } from 'react'
import hash from 'utils/hash'

const App = () => {
  const characters = useRef<number>(0),
        textArea = useRef<HTMLTextAreaElement>(null),
        [ textHash, setTextHash ] = useState<number>(0),
        words = useRef<number>(0)
  return <>
    <div className='h-full p-4'>
      <div className='shadow-2xl border h-full rounded-xl p-4'>
        <header>
          <h1 className='font-semibold text-4xl'>word counter</h1>
          <h2 className='text-right text-gray-500'>(counts words)</h2>
        </header>
        <hr className='my-4' />
        <main>
          <div className='my-4 flex justify-between items-center'>
            <p className='text-3xl'>word count: you've barely written anything</p>
            <p className='text-center text-gray-500'>(paste your words here)</p>
          </div>
          <textarea
            className='w-full mx-auto border shadow-inner rounded-xl p-4'
            ref={textArea}
            onInput={() => {
              words.current = textArea.current?.value.split(' ').length || 0
              characters.current = textArea.current?.value.length || 0
              setTextHash(Math.abs(hash(textArea.current?.value || '')))
            }}
          />
          { textHash % 6 }
        </main>
      </div>
    </div>
  </>
}

export default App
