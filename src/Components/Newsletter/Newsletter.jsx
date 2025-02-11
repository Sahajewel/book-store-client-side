import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) {
             Swal.fire({
                                   position: "top-end",
                                   icon: "error",
                                   title: "Please enter a valid email",
                                   showConfirmButton: false,
                                   timer: 1500
                                 });
            return;
        }
        console.log("Subscribed with:", email);
        setEmail("");
         Swal.fire({
                               position: "top-end",
                               icon: "success",
                               title: "Thank you for your subscribing",
                               showConfirmButton: false,
                               timer: 1500
                             });
    };

    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-12 py-12 px-6 text-center rounded-xl shadow-lg w-full max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-6">
                Get the latest updates and exclusive offers straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <input
                    type="email"
                    className="w-full sm:w-80 px-4 py-2 text-black rounded-lg focus:outline-none"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}
