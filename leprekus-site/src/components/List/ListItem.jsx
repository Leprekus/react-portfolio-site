import React from 'react';
function ListItem({img, title, description}) {
  return (
    <div
      className='w-72 h-16 p-4 rounded-md bg-slate-200
      flex gap-4
      lg:flex-col lg:w-32 lg:h-40 lg:items-center lg:text-center

      hover:-translate-y-1 hover:ease-in hover:delay-75 hover:drop-shadow
      transition-all 
      '
    >
      <div className='w-9 h-9 rounded-md p-2 lg:w-12 lg:h-12
       bg-slate-300 shadow-inner'>
        <img src={img} alt="skill" />
      </div>
      <div>
          <p className='text-black font-bold text-sm lg:mb-1.5'>{ title }</p>
          <p className='text-slate-600 font-semibold text-xs'>{ description }</p>
      </div>
    </div>
  );
}

export default ListItem;
