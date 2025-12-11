import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import JoinUs from "./JoinUsButton";
import ThemeToggle from "./Theme";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "Affiliates", href: "/affiliates" },
        { name: "Alumni", href: "/alumni" },
        { name: "Contact", href: "/contact" },
    ];

    const eventItems = [
        { name: "All Events", href: "/events" },
        { name: "Hackoverflow", href: "/events/hackoverflow" },
        { name: "IconCoderz", href: "/events/iconcoderz" },
        { name: "Hridayam", href: "/events/hridayam" },
        { name: "Codequest", href: "/events/codequest" },
        { name: "Edgecase", href: "/events/edgecase" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const theme = localStorage.getItem("theme") || "light";

    return (
        <header className="bg-white dark:bg-zinc-900 shadow-md transition-colors sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/logonobg.png"
                        alt="Logo"
                        className="h-14 w-auto"
                    />
                    <span className="font-bold text-primary dark:text-white hidden md:inline-block">
                        <span className="text-primary">SRKR </span><span className="text-accent">&lt;CODING CLUB&gt;</span>
                    </span>
                </Link>

                <nav className="hidden md:flex md:items-center md:gap-8">
                    {navLinks.map((link) => (
                        link.name === "Events" ? (
                            <div key={link.name} className="relative group py-2">
                                <button
                                    type="button"
                                    aria-haspopup="menu"
                                    aria-expanded={false}
                                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-primary"
                                >
                                    {link.name}
                                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                </button>
                                <div
                                    role="menu"
                                    className="absolute left-0 top-full pt-2 hidden group-hover:block focus-within:block z-50"
                                >
                                    <div className="w-56 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg">
                                        <ul className="py-2">
                                            {eventItems.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        to={item.href}
                                                        className="block px-3 py-2 text-sm text-muted-foreground dark:text-muted-foreground hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-primary"
                                                        role="menuitem"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <ThemeToggle />
                    <JoinUs />
                </nav>
                
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button onClick={toggleMenu} className="text-accent">
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden bg-white dark:bg-zinc-900 px-4 overflow-hidden transition-all duration-300 origin-top transform ${isMenuOpen ? "max-h-[500px] scale-y-100 opacity-100 py-4" : "max-h-0 scale-y-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                        link.name === "Events" ? (
                            <div key={link.name} className="flex flex-col">
                                <button
                                    type="button"
                                    className="flex items-center justify-between text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-primary"
                                    onClick={() => setEventsOpen(!eventsOpen)}
                                    aria-expanded={eventsOpen}
                                    aria-controls="mobile-events-submenu"
                                >
                                    {link.name}
                                    <ChevronDown className={`h-4 w-4 transition-transform ${eventsOpen ? "rotate-180" : "rotate-0"}`} />
                                </button>
                                <div id="mobile-events-submenu" className={`${eventsOpen ? "block" : "hidden"} mt-2 ml-3 border-l border-zinc-200 dark:border-zinc-800 pl-3"`}>
                                    {eventItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="block py-1 text-sm text-muted-foreground dark:text-muted-foreground hover:text-primary"
                                            onClick={() => { setIsMenuOpen(false); setEventsOpen(false); }}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-sm font-medium text-muted-foreground dark:text-muted-foreground hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <JoinUs />
                </nav>
            </div>
        </header>
    );
}