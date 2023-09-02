import Layout from "../../sharable-components/Layout";
import React from "react";
import StatBox from "./components/StatsBox";


export default function Home() {
  return (
    <Layout>
      <div className="fixed left-1/4 top-0 mt-16 ml-[-60px] w-full md:w-3/4 z-10">
        <StatBox />
      </div>
    </Layout>
  );
}
