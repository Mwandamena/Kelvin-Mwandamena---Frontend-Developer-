import { useState } from 'react'
import Button from '../../common/Button'

function Search() {

  // search state
  const [search, setSearch] = useState("")


  // handle submit function
  const handleSubmit = async (e) => {
    console.log("Search", search);
    e.preventDefault()
  }


  return (
    <form className='flex gap-2' onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name='search' id='search' placeholder='Search rockets' className='border-none outline-none py-2 px-3 w-full ring-[1px] ring-back rounded-[10px]' onChange={(e)=> {
        setSearch(e.target.value)
      }} />
      <Button variant={"outline"} label={"Search"} handleClick={()=> {}} />
    </form>
  )
}

export default Search