"use client"
import Sidebar from "../../component/Sidebar";
import Content from "../../component/Content";
import Header from "../../component/Header";
import TestComponent from "../../component/TestComponent";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-12">
        {" "}
        {/* Add padding-top to avoid overlap */}
        <h1 className="flex justify-center text-center text-2xl leading-tight tracking-tighter">
          Prabhat is a Bad Boy
        </h1>
        <Sidebar />
        <Content />
        <TestComponent/>
      </div>
    </>
  );
}
