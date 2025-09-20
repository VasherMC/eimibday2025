import Image from "next/image";
import { messages } from "./messages";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="team-name"># General</h1>
        <p className="channel-desc">Company announcements and general chat</p>
      </div>
      <div className="header-right"></div>
    </header>
  );
}

function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="avatar" style={{ width: size, height: size }} aria-hidden>
      {initials}
    </div>
  );
}

function Message({ author, time, content, replies }: { author: string; time: string; content: React.ReactNode; replies?: any[] }) {
  return (
    <div className="message">
      <Avatar name={author} />
      <div className="message-body">
        <div className="message-meta">
          <strong className="author">{author}</strong>
          <span className="time">{time}</span>
        </div>
        <div className="message-content">{content}</div>
        {replies && replies.length > 0 && (
          <div className="replies">
            {replies.map((r, i) => (
              <div key={i} className="reply">
                <Avatar name={r.author} size={32} />
                <div className="reply-body">
                  <div className="reply-meta">
                    <strong className="author">{r.author}</strong>
                    <span className="time">{r.time}</span>
                  </div>
                  <div className="reply-content">{r.content}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const sample = [
    {
      author: "Liquid Skelie",
      time: "Today, 9:12 AM",
      content: (
        <>
          It's Eimi's birthday today! 🎉 You have to post a message or get a reprimand from HR
        </>
      ),
      replies: messages,
    },
  ];

  return (
    <main className="container">
      <Header />
      <section className="thread">
        <div className="thread-panel">
          {sample.map((m, i) => (
            <Message key={i} author={m.author} time={m.time} content={m.content} replies={m.replies} />
          ))}
        </div>
      </section>
    </main>
  );
}
