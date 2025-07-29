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

	return (
		<div className="w-full flex flex-col gap-2 bg-white/10 border border-gray-light dark:border-gray-light-opacity/20 backdrop-blur-sm rounded-xl px-2 py-4">
			<textarea
				id="mini-search-input"
				className="w-full font-archivo overflow-y-auto scrollbar max-h-72 focus:outline-none resize-none"
				disabled={error !== undefined || status !== "ready"}
				spellCheck={false}
				autoComplete="off"
				autoCorrect="off"
				autoCapitalize="off"
				value={input}
				onChange={(e) => {
					const textArea = e.target as HTMLTextAreaElement;
					textArea.style.height = "auto";
					textArea.style.height = `${Math.min(textArea.scrollHeight, 200)}px`;
					handleInputChange(e);
				}}
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
						<button
							className="w-fit h-fit rounded-full bg-green p-2"
							type="button"
							onClick={() => stop()}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M6 18V6h12v12z"/></svg>
						</button>
					) : (
						<button
							className="cursor-pointer bg-black rounded-full px-4 py-2"
							onClick={() => handleSubmit()}
						>
							<span className="font-archivo text-white">
								Generate
							</span>
						</button>
					)
				}
			</div>
		</div>
	)
}