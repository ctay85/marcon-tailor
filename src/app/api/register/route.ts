import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const isProd = process.env.NODE_ENV === "production";
  const crmIntegrationUrl = isProd ? "https://app.lassocrm.com/registrant_signup/" : "https://app.lassocrm.com/registrant_signup/test"
  const body = await request.json();

  const response = await axios.post(crmIntegrationUrl, body);
  return NextResponse.json(response.data);
}