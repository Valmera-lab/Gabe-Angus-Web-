import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Send, CheckCircle } from "lucide-react";

type Step = {
  question: string;
  options: { label: string; price: number }[];
};

const steps: Step[] = [
  {
    question: "What type of website do you need?",
    options: [
      { label: "Trades Website", price: 500 },
      { label: "E-Commerce Store", price: 500 },
      { label: "Business Website", price: 500 },
      { label: "Portfolio", price: 500 },
    ],
  },
  {
    question: "Do you need full SEO optimisation?",
    options: [
      { label: "Yes, full SEO optimisation (+£100/mo)", price: 0 },
      { label: "No, basic SEO is fine", price: 0 },
    ],
  },
  {
    question: "How fast do you need it?",
    options: [
      { label: "No rush (2–4 weeks)", price: 0 },
      { label: "Standard (1–2 weeks)", price: 0 },
      { label: "Rush (3–5 days)", price: 50 },
    ],
  },
];

const QuoteCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<(number | null)[]>(
    new Array(steps.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSelect = (optionIndex: number) => {
    const newSelections = [...selections];
    newSelections[currentStep] = optionIndex;
    setSelections(newSelections);
  };

  const totalEstimate = selections.reduce((sum, sel, i) => {
    if (sel !== null) {
      return sum + steps[i].options[sel].price;
    }
    return sum;
  }, 0);

  // Calculate monthly cost
  const hasSeo = selections[1] === 0;
  const monthlyCost = 199 + (hasSeo ? 100 : 0);

  const allSelected = selections.every((s) => s !== null);

  const handleSubmit = () => {
    const breakdown = selections
      .map((sel, i) => (sel !== null ? `${steps[i].question}: ${steps[i].options[sel].label}` : ""))
      .filter(Boolean)
      .join("\n");

    const mailBody = `Hi Gabe,%0D%0A%0D%0AI'd like a quote for a website.%0D%0A%0D%0AName: ${name}%0D%0AOne-time build: £${totalEstimate}%0D%0AMonthly: £${monthlyCost}/month (12-month minimum)%0D%0A%0D%0ABreakdown:%0D%0A${breakdown.replace(/\n/g, "%0D%0A")}%0D%0A%0D%0AThanks!`;

    window.open(
      `mailto:gabe.angus.web@gmail.com?subject=Website Quote Request — £${totalEstimate} build + £${monthlyCost}/mo&body=${mailBody}`,
      "_self"
    );
    setSubmitted(true);
  };

  const isLastStep = currentStep === steps.length - 1;
  const showForm = allSelected && isLastStep;

  return (
    <section id="quote" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-16">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-[13px] text-accent tracking-[0.3em] uppercase font-body mb-4">Quote Calculator</p>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
            Get an instant estimate
          </h2>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-3">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`text-[11px] font-body tracking-wider uppercase ${
                  i <= currentStep ? "text-accent" : "text-muted-foreground/40"
                } transition-colors duration-300`}
              >
                Step {i + 1}
              </div>
            ))}
          </div>
          <div className="h-px bg-border relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-accent"
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Live Estimate */}
        <motion.div
          layout
          className="mb-10 p-6 border border-accent/20 bg-accent/5 text-center"
        >
          <p className="text-[11px] text-accent tracking-[0.3em] uppercase font-body mb-2">One-time Build</p>
          <motion.span
            key={totalEstimate}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-5xl font-heading font-medium text-foreground inline-block"
          >
            £{totalEstimate}
          </motion.span>
          <p className="text-muted-foreground font-body text-[12px] mt-2">
            + £{monthlyCost}/month (12-month minimum)
          </p>
        </motion.div>

        {/* Steps */}
        {!submitted ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-heading font-medium mb-8 text-center">
                  {steps[currentStep].question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {steps[currentStep].options.map((opt, i) => (
                    <button
                      key={opt.label}
                      onClick={() => handleSelect(i)}
                      className={`p-6 border text-left transition-all duration-300 ${
                        selections[currentStep] === i
                          ? "border-accent bg-accent/10 text-foreground"
                          : "border-border/50 bg-card hover:border-accent/30 text-foreground/80"
                      }`}
                    >
                      <p className="font-body text-sm font-medium mb-1">{opt.label}</p>
                      {opt.price > 0 && (
                        <p className="text-accent text-[12px] font-body">
                          {i === 0 && currentStep === 1 ? "+£50/mo" : opt.label.includes("Rush") || currentStep === 2 ? `+£${opt.price}` : `£${opt.price}`}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-10">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground disabled:opacity-20 transition-all font-body text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>

              {!showForm ? (
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={selections[currentStep] === null}
                  className="flex items-center gap-2 text-accent hover:text-accent/80 disabled:opacity-20 transition-all font-body text-sm"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              ) : null}
            </div>

            {/* Contact Form */}
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 p-8 border border-border/50 bg-card"
              >
                <h3 className="text-lg font-heading font-medium mb-6">Send your quote request</h3>
                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 bg-background border border-border/50 text-foreground font-body text-sm focus:border-accent/50 outline-none transition-colors placeholder:text-muted-foreground/50"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 bg-background border border-border/50 text-foreground font-body text-sm focus:border-accent/50 outline-none transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!name || !email}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-accent text-accent-foreground font-body text-[13px] tracking-[0.15em] uppercase hover:bg-accent/80 disabled:opacity-30 transition-all duration-500"
                >
                  Send Quote Request <Send className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-medium mb-3">Quote sent!</h3>
            <p className="text-muted-foreground font-body text-sm">
              We'll get back to you at {email} within 24 hours.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default QuoteCalculator;
