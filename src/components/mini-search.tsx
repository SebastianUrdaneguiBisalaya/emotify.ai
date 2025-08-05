"use client";

import { MiniSearchProps } from "@/components/types";

export default function MiniSearch({
		input,
		handleInputChange,
		handleSubmit,
		error,
		status,
		stop,
	}: MiniSearchProps) {

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