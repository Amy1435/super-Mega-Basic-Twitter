import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Mega Twitter",
  description: "A place to share your thoughts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <main>
        <Nav />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
