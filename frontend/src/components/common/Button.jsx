import React from 'react'

function Button({label, variant, icon, styles, handleClick}) {
  return (
    <button className={`py-2 px-4 outline-none rounded-[10px] ${
      variant === "outline" ? "border border-black text-black bg-white hover:bg-black hover:text-white transition" : "bg-black border-none text-white font-bold"
    } ${
      icon ? "inline-flex justify-between gap-2 items-center" : null
    } ${
      styles && styles
    }`} onClick={()=> handleClick()}>
      {label}
      {icon && icon}
    </button>
  )
}

export default Button