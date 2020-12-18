import * as FileSystem from "expo-file-system";
import { insertPlace, fetchPlaces } from "../../helpers/db";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResut = await fetchPlaces();
      console.log(dbResut);
      dispatch({
        type: SET_PLACES,
        places: dbResut.rows._array,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        "Dummy address",
        15.6,
        12.3
      );
      console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId.toString(),
          title: title,
          image: newPath,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
