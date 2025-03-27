import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { categories } from "@/lib/challeges-data";
import ButtonStart from "@/components/button-start";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16 mt-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text1">
            Master Python Through Practice
          </h1>
          <p className="text-xl text-text2 max-w-3xl mx-auto">
            Enhance your Python skills by solving real-world coding challenges.
            Choose your difficulty level and start coding today!
          </p>
          <ButtonStart />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 md:px-36">
          {categories.map((category) => (
            <Card
              key={category.slug}
              className="bg-gradient-to-t from-backgroundblue/20 to-white/10 backdrop-blur-sm border-none text-text1 md:h-72 flex flex-col justify-between md:hover:scale-110 transition-transform duration-700"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
                <CardDescription className="text-text2">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <div>
                <CardContent>
                  <p className="text-text1">
                    {category.count} challenges available
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-text2 hover:bg-cta1 text-backgroundgrey font-bold"
                    asChild
                  >
                    <Link href={`/challenges/${category.slug}`}>
                      View Challenges
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </section>
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-text1">
            Why Python School?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="p-6 rounded-lg bg-white/5">
              <h3 className="text-xl font-semibold mb-3 text-text1">
                Structured Learning
              </h3>
              <p className="text-text2">
                Progress from basic to advanced concepts with our carefully
                curated challenges.
              </p>
            </article>
            <article className="p-6 rounded-lg bg-white/5">
              <h3 className="text-xl font-semibold mb-3 text-text1">
                Detailed Solutions
              </h3>
              <p className="text-text2">
                Learn from comprehensive explanations and best practices in our
                solutions.
              </p>
            </article>
            <article className="p-6 rounded-lg bg-white/5">
              <h3 className="text-xl font-semibold mb-3 text-text1">
                Real-world Problems
              </h3>
              <p className="text-text2">
                Tackle challenges inspired by actual programming scenarios and
                interviews.
              </p>
            </article>
          </div>
        </section>
      </div>

      <footer className="py-8 text-center text-text2 border-t border-white/10">
        <div className="">
          <p>© 2025 Fuerte. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
