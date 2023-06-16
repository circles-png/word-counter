import { useRef, useState } from 'react'
import hash from 'utils/hash'

const App = () => {
  const characters = useRef<number>(0),
        textArea = useRef<HTMLTextAreaElement>(null),
        [ textHash, setTextHash ] = useState<number>(0),
        words = useRef<number>(0)
  return <>
    <div className='h-full p-4'>
      <div className='shadow-2xl border h-full rounded-xl p-4 flex flex-col'>
        <header>
          <h1 className='font-semibold text-4xl'>word counter</h1>
          <h2 className='text-right text-gray-500'>(counts words)</h2>
        </header>
        <hr className='my-4' />
        <main className='flex flex-col gap-4 grow'>
          <div className='flex justify-between items-center'>
            <p className='text-3xl font-extralight'>
              <span className='font-semibold'>word count:</span>
              {` ${(() => {
                const responses = (() => {
                  if (words.current < 1)
                    return [
                      'that is literally nothing'
                    ]
                  if (words.current < 10)
                    return [
                      'not a lot',
                      'count it yourself it\'s not hard',
                      'you\'re not even trying',
                      'you\'ve barely started',
                      'you\'ve barely written anything',
                      'have you even started',
                      'come on what is that',
                      'you can do better than this',
                      'you should be able to count this yourself',
                      'you can do better',
                      'you\'ve got to be kidding me',
                      'better than nothing i guess'
                    ]
                  if (words.current < 100)
                    return [
                      'roughly a two digit number',
                      'probably not enough',
                      'you\'re very far from done',
                      'this is like 10% effort',
                      'will this not fail you?',
                      'not even half a page',
                      'more than zero',
                      'you\'ve failed',
                      'you call this an essay?',
                      'your IQ is probably around your word count',
                      'congratulations you\'ve written a sentence'
                    ]
                  return ['probably enough']
                })()
                return responses[textHash % responses.length]
              })()}`}
            </p>
            <p className='text-center text-gray-500'>(paste your words here)</p>
          </div>
          <textarea
            className='w-full border shadow-inner rounded-xl p-4 resize-none block grow'
            ref={textArea}
            onInput={() => {
              words.current = textArea.current?.value.split(' ').filter(Boolean).length || 0
              characters.current = textArea.current?.value.length || 0
              setTextHash(Math.abs(hash(textArea.current?.value || '')))
            }}
          />
        </main>
      </div>
    </div>
  </>
}

export default App
