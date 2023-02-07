import Link from "next/link";
import Header from "./components/Header";

export default function Index() {
    return (
        <>
        <Header />
     <p>
      <Link
      href="/user/intro"
      >
      get started
      </Link>
      </p>
     </>
      )
    }
    