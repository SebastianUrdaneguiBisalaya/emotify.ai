import { ShinyTextProps } from "@/components/types";

export default function ShinyText({ text }: ShinyTextProps) {
	return (
		<span className="font-bold text-transparent bg-gradient-to-r from-gray-600 dark:from-gray-300 via-gray-600 dark:via-gray-400 to-black/80 dark:to-white bg-[length:200%_100%] bg-clip-text animate-shimmer">
			{text}
		</span>
	)
}