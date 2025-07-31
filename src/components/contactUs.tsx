import { useState } from "react";
import VectorRight from "../assets/images/contact/VectorRight.svg";
import VectorLeft from "../assets/images/contact/VectorLeft.svg";
import emailjs from 'emailjs-com';
import { CommonHeader } from "../layout/common";

export const ContactUs = () => {
    const env = import.meta.env;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    
    const [tooltip, setTooltip] = useState<{ message: string; type: "success" | "error" | null }>({
        message: "",
        type: null,
    });

    const [loading, setIsLoading] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const buttonDisabled = formData.name === '' || formData.mobile === '';

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        setIsLoading(true)
        e.preventDefault();
        console.log('Form submitted:', formData);
          emailjs.send(
            env.VITE_EMAILJS_SERVICE_ID, 
            env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            env.VITE_EMAILJS_PUBLIC_KEY 
            ).then(
            () => {
                setTooltip({ message: "✅ Message sent!", type: "success" });
                setFormData({ name: '', email: '', mobile: '', message: '' });
                clearTooltip();
                setIsLoading(false);
            },
            (err) => {
                console.error('FAILED...', err);
                setTooltip({ message: '❌ Failed to send. Try again.', type: "error" });
                clearTooltip();
                setIsLoading(false);
            }
        );
        // Add your submission logic here (e.g., send to API)
    };

    const clearTooltip = () => {
        setTimeout(() => {
            setTooltip({ message: "", type: null });
        }, 3000); // Clear tooltip after 3 seconds
    }

    const data = [
        {
            text: "Name",
            name: 'name',
            value: formData.name,
            type: "text",
            maxLength: 64
        },
        {
            text: "Email",
            name: 'email',
            value: formData.email,
            type: "text",
            maxLength: 32
        },
        {
            text: "+63",
            name: 'mobile',
            value: formData.mobile,
            type: "number",
            maxLength: 10
        }
    ]

    return (
        <section className="flex flex-col justify-center items-center w-full py-6 relative bg-white px-4 pb-[36px] md:px-0">
            <div className="hidden md:block absolute top-0 right-0 z-0">
                <img src={VectorRight} alt="vector right" className="opacity-50" />
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 z-0">
                <img src={VectorLeft} alt="vector left" className="opacity-50" />
            </div>
            <CommonHeader title="Contact us for a free foundation session!" textAlign="text-center" />
            <div className="w-full md:w-[650px] relative">
                <div className="flex flex-col md:flex-row">
                    {data.map((item, key) => {
                        return (
                            <div className="p-4 w-full lg:w-[300px]" key={"input"+key}>
                                <input placeholder={item.text} type={item.type}
                                    name={item.name} value={item.value}
                                    onChange={(e) => e.target.value.length <= item.maxLength && handleChange(e)}
                                    className="bg-white p-[12px] text-black italic border border-[#C5CDE0] rounded-[8px] w-full" />
                            </div>  
                        )
                    })}
                    
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.map((item, key) => (
                        <div className="w-full" key={"input" + key}>
                            <input
                                placeholder={item.text}
                                type={item.type}
                                name={item.name}
                                value={item.value}
                                onChange={(e) => e.target.value.length <= item.maxLength && handleChange(e)}
                                className="bg-white p-[12px] text-black italic border border-[#C5CDE0] rounded-[8px] w-full"
                            />
                        </div>
                    ))}
                </div> */}
                <div className="p-[14px]">
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={2}
                        maxLength={500}
                        className="w-full p-[12px] border border-[#C5CDE0] rounded-[8px] bg-white text-black"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="p-[14px] text-right">
                    <button disabled={loading || buttonDisabled} className="p-[12px] w-full md:w-[120px] bg-[#5B7D7E] text-white font-bold rounded-[8px] disabled:opacity-50" onClick={handleSubmit}>
                        {loading ? (
                            <span>
                                <svg className="inline w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                />
                                </svg>
                            </span>
                            ) : (
                            "Send"
                            )}
                    </button>
                </div>
                {tooltip.type && (
                    <div
                    className={`absolute  -top-[100px] right-0 mt-2 px-4 py-2 rounded shadow-lg text-white text-sm
                        ${tooltip.type === "success" ? "bg-green-600" : "bg-red-600"}`}
                    >
                    {tooltip.message}
                    </div>
                )}
            </div>
        </section>
    )
}
