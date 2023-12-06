'use client';

import AuthCheck from '@/components/AuthCheck';
import { firestore, postToJSON } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const List = () => {
	const leadRef = collection(firestore, 'leads');
	const leadQuery = query(leadRef, orderBy('createdAt', 'asc'));

	const [lead, setLead] = useState([]);

	useEffect(() => {
		const query = async () => {
			const leads = (await getDocs(leadQuery)).docs.map(postToJSON);

			setLead(leads);
		};
		try {
			query();
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<AuthCheck>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Phone Number</th>
							<th>Employer</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{lead.map((item, index) => {
							return (
								<tr key={index.name}>
									<th></th>
									<td>
										{item.name} {item.surname}
									</td>
									<td>{item.email}</td>
									<td>{item.number}</td>
									<td>{item.employer}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</AuthCheck>
	);
};

export default List;
