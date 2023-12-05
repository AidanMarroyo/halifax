import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
	collection,
	collectionGroup,
	getDocs,
	getFirestore,
	limit,
	query,
	where,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyD3TmMKWz4qi-uhpECV9sJv2aD5kqNs_6I',

	authDomain: 'halifax-e3b3f.firebaseapp.com',

	projectId: 'halifax-e3b3f',

	storageBucket: 'halifax-e3b3f.appspot.com',

	messagingSenderId: '90181799550',

	appId: '1:90181799550:web:96743a436e4876d93c122f',

	measurementId: 'G-7DN0MMZLGR',
};

let firebaseApp;

if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
} else {
	firebaseApp = getApp();
}

// Auth exports

export const auth = getAuth(firebaseApp);

// Firestore exports
export const firestore = getFirestore(firebaseApp);

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
	const q = query(
		collection(firestore, 'users'),
		where('username', '==', username),
		limit(1)
	);
	const userDoc = (await getDocs(q)).docs[0];
	return userDoc;
}

export async function getAdminDocWithSlug(slug) {
	const q = query(
		collectionGroup(firestore, 'dispatch'),
		where('slug', '==', slug),
		limit(1)
	);
	const userDoc = (await getDocs(q)).docs[0];
	return userDoc;
}

export async function getAdminDocWithName(name) {
	const q = query(
		collectionGroup(firestore, 'users'),
		where('name', '==', name),
		limit(1)
	);
	const userDoc = (await getDocs(q)).docs[0];
	return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */

export function postToJSON(doc) {
	const data = doc.data();

	const coworkers = data.coworkers || []; // Handle case when data.coworkers is undefined or null

	return {
		...data,
		// createdAt: data?.createdAt.toMillis() || 0,
		// updatedAt: data?.updatedAt.toMillis() || 0,
		// coworkers: coworkers.map((coworker) => ({
		// 	...coworker,
		// 	start: coworker.start ? coworker.start.toString() : null,
		// 	end: coworker.end ? coworker.end.toString() : null,
		// })),
	};
}
