"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Circle, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant='outline'
						size='icon'
						className={cn(
							"rounded-full border-none shadow-none active:ring-0 focus-visible:ring-0 outline-none focus-visible:ring-offset-0 data-[state=open]:bg-accent dark:data-[state=open]:bg-accent dark:bg-transparent dark:hover:bg-accent"
						)}
					>
						{theme === "system" ? (
							<Circle className='h-5 w-5 text-[#807E85] fill-[#807E85]' />
						) : theme === "light" ? (
							<Sun className='h-5 w-5 text-[#807E85] fill-[#807E85]' />
						) : (
							<Moon className='h-5 w-5 text-[#807E85] fill-[#807E85]' />
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align='end'
					alignOffset={0}
					className='rounded-xl shadow-xl bg-primary-bg text-primary-text font-rounded font-medium'
				>
					<DropdownMenuRadioGroup
						value={theme}
						onValueChange={setTheme}
						className='[&>*]:rounded-lg'
					>
						<DropdownMenuRadioItem value='system'>System</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value='light'>Light</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value='dark'>Dark</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

export default ThemeSwitch;
