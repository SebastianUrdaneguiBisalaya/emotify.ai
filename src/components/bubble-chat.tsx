import { BubbleChatProps } from "@/components/types";

export default function BubbleChat({
	data,
}: BubbleChatProps) {
	return (
		<div 
			className="w-full flex flex-col gap-3 p-4"
		>
			{
				data && data?.length > 0 && (
					data.map((item) => {
						return (
							<div
								key={item.id}
								className={`flex flex-col gap-2 ${item.role === "user" ? "justify-end" : "justify-start"}`}
							>
								<p className={`text-archivo p-2 ${item.role === "user" ? "w-fit self-end text-right rounded-xl bg-gray-light/30 dark:bg-gray-light/20" : "text-left"}`}>{item.content}</p>
								<div
									className="flex flex-col gap-2 items-center justify-start overflow-x-auto"
								>
									{
										item.songs && item.songs.length > 0 && item.songs.map((song) => {
											return (
												<div
													className="w-full p-2 flex gap-2 border border-gray-light dark:border-gray-light-opacity/20 rounded-xl"
													key={song.id}
												>
													<span>
														<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#1DB954" d="M21 3v12.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5c.54 0 1.05.12 1.5.34V6.47L9 8.6v8.9A3.5 3.5 0 0 1 5.5 21A3.5 3.5 0 0 1 2 17.5A3.5 3.5 0 0 1 5.5 14c.54 0 1.05.12 1.5.34V6z"/></svg>
													</span>
													<div className="flex flex-col gap-0.5">
														<p className="font-montserrat font-medium text-black dark:text-white text-left">
															{song.title}
														</p>
														<span className="font-archivo text-sm text-gray-600 dark:text-gray-light text-left">
															{song.artist}
														</span>
													</div>
												</div>
											)
										})
									}
								</div>
							</div>
						)
					})
				)
			}
		</div>
	)
}