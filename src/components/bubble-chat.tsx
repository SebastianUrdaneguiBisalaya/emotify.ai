import { BubbleChatProps } from "@/components/types";
import ReactMarkdown from "react-markdown";

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
						const markdownText = item.parts?.filter(part => part.type === "text").map(part => part.text).join("\n\n");
						return (
							<div
								key={index}
								className={`flex flex-col gap-2 ${item.role === "user" ? "justify-end" : "justify-start"}`}
							>
								<ReactMarkdown
									components={{
										p: ({ node: _node, ...props }) => <p className={`text-archivo p-2 ${item.role === "user" ? "w-fit self-end text-right rounded-xl bg-gray-light/30 dark:bg-gray-light/20" : "text-left"}`} {...props} />,
									}}
								>
									{markdownText}
								</ReactMarkdown>
							</div>
						)
					})
				)
			}
		</div>
	)
}