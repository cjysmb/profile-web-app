import Logo from '../assets/icons/footer/Logo.svg';

export const Footer = () => {
    return (
        <section className="w-full flex justify-center items-center bg-[#728C69] py-[22px] relative">
            <a onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }}
            className="cursor-pointer">
            <img src={Logo} alt="Footer Image" />
            </a>
        </section>
    )
}