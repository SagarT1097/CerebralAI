import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "lucide-react";

import { useAuth } from "@clerk/nextjs";

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Pricing testing the commit - secong stage?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="bg-[#192339] border-none text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Free</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 px-0 text-center">
            <p className="text-5xl font-bold">$0</p>
            <p className="text-xl mt-4">per month</p>
            <div className="mt-8"></div>
          </CardContent>
        </Card>
        <Card className="bg-[#192339] border-none text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Pro</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 px-0 text-center">
            <p className="text-5xl font-bold">$20</p>
            <p className="text-xl mt-4">per month</p>
            <div className="mt-8"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
