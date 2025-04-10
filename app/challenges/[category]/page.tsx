import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { challengesByCategory, validCategories } from "@/lib/challeges-data";

type CategoryParams = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: CategoryParams) {
  const { category } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  const challenges =
    challengesByCategory[category as keyof typeof challengesByCategory];

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main className="min-h-screen">
      <section className="container px-4 py-12">
        <article className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-text1">
            {categoryTitle} Challenges
          </h1>
          <p className="text-text2">
            {category === "easy" &&
              "Perfect for beginners. Build your Python foundation with these simple problems."}
            {category === "medium" &&
              "For intermediate programmers. These challenges require deeper thinking and problem-solving skills."}
            {category === "advanced" &&
              "Complex problems for experienced Python developers. Test your advanced programming knowledge."}
          </p>
        </article>

        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <Card
              key={challenge.id}
              className="bg-white/10 backdrop-blur-sm border-none text-text1 flex flex-col justify-between"
            >
              <div>
                <CardHeader>
                  <CardTitle>{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text2">{challenge.description}</p>
                </CardContent>
              </div>
              <CardFooter className="">
                <Link href={`/challenges/${category}/${challenge.slug}`}>
                  <Button className="w-full bg-cta1 hover:bg-cta1/90 text-black ">
                    Solve Challenge
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </article>
      </section>
    </main>
  );
}
