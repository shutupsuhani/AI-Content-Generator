'use client';

import React, { useState, useEffect } from "react";
import FormSection from "../components/FormSection";
import OutputSection from "../components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import Template from "@/app/(data)/Template";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "../../../../../utils/AiModal";
import { db } from "../../../../../utils/db";
import { AIOutput } from "../../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const Page: React.FC<PROPS> = (props) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");
  const { isLoaded, user } = useUser(); // Correct usage of useUser

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await props.params; // Await the resolution of params
      const resolvedTemplate = Template?.find(
        (item) => item.slug === resolvedParams["template-slug"]
      );
      setSelectedTemplate(resolvedTemplate);
    };

    resolveParams();
  }, [props.params]);

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);

    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAIPrompt = JSON.stringify(formData) + "," + selectedPrompt;

    try {
      const result = await chatSession.sendMessage(finalAIPrompt);
      console.log(result.response.text());
      setAIOutput(result?.response.text());
      await saveIndb(formData, selectedTemplate?.slug, result?.response.text());
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveIndb = async (formData: any, slug: any, aiResp: string) => {
    if (!isLoaded || !user) {
      console.error("User data is not available.");
      return;
    }

    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user.primaryEmailAddress?.emailAddress || "Anonymous", // Fallback if email is unavailable
      createdAt: moment().format("DD/MM/YYYY"), // Correct year format
    });

    console.log(result);
  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/** Form Section */}
        <div>
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={(v: any) => GenerateAIContent(v)}
            loading={loading}
          />
        </div>

        {/** Text Editor Section */}
        <div className="md:col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default Page;
