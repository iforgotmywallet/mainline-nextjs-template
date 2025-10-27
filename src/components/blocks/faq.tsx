import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Getting Started",
    questions: [
      {
        question: "How do I generate my first stock report?",
        answer:
          "Simply enter any stock ticker symbol (like AAPL, TSLA, or MSFT) and our AI agents will generate a comprehensive analysis report within seconds using real-time market data.",
      },
      {
        question: "What data sources does StockNotes use?",
        answer:
          "We integrate with multiple premium financial data providers to ensure accuracy and completeness, including real-time market data, financial statements, news feeds, and analyst reports.",
      },
      {
        question: "How accurate are the AI-generated reports?",
        answer:
          "Our multi-agent system cross-references multiple data sources and uses debate-style analysis to provide balanced perspectives. All analysis includes source citations for verification.",
      },
    ],
  },
  {
    title: "Features & Pricing",
    questions: [
      {
        question: "What's included in the free plan?",
        answer:
          "The free plan includes 5 stock reports per month with basic AI analysis and real-time data access. Perfect for individual investors getting started.",
      },
      {
        question: "Can I upgrade or downgrade my plan anytime?",
        answer:
          "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.",
      },
    ],
  },
  {
    title: "Technical Questions",
    questions: [
      {
        question: "Do you offer API access?",
        answer:
          "API access is available with our Enterprise plan, allowing you to integrate StockNotes analysis directly into your existing workflows and applications.",
      },
      {
        question: "How often is the data updated?",
        answer:
          "Market data is updated in real-time during trading hours. Fundamental data and financial statements are updated as soon as they become available from our data providers.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
