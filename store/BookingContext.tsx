import { type ReactNode, createContext, useReducer } from "react";

type SessionItem = {
  id: string;
  title: string;
  date: "string";
  summary: string;
};

type SessionState = {
  item: SessionItem[];
};

type SessionType = {
  addSeesion: (addSession: SessionItem) => void;
  removeSesion: (id: string) => void;
} & SessionState;

type SessionProviderType = {
  children: ReactNode;
};

type AddSeesionActionType = {
  type: "ADD_SESSION";
  payload: SessionItem;
};

type DeleteSessionActionType = {
  type: "DELETE_SESSION";
  payload: string;
};

type AllActionTypes = AddSeesionActionType | DeleteSessionActionType;

const BookingSessionReducer = (state: SessionState, action: AllActionTypes) => {
  if (action.type === "ADD_SESSION") {
    return [...state.item, { ...action.payload }];
  }

  if (action.type === "DELETE_SESSION") {
    return state.item.filter((item) => item.id !== action.payload);
  }
};

const initialState: SessionState = {
  item: [],
};

const BookingContext = createContext<SessionType | null>(null);

const BookingSessionProvider = ({ children }: SessionProviderType) => {
  const [bookingState, dispatch] = useReducer(
    BookingSessionReducer,
    initialState
  );

  return <BookingContext.Provider> {children} </BookingContext.Provider>;
};
