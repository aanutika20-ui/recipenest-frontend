// src/components/ChefProfile/ChefProfile.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

function ChefProfile() {
  const { id } = useParams();
  const [chef, setChef] = useState(null);

  useEffect(() => {
    const fetchChef = async () => {
      const docRef = doc(db, 'chefs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setChef(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchChef();
  }, [id]);

  if (!chef) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <img src={chef.image} alt={chef.name} className="rounded-circle mb-3" style={{ width: '128px', height: '128px' }} />
<h1 className="h4 fw-bold">{chef.name}</h1>
   <p>{chef.bio}</p>
      {/* Add portfolio details here */}
    </div>
  );
}

export default ChefProfile;
