import { Icon } from '@iconify/react'

const Field = ({ name, placeholder, leftIcon, inputType }) => {
  return (
    <div className='flex-center flex-col w-full gap-y-3'>
      <label 
        htmlFor={name} 
        className="text-sm text-gray-400 text-left w-full"> { name.charAt(0).toUpperCase() + name.slice(1) } </label>
      
      <div className='bg-[#0E1016] flex flex-row text-white items-center w-full rounded'>
        <Icon 
        icon={leftIcon}
        color={'gray'}
        className="h-10 w-10 px-2" />

        <input 
          type={inputType} 
          id={name} 
          placeholder={placeholder} 
          className='h-10 bg-[#0E1016] text-sm pl-2 w-full' />
      </div>
    </div>
  );
}
 
export default Field;