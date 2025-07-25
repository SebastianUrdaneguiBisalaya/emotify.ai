"use client";

import { useState, useEffect } from "react";
import { MiniSearchProps } from "@/components/types";

export default function MiniSearch({
		input,
		handleInputChange,
		handleSubmit,
		error,
		status,
		stop,
	}: MiniSearchProps) {
	const [showAudioRecordIcon, setShowAudioRecordIcon] = useState<boolean>(true);
	
	useEffect(() => {
		if (input.length > 0) {
			setShowAudioRecordIcon(false);
		} else {
			setShowAudioRecordIcon(true);
		}
	}, [input]);

	// const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
	// 	const textArea = event.target as HTMLTextAreaElement;
	// 	textArea.style.height = "auto";
	// 	const newHeight = Math.min(textArea.scrollHeight, 200);
	// 	textArea.style.height = `${newHeight}px`;
	// }
	return (
		<div className="w-full flex flex-col gap-2 bg-white/10 border border-gray-light dark:border-gray-light-opacity/20 backdrop-blur-sm rounded-xl px-2 py-4">
			<textarea
				id="mini-search-input"
				className="w-full font-archivo overflow-y-auto scrollbar max-h-72 focus:outline-none resize-none"
				value={input}
				onChange={handleInputChange}
				disabled={error !== undefined || status !== "ready"}
			/>
			<div className="w-full flex flex-row items-center justify-end gap-2">
				{
					showAudioRecordIcon && (
						<button
							className="cursor-pointer rounded-full p-2 bg-green hover:animate-rotate-360"
						>
							<span className="w-fit h-fit flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" fillRule="evenodd" d="M9.25 21.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v18c0 .41-.34.75-.75.75m-3-4c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75S7 6.59 7 7v10c0 .41-.34.75-.75.75m5.25.25c0 .41.34.75.75.75s.75-.34.75-.75V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm3.75-2.25c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75M17.5 17c0 .41.34.75.75.75s.75-.34.75-.75V7c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm3.75-3.25c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75M2.5 13c0 .41.34.75.75.75S4 13.41 4 13v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75z" color="#ffffff"/></svg>
							</span>
						</button>
					)
				}
				{
					(status === "submitted" || status === "streaming") ? (
						<div className="w-fit h-fit">
							{
								status === "submitted" && (
									<div className="">
										<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="16" strokeDashoffset="16" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="16;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path><path strokeDasharray="64" strokeDashoffset="64" strokeOpacity=".3" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"/></path></g></svg>
									</div>
								)
							}
							<button
								className="w-fit h-fit rounded-full bg-green p-2"
								type="button"
								onClick={() => stop()}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M6 18V6h12v12z"/></svg>
							</button>
						</div>
					) : (
						<button
							className="cursor-pointer bg-black rounded-full px-4 py-2"
							onClick={() => handleSubmit()}
						>
							<span className="font-archivo text-white">
								Generar
							</span>
						</button>
					)
				}
			</div>
		</div>
	)
}