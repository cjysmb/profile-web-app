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


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
          emailjs.send(
            env.VITE_EMAILJS_SERVICE_ID, 
            env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            env.VITE_EMAILJS_PUBLIC_KEY 
            ).then(
            () => {
                console.log('✅ Message sent!');
                setFormData({ name: '', email: '', mobile: '', message: '' });
            },
            (err) => {
                console.error('FAILED...', err);
                console.error('❌ Failed to send. Try again.');
            }
            );
        // Add your submission logic here (e.g., send to API)
    };

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
        },
    ]

    return (
        <section className="flex flex-col justify-center items-center w-full py-6 relative bg-white">
            <div className="hidden md:block absolute top-0 right-0 z-0">
                <img src={VectorRight} alt="vector right" className="opacity-50" />
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 z-0">
                <img src={VectorLeft} alt="vector left" className="opacity-50" />
            </div>
            <CommonHeader title="Contact Us" />
            <div className="w-full md:w-[600px] relative">
                <div className="flex flex-col md:flex-row">
                    {data.map((item, key) => {
                        return (
                            <div className="p-4 w-full lg:w-[200px]" key={"input"+key}>
                                <input placeholder={item.text} type={item.type}
                                    name={item.name} value={item.value}
                                    onChange={(e) => e.target.value.length <= item.maxLength && handleChange(e)}
                                    className="bg-white p-[12px] text-black italic border border-[#C5CDE0] rounded-[8px] w-full" tabIndex={key=1} />
                            </div>  
                        )
                    })}
                    
                </div>
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
                    <button className="p-[12px] w-full md:w-[120px] bg-[#5B7D7E] text-white font-bold rounded-[8px]" onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            </div>
        </section>
    )
}
