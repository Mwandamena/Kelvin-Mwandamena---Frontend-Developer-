import { useEffect, useRef, useState } from 'react'
import Button from '../../common/Button'

function Search({handleSearch}) {

  // search state
  const [search, setSearch] = useState("")

  const api = "https://api.spacexdata.com/v3/rockets"
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJ1c2VyIjoiTXdhbmRhbWVuYSIsInJvbGUiOiJhZG1pbiJ9.XrX2vLm4zDE6zLXnQiqVP5jYWi2TYQ2ZvLJH3Toet1A"

  const inputRef = useRef()

  useEffect(()=>{
    const timer = setTimeout(() => {
      if(inputRef.current.value === search){
        fetch(api, {
          method: "GET",
          "Content-Type": "application/json"
        })
      }
    }, 500);

    return () => {
      clearTimeout(timer)
    }
  }, [search, inputRef])


  // handle submit function
  const handleSubmit = async (e) => {
    handleSearch(search);
    e.preventDefault()
  }


  return (
    <form className='flex gap-2' onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name='search' id='search' placeholder='Search rockets' className='border-none outline-none py-2 px-3 w-full ring-[1px] ring-back rounded-[10px]' onChange={(e)=> {
        setSearch(e.target.value)
      }} ref={inputRef} />
      <Button variant={"outline"} label={"Search"} handleClick={()=> {}} />
    </form>
  )
}

export default Search