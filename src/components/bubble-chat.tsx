interface Songs {
	id: string;
	artist: string;
	title: string;
}

interface Data {
	id: string;
	role: "user" | "bot";
	text: string;
	songs?: Songs[];
}

interface BubbleChatProps {
	data: Data[] | null;
}

export default function BubbleChat({
	data,
}: BubbleChatProps) {
	return (
		<div 
			className="w-full flex flex-col gap-3 p-4 overflow-y-auto"
		>
			{
				data && data?.length > 0 && (
					data.map((item) => {
						return (
							<div
								key={item.id}
								className={`flex items-center ${item.role === "user" ? "justify-end" : "justify-start"}`}
							>
								<p className={`text-archivo p-2 ${item.role === "user" ? "text-right rounded-xl bg-gray-light/30 dark:bg-gray-light/20" : "text-left"}`}>{item.text}</p>
							</div>
						)
					})
				)
			}
		</div>
	)
}