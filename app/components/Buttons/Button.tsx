import React from 'react';

interface ButtonProps {
  text: string;
  type?: string;
  class?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      {props.type === 'link' ? (
        <a href='#trace' className={`border-[1px] border-black dark:border-white bold text-[24px] rounded-lg px-6 py-2 bg-gradient-to-r from-grad-light-1 to-grad-light-2 dark:from-grad-dark-1/50 dark:to-grad-dark-2/50 ${props.class}`}>
          {props.text}
        </a>
      ) : (
        <div>
          {props.text}
        </div>
      )}
    </>
  );
};

export default Button;
