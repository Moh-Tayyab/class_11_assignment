// ChildComponent.tsx
import React from 'react';

const ChildComponent = (props: { name?: string; email?: string; hobbies?: string[] }) => {
  return (
    <div>
      {props.name && <p>Name: {props.name}</p>}
      {props.email && <p>Email: {props.email}</p>}
      {props.hobbies && (
        <div>
          <p>Hobbies:</p>
          <ul>
            {props.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChildComponent;
