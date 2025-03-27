"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Code } from "lucide-react";
import { challenges } from "@/lib/challenges";
import { validCategories } from "@/lib/challeges-data";

type Challenge = {
  title: string;
  difficulty: string;
  description: string;
  hints: string[];
  solution: string;
};

export default function ChallengePage() {
  const url = usePathname().split("/");
  const category = url[2];
  const slug = url[3];

  const [showSolution, setShowSolution] = useState(false);

  if (!validCategories.includes(category)) {
    notFound();
  }

  const Category = challenges[category];

  const challenge = Category[slug] as Challenge;

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href={`/challenges/${category}`}
            className="inline-flex items-center text-text2 hover:text-text1 mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
            Challenges
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-text1">
                {challenge.title}
              </h1>
              <div className="mt-2 inline-block px-2 py-1 rounded-md bg-white/10 text-sm text-text2">
                {challenge.difficulty}
              </div>
            </div>

            <Button
              className="mt-4 md:mt-0 bg-cta1 hover:bg-cta1/90 text-black"
              onClick={() => setShowSolution(!showSolution)}
            >
              <Code className="h-4 w-4 mr-2" />
              {showSolution ? "Hide Solution" : "Show Solution"}
            </Button>
          </div>
        </div>

        <Card className="mb-8 bg-white/10 backdrop-blur-sm border-none">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-text1">
              Problem Description
            </h2>
            <p className="text-text2 mb-6">{challenge.description}</p>

            {challenge.hints && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-text1">Hints</h3>
                <ul className="list-disc pl-5 text-text2">
                  {challenge.hints.map((hint, index) => (
                    <li key={index} className="mb-1">
                      {hint}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>

        {showSolution && (
          <Card className="mb-8 bg-white/10 backdrop-blur-sm border-none">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-text1">
                Solution
              </h2>
              <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                <pre className="text-text1 whitespace-pre-wrap">
                  <code className="select-text selection:bg-cta1/50">
                    {challenge.solution}
                  </code>
                </pre>
              </div>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}
