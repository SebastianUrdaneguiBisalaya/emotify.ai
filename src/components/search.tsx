"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { generateUUID } from "@/lib/utils";

export default function Search() {
	const [search, setSearch] = useState<string>("");
	const [id, setId] = useState<string>("");
	
	useEffect(() => {
		setId(generateUUID());
	}, []);

	return (
		<div className="relative flex flex-col items-center justify-between gap-2 shadow-md shadow-green px-6 py-3 rounded-[28px] bg-white/10 border border-transparent dark:border-white backdrop-blur-sm max-w-2xl w-full min-h-fit max-h-96 h-full animate-fade-in-up duration-100">
			<div className="flex flex-row justify-center items-start gap-2 w-full h-fit">
				<div className="w-fit h-fit p-2 items-center justify-center hidden sm:flex">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="#878787" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/></g></svg>
				</div>
				<textarea
					id="search-input"
					className="font-archivo w-full h-fit focus:outline-none resize-none scrollbar-hide bg-transparent transition-all duration-200 ease-in-out"
					placeholder="How do you fell or what are you going to do?"
					value={search}
					spellCheck={false}
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					onChange={(event) => {
						const textArea = event.target as HTMLTextAreaElement;
						textArea.style.height = "auto";
						textArea.style.height = `${Math.min(textArea.scrollHeight, 200)}px`;
						setSearch(textArea.value);
					}}
				/>
			</div>
			<div className="flex flex-row items-center justify-end gap-2 w-full">
				<Link
					href={`/music/${id}?q=${encodeURIComponent(search)}`}
					className="cursor-pointer bg-black rounded-full px-4 py-2"
				>
					<span className="font-archivo text-white">
						Generate
					</span>
				</Link>
			</div>
		</div>
	)	
}