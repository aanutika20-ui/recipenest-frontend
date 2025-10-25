
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Importing Firebase config


export const addRecipe = async (title, ingredients, instructions) => {
  try {
    const docRef = await addDoc(collection(db, "recipes"), {
      title: title,
      ingredients: ingredients,
      instructions: instructions,
    });
    console.log("Recipe added with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding recipe:", e);



  export const getRecipes = async () => {
  const querySnapshot = await getDocs(collection(db, "recipes"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());


  }
}
