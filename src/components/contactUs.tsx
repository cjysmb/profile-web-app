import { useState } from "react";
import { headerTextClass } from "../styles/common"
import VectorRight from "../assets/images/contact/VectorRight.svg";
import VectorLeft from "../assets/images/contact/VectorLeft.svg";

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });


    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        const subject = encodeURIComponent('New Contact Form Submission');
        const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `mailto:christianjaede30@gmail.com?subject=${subject}&body=${body}`;
         setFormData({
            name: '',
            email: '',
            mobile: '',
            message: ''
        });
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
        <section className="flex flex-col justify-center items-center w-full py-6 relative">
            <div className="absolute top-0 right-0 z-0">
                <img src={VectorRight} alt="vector right" className="opacity-50" />
            </div>
            <div className="absolute bottom-0 left-0 z-0">
                <img src={VectorLeft} alt="vector left" className="opacity-50" />
            </div>
            <div className={headerTextClass}>
                Contact Us
            </div>
            <div className="w-full md:w-[600px] relative">
                <div className="flex flex-col md:flex-row">
                    {data.map((item, key) => {
                        return (
                            <div className="p-4 w-full lg:w-[200px]">
                                <input placeholder={item.text} type={item.type}
                                    name={item.name} value={item.value}
                                    onChange={(e) => e.target.value.length <= item.maxLength && handleChange(e)}
                                    className="bg-white p-[12px] text-italic border border-[#C5CDE0] rounded-[8px] w-full" tabIndex={key=1} />
                            </div>  
                        )
                    })}
                    
                </div>
                <div className="p-[14px]">
                    <textarea
                        tabIndex={4}
                        name="message"
                        placeholder="Message"
                        rows={2}
                        maxLength={500}
                        className="w-full p-[12px] border border-[#C5CDE0] rounded-[8px] bg-white"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="p-[14px] text-right">
                    <button className="p-[12px] w-[120px] bg-[#5B7D7E] text-white font-bold rounded-[8px]" onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            </div>
        </section>
    )
}