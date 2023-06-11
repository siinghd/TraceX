import React from 'react';

interface ButtonProps {
  text: string;
  href?: string;
  type: string;
  class?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      {props.type === 'link' ? (
        <a href={props.href} className={`border-[1px] border-black dark:border-white select-none bold text-[24px] rounded-lg px-6 py-2 bg-gradient-to-r from-grad-light-1 to-grad-light-2 dark:from-grad-dark-1/50 dark:to-grad-dark-2/50 ${props.class}`}>
          {props.text}
        </a>
      ) : (
        <div 
          onClick={props.onClick}
          className={`border-[1px] cursor-pointer border-black dark:border-white select-none bold text-[24px] rounded-lg px-6 py-2 bg-gradient-to-r from-grad-light-1 to-grad-light-2 dark:from-grad-dark-1/50 dark:to-grad-dark-2/50 ${props.class}`}
        >
          {props.text}
        </div>
      )}
    </>
  );
};

export default Button;
