
export default function App() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Arunkumar Moorthy</h1>
        <p className="text-lg text-gray-600">DevOps Engineer | Technical Support | Cloud & CI/CD Specialist</p>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <a href="mailto:arunkumarmoorthy247@gmail.com" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">📧 Email</a>
          <a href="https://www.linkedin.com/in/arun-m7" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">🔗 LinkedIn</a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          A results-driven IT Professional with 3+ years of experience in DevOps, Technical Support, and
          Software Process Management. Proven track record of improving operational efficiencies,
          streamlining workflows, and driving productivity.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Core Competencies</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>CI/CD, Log-Level Analysis, Fault-Tolerant Architecture</li>
          <li>GitHub, GitLab, Jira, Azure, AWS, NoSQL</li>
          <li>Java, Agile, Integration Testing</li>
          <li>Project Management, Customer Support</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">DevOps Engineer – Flexagon Software Solutions</h3>
            <p className="text-sm text-gray-500">Dec 2022 – Aug 2023, Mumbai, India</p>
            <ul className="list-disc list-inside">
              <li>Primary point of contact and app support</li>
              <li>Jira, SQL queries, plugin upgrades</li>
              <li>Boosted operational efficiency by 27%</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Technical Support Engineer – SMI Infosolutions</h3>
            <p className="text-sm text-gray-500">Dec 2021 – Oct 2022, Chennai</p>
            <ul className="list-disc list-inside">
              <li>Cloud support on Azure & AWS S3</li>
              <li>Database & story grooming</li>
              <li>Productivity up by 20%</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc list-inside">
          <li>MSc – Ulster University, London (2023–2025)</li>
          <li>B.Tech – Anna University – 70%</li>
          <li>ICSE – 80%, Tamil Nadu</li>
          <li>SSLC – 90%</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>Java Core & Advanced – IIHT</li>
          <li>Ethical Hacking – Ozone Cyber Security</li>
          <li>Business Development Training</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Languages</h2>
        <ul className="list-disc list-inside">
          <li>English – Bilingual</li>
          <li>Tamil – Native</li>
          <li>Malayalam – Conversational</li>
        </ul>
      </section>
    </main>
  );
}
