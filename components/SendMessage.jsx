import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Beams from "./Beams/Beams";
import { toast } from "sonner";

export default function SendMessage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields.");
            setIsSubmitting(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            setIsSubmitting(false);
            return;
        }

        try {
            const mailtoLink = `mailto:akashr6514@gmail.com?subject=${encodeURIComponent(
                formData.subject || "Send a Message from Portfolio"
            )}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;
            toast.warning("Redirecting to mail.");

            window.location.href = mailtoLink;

            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-5xl mb-32 md:w-[calc(100%-35px)] relative text-white md:mx-auto bg-zinc-950/80 backdrop-blur-xl p-5 sm:p-8 md:p-12 border-2 border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 overflow-hidden shadow-2xl">
            <div className="absolute overflow-hidden dark:opacity-45 -z-50 inset-0 pointer-events-none">
                <Beams lightColor="#D946EF" rotation={45}></Beams>
            </div>

            <div className="flex flex-col justify-between relative z-10">
                <div className="mb-8 md:mb-0">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 md:mb-4">
                        Let's <span className="text-fuchsia-500">Talk</span>
                    </h2>
                    <p className="text-zinc-400 max-md:hidden font-mono mb-8 max-w-sm leading-relaxed">
                        Have a project in mind, a question, or just want to say hi? I'd love to hear from you. Drop a message!
                    </p>
                </div>
                
                <div className="flex flex-col gap-4 md:gap-6">
                    <a href="mailto:akashr6514@gmail.com" className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-zinc-900 border-2 border-white/10 flex items-center justify-center group-hover:bg-fuchsia-500 group-hover:border-fuchsia-500 transition-colors">
                            <Mail className="w-6 h-6 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Email</p>
                            <p className="text-sm md:text-base font-mono text-zinc-300 group-hover:text-white transition-colors break-all">akashr6514@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://github.com/akashr206" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-zinc-900 border-2 border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                            <Github className="w-6 h-6 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">GitHub</p>
                            <p className="text-sm md:text-base font-mono text-zinc-300 group-hover:text-white transition-colors">github.com/akashr206</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/akash-r-55496631b/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-zinc-900 border-2 border-white/10 flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] transition-colors">
                            <Linkedin className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">LinkedIn</p>
                            <p className="text-sm md:text-base font-mono text-zinc-300 group-hover:text-white transition-colors">akash-r-55496631b</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="bg-zinc-900/80 p-4 sm:p-6 md:p-8 border-2 border-white/10 relative z-10 flex flex-col gap-4 md:gap-5">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                        Name *
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 bg-zinc-950 border-2 border-white/10 focus:outline-none focus:border-fuchsia-500 transition-colors text-white font-mono placeholder:text-zinc-600"
                            placeholder="Your name"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                        Email *
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 bg-zinc-950 border-2 border-white/10 focus:outline-none focus:border-fuchsia-500 transition-colors text-white font-mono placeholder:text-zinc-600"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-950 border-2 border-white/10 focus:outline-none focus:border-fuchsia-500 transition-colors text-white font-mono placeholder:text-zinc-600"
                        placeholder="What's this about?"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                        Message *
                    </label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full pl-11 pr-4 py-3 bg-zinc-950 border-2 border-white/10 focus:outline-none focus:border-fuchsia-500 transition-colors text-white font-mono placeholder:text-zinc-600 resize-none"
                            placeholder="Your message here..."
                            required
                        />
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-fuchsia-500 hover:bg-white text-zinc-950 disabled:bg-zinc-600 disabled:text-zinc-400 font-bold py-4 px-6 mt-2 transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2 group uppercase tracking-widest text-sm"
                >
                    {isSubmitting ? (
                        <div className="animate-spin h-5 w-5 border-2 border-zinc-950 border-t-transparent rounded-full"></div>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
