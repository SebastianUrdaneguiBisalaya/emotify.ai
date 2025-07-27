import Image from "next/image";
import { SongDetail } from "@/components/types";

export default function CardSong({ title, artist, image, duration, popularity }: SongDetail) {
	return (
		<div
			className="w-full p-2 flex flex-row gap-3 border border-gray-light dark:border-gray-light-opacity/20 rounded-xl"
		>
			<Image
				src={image}
				alt={title}
				width={100}
				height={100}
				className="w-14 h-14 aspect-square rounded-xl object-cover"
			/>
			<div className="flex flex-col justify-center gap-0.5 grow">
				<p className="font-montserrat font-medium text-black dark:text-white text-left">{title}</p>
				<span className="font-archivo text-sm text-gray-600 dark:text-gray-light text-left">{artist}</span>
			</div>
			<div className="flex flex-col justify-center items-center">
				<span className="font-archivo text-sm text-gray-600 dark:text-white text-right w-fit h-fit bg-gray-light/60 dark:bg-gray-light/20 rounded-full px-2 py-0.5">{popularity}</span>
			</div>
			<div className="flex flex-col justify-center items-center">
				<span className="font-archivo text-sm text-gray-600 dark:text-gray-light text-right px-2">{duration}</span>
			</div>
		</div>
	)
}