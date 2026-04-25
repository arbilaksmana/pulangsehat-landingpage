"use client";

import { Agentation } from "agentation";

const isDevelopment = process.env.NODE_ENV === "development";
const agentationEndpoint = process.env.NEXT_PUBLIC_AGENTATION_ENDPOINT ?? "http://localhost:4747";
const isAgentationEnabled = process.env.NEXT_PUBLIC_ENABLE_AGENTATION === "true";

export default function AgentationMount() {
  if (!isDevelopment || !isAgentationEnabled) {
    return null;
  }

  return <Agentation endpoint={agentationEndpoint} />;
}
