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

const BookingSessionReducer = {};

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
