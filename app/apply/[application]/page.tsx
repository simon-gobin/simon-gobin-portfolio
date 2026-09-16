import type { Metadata } from "next";
import Home from "../../page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function ApplicationPage({
  params,
}: {
  params: Promise<{ application: string }>;
}) {
  const { application } = await params;

  if (application === "apple-bpr-software-engineer-graduate-2026") {
    return (
      <Home
        applicationContext={{
          role: "Apple Software Engineer Graduate Programme · Business Process Re-Engineering",
          focus:
            "Python, machine learning and reliable data workflows for operational planning and automation.",
          cvHref: "/Simon-Gobin-Apple-BPR-Graduate-CV.pdf",
        }}
      />
    );
  }

  if (application === "apple-ets-site-reliability-engineer-2026") {
    return (
      <Home
        applicationContext={{
          role: "Apple Site Reliability Engineer · Enterprise Technology Services",
          focus:
            "Technical investigation, Python automation and reliable data workflows for service operations.",
          cvHref: "/Simon-Gobin-Apple-ETS-SRE-CV.pdf",
        }}
      />
    );
  }

  return <Home />;
}
