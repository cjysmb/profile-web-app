import { FC, memo } from 'react';
import { ProgramProps, ProgramItemProps, DetailsProps } from './types';
import Quote from '../../assets/icons/programs/quote.svg';
import { defaultTextClass } from '../../styles/common';

interface ProgramCardProps {
  program: ProgramProps;
}

const defaultBoldText = "text-[#2D302D] font-bold text-[14px] md:text-[16px]";
const defaultSemiBoldText = "text-[#2D302D] font-semibold text-[14px] md:text-[16px]";
const programHeaderText = "text-[#5B7D7E] font-bold text-[18px]";

const currencyFormat = (value: number) => {
  const currency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).formatToParts(value);

  return currency
    .map((part) => {
      if (part.type === 'currency') return 'PHP ';
      if (part.type === 'group') return ",";
      return part.value;
    })
    .join('');
};

const isDetailValueNumber = (value: unknown): boolean => {
  return typeof value === "number";
};

const ProgramCardComponent: FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="flex w-full flex-col items-center lg:flex-row lg:items-start">
      <div className="lg:w-[100px]">
        <img src={program.icon} alt={program.title} loading="lazy" className="w-16 h-16" />
      </div>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="mt-4 w-full xl:w-[60%] 2xl:w-[70%]">
            <div className="text-center lg:text-left">
              <span className={programHeaderText}>
                {program.title}
              </span>
            </div>
            <ul className="space-y-3 mt-[12px] md:mt-[20px] list-none">
              {program.items.map((list: ProgramItemProps, index: number) => (
                list.subItem.length > 0 ? (
                  <li className="w-full" key={`program-list-${index}`}>
                    <div className="flex items-start">
                      <div className="mt-2 mr-4 w-2 h-2 bg-[#728C69] rounded-full shrink-0" />
                      <span className={defaultTextClass}>
                        {list.mainItem}
                      </span>
                    </div>
                    <ul className="mt-[12px] ml-[24px] list-none">
                      {list.subItem.map((subItem, subIndex) => (
                        <li className="flex items-start" key={`program-sub-list-${index}-${subIndex}`}>
                          <div className="mt-2 mr-4 w-2 h-2 bg-[#728C69] rounded-full shrink-0" />
                          <span className={defaultTextClass}>
                            {subItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="flex items-start" key={`program-list-${index}`}>
                    <div className="mt-2 mr-4 w-2 h-2 bg-[#728C69] rounded-full shrink-0" />
                    <span className={defaultTextClass}>
                      {list.mainItem}
                    </span>
                  </li>
                )
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full mt-[16px] md:mt-[20px] xl:w-[40%] rounded-[16px] border border-[#EAF8F8] bg-[#EAF8F8] p-[12px]">
            {program.details.map((detail: DetailsProps, i: number) => (
              <div className='flex flex-row' key={`program-detail-${i}`}>
                <div className={`${defaultTextClass} py-[4px] w-1/2`}>
                  {detail.name}
                </div>
                <div className={`${isDetailValueNumber(detail.value) ? defaultSemiBoldText : defaultTextClass} md:p-0 sm:p-[12px] mt-[2px] text-right w-1/2`}>
                  {isDetailValueNumber(detail.value) ? currencyFormat(detail.value as number)
                    : detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-[16px] md:mt-[40px] py-7 px-6 w-full border border-[#CBCFCB] rounded-[11px]">
          <div className={defaultBoldText}>
            {program.testimonial.name}
          </div>
          <div className={`${defaultTextClass} w-full md:w-[60%] mt-2`}>
            {program.testimonial.statement}
          </div>
          <div className="block absolute right-0 top-0 w-[57px] md:w-auto">
            <img src={Quote} alt="quotation" className="rounded-tr-[11px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProgramCard = memo(ProgramCardComponent);