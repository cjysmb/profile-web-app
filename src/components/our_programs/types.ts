export interface ProgramProps {
    icon: string;
    title: string;
    items: string[];
    testimonial: {
        name: string;
        statement: string;
    };
    details: DetailsProps[];

}
export interface DetailsProps {
    name: string;
    value: string | number;
    value2?: string | number;
}