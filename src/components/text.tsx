import clsx from "clsx"

type TextProps = {
	as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
	type?: "primary" | "secondary";
	content: string;
	className?: string;
}

export default function Text({ as, content, type="primary", className }: TextProps) {
	const Component = as;
	return (
		<Component
			className={clsx(
				type === "primary" ? "font-fira-code" : "font-work-sans",
				className
			)}
		>
			{content}
		</Component>
	)
}