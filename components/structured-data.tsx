export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdulazizbek Abdusodiqov",
    alternateName: ["Abdulaziz-dev", "abu-dev", "abdulazizdev"],
    jobTitle: "FullStack Developer",
    url: "https://abdulazizdev.uz",
    sameAs: ["https://github.com/AbdulazizbekAbdusodiqov", "https://t.me/dev_abu"],
    knowsAbout: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Sequelize",
      "Prisma",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
