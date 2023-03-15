import { createSlice } from "@reduxjs/toolkit";

const profile = {
  firstName: "Jose",
  lastName: "Annunziato",
  handle: "@jannunzi",
  profilePicture: "jonathan-boccara.jpeg",
  bannerPicture: "polyglot.png",
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
  website: "youtube.com/webdevtv",
  location: "Boston, MA",
  dateOfBirth: "7/7/1968",
  dateJoined: "4/2009",
  followingCount: 340,
  followersCount: 223,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    editName(state, action) {
      console.log(action.payload);
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    },
    editBio(state, action) {
      console.log(action.payload);
      return {
        ...state,
        bio: action.payload,
      };
    },
    editLocation(state, action) {
      return {
        ...state,
        location: action.payload,
      };
    },
    editWebsite(state, action) {
      return {
        ...state,
        website: action.payload,
      };
    },
    editBirthDate(state, action) {},
  },
});

export const { editName, editBio, editLocation, editWebsite, editBirthDate } =
  profileSlice.actions;

export default profileSlice.reducer;
