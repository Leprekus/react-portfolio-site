import React from 'react';
function ListItem({img, title, description}) {
  return (
    <div
      className='w-72 h-16 p-4 rounded-md 
    bg-slate-200
      flex gap-4
    '
    >
      <div className='w-9 h-9 rounded-md p-2
       bg-slate-300'>
        <img src={img} alt="skill" />
      </div>
      <div>
          <p className='text-black font-bold text-sm'>{ title }</p>
          <p className='text-slate-600 font-semibold text-xs'>{ description }</p>
      </div>
    </div>
  );
}

export default ListItem;
