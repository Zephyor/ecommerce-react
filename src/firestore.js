import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export const fetchGameData = async () => {
  const gamesCollection = collection(firestore, 'games');
  const snapshot = await getDocs(gamesCollection);

  if (!snapshot.empty) {
    const games = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return games;
  } else {
    console.log('No data found.');
    return null;
  }
};

export const fetchGameById = async (id) => {
  const gamesCollection = collection(firestore, 'games');
  const snapshot = await getDocs(gamesCollection);

  if (!snapshot.empty) {
    const game = snapshot.docs.find((doc) => doc.id === id);
    return game.data();
  } else {
    console.log('No data found.');
    return null;
  }
};
