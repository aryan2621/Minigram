import { initializeApp, getApps, getApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import "firebase/firestore";

const app =
   getApps.length === 0
      ? initializeApp({
         apiKey: process.env.FIRE_BASE_API_KEY,
         authDomain: process.env.FIRE_BASE_AUTH_DOMAIN,
         projectId: process.env.FIRE_BASE_PROJECT_ID,
         storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
         messagingSenderId: process.env.FIRE_BASE_MESSAGING_SENDER_ID,
         appId: process.env.FIRE_BASE_APP_ID,
      })
      : getApp();

const fireStorage = getStorage(app, 'gs://social-clone-2cd2d.appspot.com');

export const uploadImage = async (file: File) => { 
   try {
      const r = ref(fireStorage, `images/${file.size}_${new Date().getTime()}`);
      await uploadBytes(r, file);
      const downloadURL = await getDownloadURL(r);
      return downloadURL;
   } catch (error) {
      console.log(`Failed to upload image: ${error}`);
      throw error;
   }
}

export const uploadProfile = async (file: File) => {
   try {
      const r = ref(fireStorage, `profile/${file.size}_${new Date().getTime()}`);
      await uploadBytes(r, file);
      const downloadURL = await getDownloadURL(r);
      return downloadURL;
   } catch (error) {
      console.log(`Failed to upload image: ${error}`);
      throw error;
   }
}