import Logo from "@/components/logo";
import Search from "@/components/search";

const MainTag = () => {
	return (
		<div className="flex flex-row items-center justify-center gap-1 w-fit h-fit bg-green rounded-full p-2">
			<div className="w-fit h-fit flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4.588 14.432a.62.62 0 0 1-.861.2c-2.354-1.434-5.3-1.757-8.794-.968a.618.618 0 0 1-.275-1.206c3.812-.872 7.085-.5 9.714 1.111a.626.626 0 0 1 .217.857zm1.218-2.724a.79.79 0 0 1-1.075.263A13.18 13.18 0 0 0 6.767 12.8a.773.773 0 1 1-.442-1.482a14.62 14.62 0 0 1 11.243 1.327a.77.77 0 0 1 .239 1.063zm.108-2.843C14.688 8.953 9.371 8.774 6.289 9.706a.937.937 0 0 1-.55-1.792c3.537-1.075 9.415-.861 13.119 1.338a.93.93 0 0 1 .322 1.278a.907.907 0 0 1-1.266.334z"/></svg>
			</div>
			<span className="font-archivo text-xs font-normal text-white">
				Conexión a Spotify API
			</span>
		</div>
	)
}

export default function Home() {
	return (
		<div className="w-full min-h-screen h-full max-w-6xl p-8 mx-auto">
			<header className="flex flex-row items-center justify-between w-full h-fit py-4">
				<Logo />
				<a
					className="w-fit flex items-center justify-center cursor-pointer"
					href="https://github.com/SebastianUrdaneguiBisalaya/emotify.ai"
					target="_blank"
					rel="noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64"><path fill="currentColor" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0"/></svg>
				</a>
			</header>
			
			<main className="w-full h-full flex flex-col items-center gap-8 py-4">
				<MainTag />
				<h1 className="font-montserrat font-bold text-center text-6xl text-black dark:text-white">Descubre la música que se adapta a tu <span className="text-green">estado de ánimo</span></h1>
				<h2 className="font-archivo font-normal text-gray dark:text-gray-light text-xl text-center max-w-4xl w-full">Escribe cómo te sientes o qué vas a hacer —ya sea trabajar, relajarte, pensar o celebrar— y deja que la IA elija las canciones perfectas para ti desde Spotify.</h2>
				<Search />
			</main>

			<footer className="w-full flex flex-col items-center justify-center py-4">
				<p className="font-archivo text-xs text-center text-gray dark:text-gray-light">Hecho con 💚 por <a className="cursor-pointer font-medium underline" href="https://sebastianurdanegui.vercel.app/" target="_blank" rel="noreferrer">Sebastian Marat Urdanegui Bisalaya</a></p>
			</footer>
		</div>
	)
}