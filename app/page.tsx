import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"

export default function Home() {
  const categories = [
    {
      title: "Easy",
      description: "Perfect for beginners. Simple problems to build your foundation.",
      count: 15,
      slug: "easy",
    },
    {
      title: "Medium",
      description: "For intermediate programmers. Challenges that require deeper thinking.",
      count: 25,
      slug: "medium",
    },
    {
      title: "Advanced",
      description: "Complex problems for experienced Python developers.",
      count: 10,
      slug: "advanced",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#d6ceaa]">Master Python Through Practice</h1>
          <p className="text-xl text-[#a69a90] max-w-3xl mx-auto">
            Enhance your Python skills by solving real-world coding challenges. Choose your difficulty level and start
            coding today!
          </p>
          <Button className="mt-8 bg-[#ecba09] hover:bg-[#ecba09]/90 text-black font-bold px-8 py-6 text-lg">
            <Link href="#categories">Start Coding Now</Link>
          </Button>
        </section>

        <section id="categories" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <Card key={category.slug} className="bg-white/10 backdrop-blur-sm border-none text-[#d6ceaa]">
              <CardHeader>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
                <CardDescription className="text-[#a69a90]">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#d6ceaa]">{category.count} challenges available</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#ecba09] hover:bg-[#ecba09]/90 text-black" asChild>
                  <Link href={`/challenges/${category.slug}`}>View Challenges</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#d6ceaa]">Why Practice with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/5">
              <h3 className="text-xl font-semibold mb-3 text-[#d6ceaa]">Structured Learning</h3>
              <p className="text-[#a69a90]">
                Progress from basic to advanced concepts with our carefully curated challenges.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <h3 className="text-xl font-semibold mb-3 text-[#d6ceaa]">Detailed Solutions</h3>
              <p className="text-[#a69a90]">
                Learn from comprehensive explanations and best practices in our solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <h3 className="text-xl font-semibold mb-3 text-[#d6ceaa]">Real-world Problems</h3>
              <p className="text-[#a69a90]">
                Tackle challenges inspired by actual programming scenarios and interviews.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="py-8 text-center text-[#a69a90] border-t border-white/10">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} PythonPro Challenges. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

