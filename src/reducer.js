import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token: "BQDLdfBCORNuVGqwCCnKO1i4c9tcbhWH6697RoQk56GVCZ5kS6vmUo2U82ZIF0W7E1Hp65nBSv4DuI3V2wBhxl952WKAzDPfCnqTwFfuBQA-arX_UIR-29GJ858T4MD_BIi_BDLdv25GJf_jivhncRXwVxAlSEBJBLeSi4kd4lebQkqQ0yUYCFJMZoKjkkbAT-I19fNlR4l-rpEGhVZu"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
