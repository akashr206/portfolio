import React, { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import Beams from "./Beams/Beams";
import { ArrowUpRight } from "lucide-react";
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
        <div className="max-w-md w-[calc(100%-35px)] relative text-white mx-auto bg-card/50 backdrop-blur-xl p-8 rounded-lg border">
            <div className="absolute rounded-lg overflow-hidden dark:opacity-45 -z-50 inset-0">
                <Beams lightColor="#D946EF" rotation={45}></Beams>
            </div>

            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">
                    Send <span className="text-fuchsia-500">Message</span>
                </h2>
                <p className="text-muted-foreground mt-2">
                    Send me a message and I'll get back to you soon!
                </p>
            </div>

            <div className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium  mb-1"
                    >
                        Name *
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 " />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                            placeholder="Your name"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium  mb-1"
                    >
                        Email *
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 " />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium  mb-1"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                        placeholder="What's this about?"
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium  mb-1"
                    >
                        Message *
                    </label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 " />
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent resize-none"
                            placeholder="Your message here..."
                            required
                        />
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white disabled:bg-fuchsia-400 font-medium py-2 px-4 rounded-md transition duration-200 cursor-pointer flex items-center justify-center gap-1 group"
                >
                    {isSubmitting ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 "></div>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <ArrowUpRight className="w-5 h-5 transition-all duration-300 group-hover:rotate-45" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
