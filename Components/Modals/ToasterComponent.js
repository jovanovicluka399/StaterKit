import React from "react";
import toast, { Toaster } from 'react-hot-toast';

    const notify = () => toast.error('wow', {
      position: 'bottom-center',
    });


const ToasterComponent = (props) => {
  return (
     <div>
      <button onClick={() => notify(props.msg)}>TT</button>
      <Toaster />
    </div>
  );
};

export default ToasterComponent;
