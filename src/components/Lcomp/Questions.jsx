"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const faqData = [
  {
    question: "What is Bone Marrow Transplant (BMT)?",
    answer:
      "A BMT is a medical procedure that involves replacing or restoring damaged or destroyed bone marrow with healthy stem cells, essential for blood cell production",
  },
  {
    question: "What are Indications for BMT?",
    answer:
      "BMT is undertaken to treat various haematological disorders, such as leukaemias, lymphomas, sickle cell, myeloma, aplastic anaemia, and certain genetic conditions, by rejuvenating blood-forming cells",
  },
  {
    question: "What are the common Complications of BMT?",
    answer:
      "Risks include infections, graft failure, graft-versus-host disease (GVHD), and potential side effects from high-dose chemotherapy or radiation during the conditioning process.",
  },
  {
    question: "What is Graft-Versus-Host Disease (GVHD)?",
    answer:
      "GVHD is a complication where donor cells attack the recipient's tissues. Preventive measures and treatments are implemented to minimize its occurrence and impact.",
  },
  {
    question: "How Can I Prepare for a BMT?",
    answer:
      "Preparation involves consultation with the transplant team, eligibility assessments, stem cell collection (autologous or allogeneic), and the conditioning process involving chemotherapy or radiation.",
  },
  {
    question: "What Happens During the BMT Procedure?",
    answer:
      "The procedure includes the infusion of healthy stem cells into the patient's bloodstream. The conditioning process eliminates diseased cells and creates an environment for the engraftment of new cells.",
  },
  {
    question: "What Hospital Processes Should I Expect?",
    answer:
      "Hospital processes involve continuous monitoring, infection prevention measures, managing potential complications, and a focus on supportive care during the recovery phase.",
  },
  {
    question: "What Medications Will I Take After BMT?",
    answer:
      "Post-BMT medications may include immunosuppressants, anti-infective medications, and symptom management drugs. Adherence to prescribed medications is crucial for ongoing well-being.",
  },
  {
    question: "How Long Does the Recovery Process Take?",
    answer:
      "The recovery timeline varies, but patients typically transition to outpatient care as they progress. Continuous monitoring and follow-up are part of the ongoing recovery process.",
  },
  {
    question: "What Lifestyle Adjustments Are Necessary After BMT?",
    answer:
      "Lifestyle adjustments may include nutritional guidance, exercise, stress management, and maintaining a healthy routine to support overall well-being.",
  },
  {
    question: "How Can I Cope with the Emotional Challenges Post-BMT?",
    answer:
      "Coping strategies involve accessing counselling services, participating in support groups, engaging in creative therapies, and celebrating milestones to foster emotional resilience.",
  },
  {
    question: "Can I Return to Normal Activities After BMT?",
    answer:
      "Gradual re-integration into daily life activities is encouraged. This may include work, social events and other routines. During the time of recover our team will closely watch and give advice.",
  },
  {
    question: "What other support is required?",
    answer:
      "Ongoing support includes regular check-ins with the healthcare team, educational resources and involvement in support groups and peer-mentoring programmes.",
  },
];

// Reusable FAQItem Component
const FAQItem = ({ question, answer, handleToggle, isOpen }) => {
  const [aosInitialized, setAOSInitialized] = useState(false);

  const initializeAOS = () => {
    if (!aosInitialized) {
      setAOSInitialized(true);
      import("aos").then((AOS) => {
        AOS.init({ once: true }); // Initialize AOS only once
      });
    }
  };

  return (
    <div className="">
      <div
        className="flex box_shadow cursor-pointer hover:box_shadow_hover items-center justify-between py-7 px-[18px] lg:px-16 border-l-[8px] border-primary_red rounded-lg bg-[#FCFCFE]"
        onClick={handleToggle}
      >
        <h3 className="text-base lg:text-[18px] font-bold tracking-wide capitalize">
          {question}
        </h3>
        {isOpen ? (
          <FaChevronDown className="text-xl lg:text-2xl text-primary_red" />
        ) : (
          <FaChevronUp className="text-xl lg:text-2xl text-primary_red" />
        )}
      </div>
      {isOpen && (
        <div
          data-aos="fade-down"
          className="py-10 px-[25px] lg:px-16 lg:h-[260px] bg-[#fdeaea] w-[98.5%] h-max m-auto mt-[5px]"
        >
          <p className="mt-5 w-full text-[#232323]/60 leading-relaxed text-base lg:text-[19px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

// Questions Component
const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="space-y-3 mb-20">
      {faqData.map((data, index) => (
        <FAQItem
          key={index}
          question={data.question}
          answer={data.answer}
          handleToggle={() => handleToggle(index)}
          isOpen={openIndex === index}
        />
      ))}
    </section>
  );
};

export default Questions;
