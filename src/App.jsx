import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

const steps = [Step1, Step2, Step3, Step4];

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({});
  const StepComponent = steps[step - 1];

  const next = () => {
    if (step < 4) setStep(step + 1);
  };

  const submit = () => {
    alert('Form submitted!');
  };

  return (
    <div className="pb-16 min-h-screen flex flex-col">
      <Header step={step} />
      <main className="flex-1 flex justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-lg p-4 space-y-4 shadow">
          <StepComponent data={form} onChange={setForm} />
          <button
            onClick={step === 4 ? submit : next}
            className="w-full py-2 text-white rounded bg-gradient-to-r from-red-600 to-red-400 hover:opacity-90 transition"
          >
            {step === 4 ? 'Submit' : 'Next'}
          </button>
          <p className="text-center text-sm text-gray-500">
            Your body—your journey. Start today.
          </p>
        </div>
      </main>
      <Footer active="Form" />
    </div>
  );
}
