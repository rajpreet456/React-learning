import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numbers) str += "0123456789"
    if (character) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numbers, character])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  // 🔥 useRef + Copy logic
  const copyPassword = () => {
    if (!passwordRef.current) return

    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0, 99999) // mobile support
    navigator.clipboard.writeText(passwordRef.current.value)

    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center">

      <h1 className="text-white text-center my-3 text-2xl font-bold">
        Password Generator
      </h1>

      {/* Input + Button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4 w-full max-w-md">
        <input
          ref={passwordRef}
          type="text"
          value={password}
          placeholder="Your password will appear here"
          readOnly
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 focus:outline-none"
        />

        <button
          onClick={copyPassword}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Controls in ONE LINE */}
      <div className="flex items-center justify-between w-full max-w-md text-white gap-x-4">

        {/* Slider */}
        <input
          type="range"
          min="6"
          max="100"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="cursor-pointer flex-1"
        />

        {/* Length */}
        <label className="whitespace-nowrap">
          {length}
        </label>

        {/* Numbers */}
        <div className="flex items-center gap-x-1 whitespace-nowrap">
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(prev => !prev)}
          />
          <label>Number</label>
        </div>

        {/* Symbols */}
        <div className="flex items-center gap-x-1 whitespace-nowrap">
          <input
            type="checkbox"
            checked={character}
            onChange={() => setCharacter(prev => !prev)}
          />
          <label>Symbol</label>
        </div>

      </div>

    </div>
  )
}

export default App