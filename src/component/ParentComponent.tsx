// ParentComponent.tsx
import React from 'react';
import ChildComponent from '@/component/ChildComponent';

const ParentComponent = () => {
  const name = 'Muhammad Tayyab';
  const email = 'm.tayyab1263@gmail.com';
  const hobbies = ['reading', 'coding', 'gaming'];

  return (
    
    <div className="grid justify-center font-serif text-4xl ">
      <ChildComponent name={name} email={email} hobbies={hobbies} />
    </div>
  );
};

export default ParentComponent;
