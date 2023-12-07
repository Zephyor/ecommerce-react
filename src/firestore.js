import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export const fetchGameData = async () => {
  const gamesCollection = collection(firestore, 'games');
  const snapshot = await getDocs(gamesCollection);

  if (!snapshot.empty) {
    const games = snapshot.docs.map(doc => doc.data());
    // Use the data in your application
    return games;
  } else {
    console.log('No data found.');
    return null;
  }
};
