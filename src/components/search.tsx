"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Search() {
	const [search, setSearch] = useState<string>("");
	const [showAudioRecordIcon, setShowAudioRecordIcon] = useState<boolean>(true);
	
	useEffect(() => {
		if (search.length > 0) {
			setShowAudioRecordIcon(false);
		} else {
			setShowAudioRecordIcon(true);
		}
	}, [search]);

	return (
		<div className="relative flex flex-row items-center justify-between gap-2 shadow-md shadow-green px-6 py-3 rounded-[28px] bg-white/10 border border-transparent dark:border-white backdrop-blur-sm max-w-2xl w-full min-h-fit max-h-96 h-full animate-fade-in-up duration-100">
			<div className="flex flex-row items-center gap-2 w-full">
				<div className="absolute top-4 left-6 w-fit h-fit flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="#878787" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/></g></svg>
				</div>
				<textarea
					id="search-input"
					className="ml-10 mr-24 font-archivo w-full focus:outline-none resize-none scrollbar-hide bg-transparent transition-all duration-200 ease-in-out"
					placeholder="¿Cómo te sientes o qué vas a hacer?"
					value={search}
					onChange={(event) => {
						const textArea = event.target as HTMLTextAreaElement;
						textArea.style.height = "auto";
						textArea.style.height = `${Math.min(textArea.scrollHeight, 200)}px`;
						setSearch(textArea.value);
					}}
				/>
			</div>
			<div className="flex flex-row items-center gap-2">
				{
					showAudioRecordIcon && (
						<button
							className="absolute bottom-4 right-30 cursor-pointer rounded-full p-2 bg-green hover:animate-rotate-360"
						>
							<span className="w-fit h-fit flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" fillRule="evenodd" d="M9.25 21.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v18c0 .41-.34.75-.75.75m-3-4c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75S7 6.59 7 7v10c0 .41-.34.75-.75.75m5.25.25c0 .41.34.75.75.75s.75-.34.75-.75V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm3.75-2.25c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75M17.5 17c0 .41.34.75.75.75s.75-.34.75-.75V7c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm3.75-3.25c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75M2.5 13c0 .41.34.75.75.75S4 13.41 4 13v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75z" color="#ffffff"/></svg>
							</span>
						</button>
					)
				}
				
				<Link
					href="/music"
					className="absolute bottom-4 right-6 cursor-pointer bg-black rounded-full px-4 py-2"
				>
					<span className="font-archivo text-white">
						Generar
					</span>
				</Link>
			</div>
		</div>
	)	
}