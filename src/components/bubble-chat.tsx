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
										h1: ({ node: _node, ...props }) => <h1 className={`text-montserrat p-2 ${item.role === "user" ? "w-fit max-w-[80%] self-end text-right rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-sm bg-gray-light/30 dark:bg-gray-light/20" : "text-left"}`} {...props} />,
										h2: ({ node: _node, ...props }) => <h2 className={`text-montserrat p-2 ${item.role === "user" ? "w-fit max-w-[80%] self-end text-right rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-sm bg-gray-light/30 dark:bg-gray-light/20" : "text-left"}`} {...props} />,
										h3: ({ node: _node, ...props }) => <h3 className={`text-montserrat p-2 ${item.role === "user" ? "w-fit max-w-[80%] self-end text-right rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-sm bg-gray-light/30 dark:bg-gray-light/20" : "text-left"}`} {...props} />,
										span: ({ node: _node, ...props }) => <span className={`text-archivo p-2 ${item.role === "user" ? "w-fit max-w-[80%] self-end text-right rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-sm bg-gray-light/30 dark:bg-gray-light/20" : "text-left"}`} {...props} />,
										p: ({ node: _node, ...props }) => <p className={`text-archivo p-2 ${item.role === "user" ? "w-fit max-w-[80%] self-end text-right rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-sm bg-gray-light/30 dark:bg-gray-light/20" : "text-left"}`} {...props} />
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