import React from "react";
import ProblemList from "../components/ProblemList";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-zinc-900 text-white">
      <Header />
      <main className="flex flex-col items-center">
        <div className="container mx-auto px-4 text-center py-8">
          <h1 className="text-3xl font-bold">DSA Problem Tracker</h1>
          <p className="mt-6 text-zinc-300">
            Track your progress through these data structures and algorithms
            problems. Mark them as solved and share your achievements!
          </p>
        </div>
        <div className="container mx-auto px-4 md:w-5/6">
          <ProblemList />
        </div>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default Home;
