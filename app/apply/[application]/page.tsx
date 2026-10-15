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

  if (application === "laya-senior-provider-relations-analyst-28653") {
    return (
      <Home
        applicationContext={{
          role: "Laya Healthcare · Senior Provider Relations Analyst",
          focus:
            "Operational analytics, Tableau and SQL reporting, data quality and stakeholder collaboration, supported by a background in healthcare education.",
          cvHref: "/Simon-Gobin-Laya-Provider-Relations-CV.pdf",
        }}
      />
    );
  }

  if (application === "apple-ets-insight-technical-analyst-200684581-1418") {
    return (
      <Home
        applicationContext={{
          role: "Apple Technical Analyst · ETS Insight",
          focus:
            "Technical investigation, data integrity and operational reporting, combining AppleCare support with SDS QBA experience and practical AI projects.",
          cvHref: "/Simon-Gobin-Apple-ETS-Insight-Technical-Analyst-CV.pdf",
        }}
      />
    );
  }

  if (application === "apple-sds-technical-analyst-200684428") {
    return (
      <Home
        applicationContext={{
          role: "Apple Technical Analyst · Strategic Data Solutions",
          focus:
            "Fraud investigation, Python and SQL analysis, and operational reporting informed by hands-on SDS experience.",
          cvHref: "/Simon-Gobin-Apple-SDS-Technical-Analyst-CV.pdf",
        }}
      />
    );
  }

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

  if (application === "whatnot") {
    return (
      <Home
        applicationContext={{
          role: "Whatnot · Application portfolio",
          focus:
            "Selected software, data and AI projects focused on practical problem solving and reliable delivery.",
          cvHref: "/Simon-Gobin-CV.pdf",
        }}
      />
    );
  }

  return <Home />;
}
