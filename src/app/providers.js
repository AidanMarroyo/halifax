'use client';
import { UserContext } from '@/lib/context';
import { useUserData } from '@/lib/hooks';

export function Providers({ children }) {
	const userData = useUserData();
	return (
		<UserContext.Provider value={userData}>{children}</UserContext.Provider>
	);
}
