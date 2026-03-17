import { ReactNode, FC, memo } from 'react';
import { Caret } from '../../../assets/icons/about';
import { programHeaderText } from '../../our_programs/ProgramSection';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  itemId: number;
  handleToggle: (id: number) => void;
  isLast: boolean;
}

const AccordionItemComponent: FC<AccordionItemProps> = ({ title, children, isActive, itemId, handleToggle, isLast }) => {
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
        <img src={Caret} alt="caret-icon" className={`transition-transform duration-300 ${isActive && 'rotate-180'}`} />
      </button>
      <div
        id={`accordion-content-${title}`}
        className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-2 text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export const AccordionItem = memo(AccordionItemComponent);