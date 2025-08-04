import { ReactNode, FC } from 'react';
import { Caret } from '../../../assets/icons/about';
import { programHeaderText } from '../../our_programs/programs';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  itemId: number;
  handleToggle: (id: number) => void;
  isLast: boolean;
}

export const AccordionItem: FC<AccordionItemProps> = ({ title, children, isActive, itemId, handleToggle, isLast }) => {
  return (
    <div className={`py-[16px] px-[12px] ${!isLast && 'border-b-1 border-[#C3D1C9]'}`}>
      <button
        onClick={() => handleToggle(itemId)}
        className="w-full flex justify-between items-center p-4 font-medium text-left"
        // aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
      >
        <span className={programHeaderText}>
          {title}
        </span>
        {/* <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        /> */}
        <img src={Caret} alt="caret-icon" className={`${isActive && 'rotate-180'}`} />
      </button>
      {isActive && (
        <div
          id={`accordion-content-${title}`}
          className="px-4 py-2 text-gray-700"
        >
          {children}
        </div>
      )}
    </div>
  );
};