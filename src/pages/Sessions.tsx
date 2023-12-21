import { SESSIONS } from "../dummy-sessions.ts"; // normally, we would probably load that from a server
import SessionItem from "./SessionItem.tsx";

export default function SessionsPage() {
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      {/* Todo: Output list of sessions */}

      <ul id="sessions-list">
        {SESSIONS.map((item) => (
          <SessionItem {...item} />
        ))}
      </ul>
    </main>
  );
}


