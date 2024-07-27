import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Serenity Suites",
    default: "Welcome / Serenity Suites",
  },
  description: `Welcome to Serenity Suites, 
      where luxury meets comfort in an oasis of tranquility.
      Located in the heart of Italian Dolomites,
      our hotel offers a serene escape from the hustle and bustle of daily life,
      providing the perfect setting for relaxation, rejuvenation, and unforgettable experiences.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className}
         antialiased bg-primary-950 text-primary-100 min-h-screen 
         flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
