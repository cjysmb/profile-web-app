export interface ProgramProps {
    icon: string;
    title: string;
    items: ProgramItemProps[];
    testimonial: {
        name: string;
        statement: string;
    };
    details: DetailsProps[];
}

export interface ProgramItemProps {
    mainItem: string;
    subItem: string[];
}
export interface DetailsProps {
    name: string;
    value: string | number;
}