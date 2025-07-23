import MiniSearch from "@/components/mini-search";

export default function Music() {
	return (
		<div className="w-full min-h-screen h-full max-w-6xl p-4 mx-auto grid grid-cols-2 gap-4">
			<div className="w-full h-full flex flex-col overflow-y-auto border border-gray-light dark:border-gray-light-opacity/20 rounded-[20px] bg-background/30">
				<div className="w-full h-full flex flex-col">
					<div className="w-full h-fit flex flex-row items-center justify-between gap-2 px-4 py-2 border-b border-gray-light dark:border-gray-light-opacity/20">
						<span className="font-archivo text-black dark:text-white text-sm px-4 py-2 bg-gray/20 rounded-lg">Chat</span>
						<div className="w-fit h-fit flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2"/><path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2"/></svg>
						</div>
					</div>
				</div>
				<div className="w-full h-full flex flex-col justify-end min-h-fit max-h-72 p-4">
					<MiniSearch />
				</div>
			</div>
			<div className="w-full h-full flex flex-col overflow-y-auto border border-gray-light dark:border-gray-light-opacity/20 rounded-[20px] bg-background/30">
				<div className="w-full h-fit flex flex-row items-center justify-between gap-2 px-4 py-2 border-b border-gray-light dark:border-gray-light-opacity/20">
					<span className="font-archivo text-black dark:text-white text-sm px-4 py-2 bg-gray/20 rounded-lg">Resultados</span>
					<div className="w-fit h-fit flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 3v12.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5c.54 0 1.05.12 1.5.34V6.47L9 8.6v8.9A3.5 3.5 0 0 1 5.5 21A3.5 3.5 0 0 1 2 17.5A3.5 3.5 0 0 1 5.5 14c.54 0 1.05.12 1.5.34V6z"/></svg>
					</div>
				</div>
				<div className="w-full h-full">

				</div>
			</div>
		</div>
	)
}