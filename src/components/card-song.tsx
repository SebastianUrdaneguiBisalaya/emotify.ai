import Image from "next/image";
import { SongDetail } from "@/components/types";

export default function CardSong({ title, artist, image, duration, popularity }: SongDetail) {
	return (
		<div
			className="w-full p-2 flex flex-col gap-3 border border-gray-light dark:border-gray-light-opacity/20 rounded-xl"
		>
			<div className="flex flex-row items-start gap-3">
				{
					image && (
						<Image
							src={image}
							alt={title}
							width={100}
							height={100}
							className="w-14 h-14 aspect-square rounded-xl object-cover"
						/>
					)
				}
				<div className="flex flex-col justify-center gap-0.5 grow">
					<p className="font-montserrat font-medium text-black dark:text-white text-left">{title}</p>
					<span className="font-archivo text-sm text-gray-600 dark:text-gray-light text-left">{artist}</span>
				</div>
			</div>
			<div className="w-full flex flex-row items-center justify-end gap-3">
				<div className="flex flex-row justify-center items-center gap-1">
					<span className="w-fit h-fit flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12.897 2.557a1 1 0 0 0-1.794 0L8.691 7.445l-5.394.784a1 1 0 0 0-.555 1.706l3.904 3.805l-.922 5.372a1 1 0 0 0 1.451 1.054L12 17.63l4.825 2.536a1 1 0 0 0 1.45-1.054l-.92-5.372l3.902-3.805a1 1 0 0 0-.554-1.706l-5.394-.784l-2.412-4.888z" fill="currentColor"/></g></svg>
					</span>
					<span className="font-archivo text-sm text-gray-600 dark:text-white text-right w-fit h-fit bg-gray-light/60 dark:bg-gray-light/20 rounded-full px-2 py-0.5">{popularity}</span>
				</div>
				<div className="flex flex-row justify-center items-center gap-1">
					<span className="w-fit h-fit flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path fill="currentColor" d="M92.656 19.188v41.5h331.72v-41.5zM119.5 79.374V433.53h22.28V79.376H119.5zm46.594 0c3.212 43.324 13.312 82.022 27.78 110.906c17.685 35.304 40.845 54.75 64.064 54.75s46.346-19.446 64.03-54.75c14.47-28.883 24.57-67.58 27.782-110.905H166.094zm209.156 0V433.53h22.28V79.376h-22.28zm-117.313 185.22c-23.218 0-46.378 19.415-64.062 54.717c-14.835 29.614-25.098 69.562-28.03 114.22H350c-2.933-44.658-13.197-84.606-28.03-114.22c-17.686-35.302-40.814-54.718-64.033-54.718zM92.657 452.218v41.467h331.718V452.22H92.655z"/></svg>
					</span>
					<span className="font-archivo text-sm text-nowrap text-gray-600 dark:text-gray-light text-right px-2">{`${duration} m.`}</span>
				</div>
			</div>
		</div>
	)
}