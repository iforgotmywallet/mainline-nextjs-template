import { Check } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";

const plans = [
  {
    name: "🎁 Signup Bonus",
    price: "Free",
    credits: "10 Credits",
    description: "Get started with a few research runs",
    features: [
      "10 research credits included",
      "Multiple AI agents per analysis",
      "Enhanced stock insights",
      "Perfect for trying the platform",
    ],
  },
  {
    name: "⚡ Starter Pack",
    price: "$12",
    credits: "40 Credits",
    description: "Great for individual investors",
    features: [
      "40 research credits",
      "Detailed stock analyses",
      "Agent-assisted research",
      "Explore new investment opportunities",
    ],
  },
  {
    name: "🚀 Pro Pack",
    price: "$30",
    credits: "120 Credits",
    description: "For active traders",
    features: [
      "120 research credits",
      "Deeper, faster insights",
      "More agents per research run",
      "Expanded research coverage",
      "Higher accuracy analysis",
    ],
  },
  {
    name: "💼 Power Pack",
    price: "$80",
    credits: "400 Credits",
    description: "Built for professionals",
    features: [
      "400 research credits",
      "Maximum agent capacity",
      "Best rate per credit",
      "Portfolio management support",
      "Heavy research workloads",
      "Scheduling features (coming soon)",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Pricing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Choose your credit pack based on your research needs. Each credit
            powers a comprehensive multi-agent stock analysis.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "🚀 Pro Pack"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground text-base font-semibold">
                    {plan.name}
                  </h3>
                  <div className="space-y-1">
                    <div className="text-foreground text-2xl font-bold">
                      {plan.price}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">
                      {plan.credits}
                    </div>
                  </div>
                </div>

                <span className="text-muted-foreground text-sm">
                  {plan.description}
                </span>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-4 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
