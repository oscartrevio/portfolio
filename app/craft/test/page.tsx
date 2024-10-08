/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState } from "react";
import { Cursor } from "@/components/cursor";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import Quote from "@/components/quote";

export default function Page() {
	return (
		<>
			<div className='flex h-[400px] w-full items-center justify-center border'>
				<Cursor
					attachToParent
					variants={{
						initial: { scale: 0.3, opacity: 0 },
						animate: { scale: 1, opacity: 1 },
						exit: { scale: 0.3, opacity: 0 },
					}}
					springConfig={{
						bounce: 0.001,
					}}
					transition={{
						ease: "easeInOut",
						duration: 0.15,
					}}
				>
					<motion.div
						animate={{
							width: 16,
							height: 16,
						}}
						className='flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40'
					></motion.div>
				</Cursor>
			</div>
			<div>
				<Quote author={"Steve Jobs"}>
					We used to dream about this stuff. Now we get to build it. It&apos;s
					pretty great.
				</Quote>
			</div>
		</>
	);
}
