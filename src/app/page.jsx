import Image from "next/image";
import Nav from "./components/Nav";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import Four from "./components/Four";
import Five from "./components/Five";
import Six from "./components/Six";
import Seven from "./components/Seven";
import Footer from "./components/Footer";
import Credit from "./components/Credit";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Footer />
      <Credit />
    </main>
  );
}
