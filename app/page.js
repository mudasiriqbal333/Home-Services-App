"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]); // Renamed state to 'categoryList'

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.categories);
    });
  };

  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} /> {/* Changed to match the prop name */}
    </div>
  );
}
