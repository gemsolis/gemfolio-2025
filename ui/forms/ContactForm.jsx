import React from "react";

const ContactForm = () => {
	return (
		<div>
			<form className="flex flex-col gap-4">
				<label>
					<input
						type="text"
						className="custom-font rounded-md bg-slate-900 border-gray-500 px-4 py-2 text-white placeholder:text-gray-600"
						placeholder="Full Name"
					/>
				</label>
				<label>
					<input type="text" placeholder="Email Address" />
				</label>
				<label>
					<input type="text" placeholder="Contact Number" />
				</label>
				<textarea
					placeholder="Your message...."
					className="resize-none h-[400px]"
				/>
				<button
					type="submit"
					className="bg-violet-900 hover:bg-violet-800 py-2 px-6 rounded-md"
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
