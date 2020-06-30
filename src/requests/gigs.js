import { fireStore } from '../config/firebase';
import { firestore } from 'firebase';

export const createGig = (data) =>
  fireStore()
    .collection('gigs')
    .add({ ...data, createdAt: firestore.Timestamp.now() });

export const fetchGigs = () => fireStore().collection('gigs').get();
