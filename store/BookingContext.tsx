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
  addSession: (data: SessionItem) => void;
  removeSession: (id: string) => void;
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

const BookingSessionReducer = (
  state: SessionState,
  action: AllActionTypes
): SessionState => {
  if (action.type === "ADD_SESSION") {
    return {
      item: [
        ...state.item,
        {
          date: action.payload.date,
          summary: action.payload.summary,
          title: action.payload.title,
          id: action.payload.id,
        },
      ],
    };
  }

  if (action.type === "DELETE_SESSION") {
    return { item: state.item.filter((item) => item.id !== action.payload) };
  }

  return state;
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

  const onAddSession = (data: SessionItem) => {
    dispatch({ type: "ADD_SESSION", payload: data });
  };

  const onRemoveSession = (id: string) => {
    dispatch({ type: "DELETE_SESSION", payload: id });
  };

  const value = {
    addSession: onAddSession,
    removeSession: onRemoveSession,
    item: bookingState.item,
  };

  return (
    <BookingContext.Provider value={value}>
      {" "}
      {children}{" "}
    </BookingContext.Provider>
  );
};

export default BookingSessionProvider;
