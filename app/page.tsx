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

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text1">
            Master Python Through Practice
          </h1>
          <p className="text-xl text-text2 max-w-3xl mx-auto">
            Enhance your Python skills by solving real-world coding challenges.
            Choose your difficulty level and start coding today!
          </p>
          <Button className="mt-8 bg-cta1 hover:bg-cta1/90 text-backgroundgrey font-bold px-8 py-6 text-lg">
            <Link href="#categories">Start Coding Now</Link>
          </Button>
        </section>
        <section
          id="categories"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {categories.map((category) => (
            <Card
              key={category.slug}
              className="bg-white/10 backdrop-blur-sm border-none text-text1"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
                <CardDescription className="text-text2">
                  {category.description}
                </CardDescription>
              </CardHeader>
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
            </Card>
          ))}
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-text1">
            Why Practice with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/5">
              <h3 className="text-xl font-semibold mb-3 text-text1">
                Structured Learning
              </h3>
              <p className="text-text2">
                Progress from basic to advanced concepts with our carefully
                curated challenges.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <h3 className="text-xl font-semibold mb-3 text-text1">
                Detailed Solutions
              </h3>
              <p className="text-text2">
                Learn from comprehensive explanations and best practices in our
                solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <h3 className="text-xl font-semibold mb-3 text-text1">
                Real-world Problems
              </h3>
              <p className="text-text2">
                Tackle challenges inspired by actual programming scenarios and
                interviews.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="py-8 text-center text-text2 border-t border-white/10">
        <div className="container mx-auto">
          <p>
            © {new Date().getFullYear()} PythonPro Challenges. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
