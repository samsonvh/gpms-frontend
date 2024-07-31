"use client";
import Link from "next/link";
import { useState } from "react";
import Specifications from "./specifications";
import Processes from "./processes";
import SemiFinishedProducts from "./semi-finished-products";

export default function TabsDescription({
  product,
}: {
  product: ProductDetailProps;
}) {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <div className="flex justify-center space-y-5 border-b-2 pb-3 mx-16">
        <ul className="flex space-x-10">
          <li>
            <Link
              href="#tab1"
              onClick={() => handleTabClick("tab1")}
              className={
                activeTab === "tab1"
                  ? "text-blue-600 pb-1 border-b-2 border-blue-500"
                  : "hover:text-blue-600"
              }
            >
              Semi-finished-products List
            </Link>
          </li>
          <li>
            <Link
              href="#tab2"
              onClick={() => handleTabClick("tab2")}
              className={
                activeTab === "tab2"
                  ? "text-blue-600 pb-1 border-b-2 border-blue-500"
                  : "hover:text-blue-600"
              }
            >
              Specifications
            </Link>
          </li>
          <li>
            <Link
              href="#tab3"
              onClick={() => handleTabClick("tab3")}
              className={
                activeTab === "tab3"
                  ? "text-blue-600 pb-1 border-b-2 border-blue-500"
                  : "hover:text-blue-600"
              }
            >
              Processes List
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center my-5 mx-16">
        {activeTab === "tab1" && (
          <div id="tab1">
            <SemiFinishedProducts items={product.semiFinishedProducts} />
          </div>
        )}
        {activeTab === "tab2" && (
          <div id="tab2">
            <Specifications items={product.specifications} />
          </div>
        )}
        {activeTab === "tab3" && (
          <div id="tab3">
            <Processes items={product.processes} />
          </div>
        )}
      </div>
    </>
  );
}
