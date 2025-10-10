import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experience = [
  {
    role: "Student",
    company: "Btech CSE ",
    period: "2024 — Present",
    points: [
      "Punjab Technical University",
    ],
  },
  {
    role: "Student",
    company: "High School 11th - 12th",
    period: "2022 — 2024",
    points: [
      " CBSE GMSSS Sector 21 Chandigarh"
    ],
  },
  {
    role: "Student",
    company: "Primary,Middle,Secondry School Nur-10th",
    period: "~ — 2022",
    points: [
      "ICSE Punjab"
    ],
  },
]

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <Button asChild variant="outline">
          <Link href="/">Back home</Link>
        </Button>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* <Button asChild>
          <Link href="/resume">Download PDF</Link>
        </Button> */}
        <Button asChild variant="outline">
          <Link href="/about">About me</Link>
        </Button>
      </div>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-muted-foreground text-sm">
          I am a student and learner 
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="text-sm text-muted-foreground">
          <p>
            <span className="font-medium">Languages:</span> TypeScript, JavaScript, HTML, CSS , c , c++ , java , python
          </p>
          <p>
            <span className="font-medium">Frameworks/Librariea:</span> React, Next.js ,nodejs ,Express, spring boot, 
          </p>
          <p>
            <span className="font-medium">Tools:</span> git , docker 
          </p>
          <p>
            <span className="font-medium">Design:</span> Tailwind CSS, shadcn/ui
          </p>
        </div>
      </section>

      {/* Experience */}
      <div className="space-y-4">
        {experience.map((job) => (
          <Card key={job.role + job.company}>
            <CardHeader>
              <CardTitle className="text-balance">
                {job.role} — {job.company}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{job.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

