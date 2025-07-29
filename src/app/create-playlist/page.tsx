"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "@/components/logo";
import { User, DataForCreatePlaylist, LoadingStates } from "@/lib/types";
import { useRouter } from "next/navigation";

export default function CreatePlaylist() {
	const router = useRouter();
	const [dataForCreatePlaylist, setDataForCreateList] = useState<DataForCreatePlaylist>({
		name: "",
		description: "",
	});
	const [loadingStates, setIsLoadingStates] = useState<LoadingStates>({
		userLoading: true,
		createPlaylistLoading: false,
		addSongsToPlaylistLoading: false,
	});
	const [songs, setSongs] = useState<string[]>([]);
	const [user, setUser] = useState<User>();

	const createPlaylist = async (user_id: string, name: string, description: string) => {
		const res = await axios.post("/api/playlist/create", {
			user_id: user_id,
			name: name,
			description: description,
		});
		return res.data;
	}

	const addSongsToPlaylist = async (playlistId: string, songs: string[]) => {
		await axios.post("/api/playlist/add-songs", {
			playlist_id: playlistId,
			songs: songs,
		});
	}

	const handleOnSubmit = async () => {
		if (dataForCreatePlaylist.name.trim() === "" || dataForCreatePlaylist.description.trim() === "" || !user?.id) {
			return;
		}
		try {
			setIsLoadingStates((prev) => ({
				...prev,
				createPlaylistLoading: true,
			}))
			const playlistId = await createPlaylist(user?.id, dataForCreatePlaylist.name, dataForCreatePlaylist.description);
			setIsLoadingStates((prev) => ({
				...prev,
				createPlaylistLoading: false,
				addSongsToPlaylistLoading: true,
			}))
			await addSongsToPlaylist(playlistId, songs);
			localStorage.removeItem("songs");
			setTimeout(() => {
				router.replace("/")
			}, 100);
		} catch (error) {
			console.error("Error creating playlist or adding songs:", error);
		} finally {
			setIsLoadingStates((prev) => ({
				...prev,
				createPlaylistLoading: false,
				addSongsToPlaylistLoading: false,
			}))
		}
	}

	useEffect(() => {
		const res = localStorage.getItem("songs");
		if (res) {
			const data = JSON.parse(res);
			if (data && data.length > 0) {
				setSongs(data);
			}
		}
	}, []);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await axios.get("/api/me");
				setUser(res.data);
			} catch (error) {
				console.error("Error fetching user:", error);
			} finally {
				setIsLoadingStates((prev) => ({
					...prev,
					userLoading: false,
				}))
			}
		}
		fetchUser();
	}, []);

	return (
		<div className="flex flex-col justify-start items-center w-full min-h-screen h-full max-w-6xl p-4 mx-auto">
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
			<main className="w-full h-full grow flex flex-col items-center justify-center">
				{
					user && user.id && (
						<div className="shadow-2xl shadow-black/20 dark:shadow-white/20 max-w-md w-full p-4 flex flex-col items-center gap-6 border border-gray-light dark:border-gray-light-opacity/20 rounded-xl bg-background/30 backdrop-blur-sm">
							<div className="w-full flex flex-col items-center">
								<p className="font-montserrat text-center font-medium">Hola {user.display_name}</p>
								<p className="font-archivo text-center text-sm text-gray dark:text-gray-light">{user.email}</p>
							</div>
							<h1 className="font-montserrat font-semibold text-center text-xl">
								Crear playlist y añadir las canciones recomendadas
							</h1>
							<input
								id="playlist-name"
								className="text-archivo w-full p-2 rounded-md bg-transparent border border-gray-light dark:border-gray-light-opacity/20"
								placeholder="Nombre de la playlist 🎵"
								value={dataForCreatePlaylist.name}
								onChange={(event) => {
									const input = event.target as HTMLInputElement;
									setDataForCreateList((prev) => ({
										...prev,
										name: input.value,
									}))
								}}
								type="text"
							/>
							<textarea
								id="playlist-description"
								className="resize-none text-archivo w-full p-2 rounded-md bg-transparent border border-gray-light dark:border-gray-light-opacity/20 scrollbar-hide"
								placeholder="Descripción de la playlist 🚀"
								value={dataForCreatePlaylist.description}
								onChange={(event) => {
									const input = event.target as HTMLTextAreaElement;
									setDataForCreateList((prev) => ({
										...prev,
										description: input.value,
									}))
								}}
							/>
							<button
								className={`flex flex-row items-center gap-2 bg-green w-fit px-4 py-2 cursor-pointer rounded-xl ${loadingStates.createPlaylistLoading || loadingStates.addSongsToPlaylistLoading && "opacity-50"}`}
								disabled={loadingStates.createPlaylistLoading || loadingStates.addSongsToPlaylistLoading}
								type="button"
								onClick={handleOnSubmit}
							>
								<span className="w-fit h-fit flex items-center justify-center">
									{
										loadingStates.createPlaylistLoading || loadingStates.addSongsToPlaylistLoading ? (
											<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>
										) : (
											<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4.588 14.432a.62.62 0 0 1-.861.2c-2.354-1.434-5.3-1.757-8.794-.968a.618.618 0 0 1-.275-1.206c3.812-.872 7.085-.5 9.714 1.111a.626.626 0 0 1 .217.857zm1.218-2.724a.79.79 0 0 1-1.075.263A13.18 13.18 0 0 0 6.767 12.8a.773.773 0 1 1-.442-1.482a14.62 14.62 0 0 1 11.243 1.327a.77.77 0 0 1 .239 1.063zm.108-2.843C14.688 8.953 9.371 8.774 6.289 9.706a.937.937 0 0 1-.55-1.792c3.537-1.075 9.415-.861 13.119 1.338a.93.93 0 0 1 .322 1.278a.907.907 0 0 1-1.266.334z"/></svg>
										)
									}
								</span>
								<span className="text-white">
									{
										loadingStates.createPlaylistLoading || loadingStates.addSongsToPlaylistLoading ? "Añadiendo..." : "Añadir"
									}
								</span>
							</button>
						</div>
					)
				}
			</main>
		</div>
	)
}