import { Switch } from '@headlessui/react';

type DarkModeToggleProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function DarkModeToggle({ darkMode, setDarkMode }: DarkModeToggleProps): JSX.Element {
  const handleToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
  };

  return (
    <Switch
      checked={darkMode}
      onChange={handleToggle}
      className={classNames(
        darkMode ? 'bg-white' : 'bg-grey',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-grad-light-1 dark:focus:ring-grad-light-2 focus:ring-offset-2 dark:ring-offset-black ring-offset-white'
      )}
    >
      <span
        className={classNames(
          darkMode ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black text-black dark:text-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            darkMode ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <i className="bi bi-sun translate-y-[1px]"></i>
        </span>
        <span
          className={classNames(
            darkMode ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <i className="bi bi-moon text-[12px] md:translate-x-[1px] md:translate-y-[1px]"></i>
        </span>
      </span>
    </Switch>
  );
}
