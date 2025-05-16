import Logo from '../assets/icons/footer/Logo.svg';

export const Footer = () => {
    return (
        <section className="w-full flex justify-center items-center bg-[#728C69] py-[22px]">
            <img src={Logo} alt="Footer Image" />
        </section>
    )
}