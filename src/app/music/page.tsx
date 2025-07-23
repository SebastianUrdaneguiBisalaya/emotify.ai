"use client";

import { useState } from "react";
import MiniSearch from "@/components/mini-search";
import Logo from "@/components/logo";
import BubbleChat from "@/components/bubble-chat";
import CardSong from "@/components/card-song";
import { data, songs } from "@/constants/data";

export default function Music() {
	const [showSearchInSpotify, setShowSearchInSpotify] = useState<boolean>(false);

	const handleSearchInSpotify = () => {
		setShowSearchInSpotify((prev) => !prev);
	}

	return (
		<div
			className="flex flex-col justify-start items-center w-full min-h-screen h-full max-w-6xl p-4 mx-auto"
		>
			<header className="w-full h-fit flex flex-row items-center justify-between gap-2 p-4">
				<Logo />
				<a
					className="w-fit flex items-center justify-center cursor-pointer"
					href="https://github.com/SebastianUrdaneguiBisalaya/emotify.ai"
					target="_blank"
					rel="noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64"><path fill="currentColor" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0"/></svg>
				</a>
			</header>
			<main className={`w-full grow flex gap-4 ${showSearchInSpotify ? "flex-row" : "flex-col items-center"}`}>
				<div className={`${showSearchInSpotify ? "" : "max-w-2xl"} grow w-full flex flex-col border border-gray-light dark:border-gray-light-opacity/20 rounded-[20px] bg-background/30 overflow-hidden`}>
					<div className="w-full flex flex-row items-center justify-between gap-2 px-4 py-2 border-b border-gray-light dark:border-gray-light-opacity/20">
						<span className="font-archivo text-black dark:text-white text-sm px-4 py-2 bg-gray/20 rounded-lg">Chat</span>
						<div className="w-fit h-fit flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2"/><path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2"/></svg>
						</div>
					</div>
					<div className="flex flex-col h-[calc(100vh-160px)]">
						<div className="grow overflow-y-auto">
							<BubbleChat data={data}/>
						</div>
						<div className="w-full p-4 shrink-0">
							<MiniSearch onSearch={handleSearchInSpotify} />
						</div>
					</div>
				</div>
				{
					showSearchInSpotify && (
						<div className="w-full flex flex-col border border-gray-light dark:border-gray-light-opacity/20 rounded-[20px] bg-background/30">
							<div className="w-full h-fit flex flex-row items-center justify-between gap-2 px-4 py-2 border-b border-gray-light dark:border-gray-light-opacity/20">
								<span className="font-archivo text-black dark:text-white text-sm px-4 py-2 bg-gray/20 rounded-lg">Resultados</span>
								<button
									className="w-fit h-fit flex items-center justify-center bg-green rounded-full p-2 cursor-pointer"
									type="button"
								>
									<span className="text-montserrat text-xs text-white flex flex-row items-center gap-0.5">
										<span className="w-fit h-fit flex items-center justify-center">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
										</span>
										<span>
											Playlist
										</span>
									</span>
								</button>
							</div>
							<div className="w-full grow px-4 py-2 overflow-hidden">
								<div className="flex flex-col gap-2 overflow-y-auto h-[calc(100vh-160px)]">
									{
										songs.map((song) => {
											return (
												<CardSong
													key={song.id}
													id={song.id}
													artist={song.artist}
													title={song.title}
													image={song.image}
													duration={song.duration}
													type={song.type}
												/>
											)
										})
									}
								</div>
							</div>
						</div>
					)
				}
			</main>
		</div>
	)
}