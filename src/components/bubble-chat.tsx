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
					data.map((item, index) => {
						return (
							<div
								key={index}
								className={`flex flex-col gap-2 ${item.role === "user" ? "justify-end" : "justify-start"}`}
							>
								{
									item.parts?.map((part, index) => {
										console.log("Parte", part);
										if (part.type === "text") {
											return (
												<p
													key={index}
													className={`text-archivo p-2 ${item.role === "user" ? "w-fit self-end text-right rounded-xl bg-gray-light/30 dark:bg-gray-light/20" : "text-left"}`}
												>
													{part.text}
												</p>
											)
										}
									})
								}
							</div>
						)
					})
				)
			}
		</div>
	)
}