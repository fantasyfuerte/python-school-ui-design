"use client";

import Link from "next/link";
import { useState } from "react";
import { notFound, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Code } from "lucide-react";
import { challenges } from "@/lib/challenges";
import { validCategories } from "@/lib/challeges-data";

interface Challenge {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  hints: string[];
}

export default function ChallengePage() {
  const url = usePathname().split("/");
  const category = url[2] as keyof typeof challenges;
  const slug = url[3];

  const [showSolution, setShowSolution] = useState(false);

  if (!validCategories.includes(category)) {
    notFound();
  }

  const Category = challenges[category] as { [key: string]: Challenge };
  const challenge = Category[slug] as Challenge;

  return (
    <main className="">
      <div className="contain px-4 py-8">
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
              <p className="mt-2 px-2 py-1 rounded-md bg-white/10 text-sm text-text2 w-fit">
                {challenge.difficulty}
              </p>
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
              <pre className="text-text1 overflow-x-scroll">
                <code className="select-text selection:bg-cta1/50">
                  {challenge.solution}
                </code>
              </pre>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}
