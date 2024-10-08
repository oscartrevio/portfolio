import React from "react";

export default function Quote({
	children,
	author,
}: {
	children: React.ReactNode;
	author: string;
}) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='font-instrument text-2xl text-center text-balance'>
				“{children}”
			</div>
			<div className='font-instrument text-center text-balance text-lg'>
				—{author}
			</div>
		</div>
	);
}
