import { createContext } from "react";

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

const BookingContext = createContext<SessionType | null>(null);
