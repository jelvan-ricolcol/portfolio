import { GoogleGenAI } from "@google/genai";

interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
  GEMINI_API_KEY?: string;
  AI?: any;
}

interface ChatRequestBody {
  message?: string;
}

interface InquiryRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const PROFILE_CONTEXT = `
You are the official AI Assistant of Jelvan Ricolcol. 
Your objective is to provide professional, friendly, and human-like answers strictly and exclusively about Jelvan’s professional profile, academic credentials, experiences, and core services.

CRITICAL INSTRUCTIONS & RESTRICTIONS:
1. ONLY ANSWER QUESTIONS RELATED TO JELVAN RICOLCOL. If a user asks about any general-purpose topic, general coding questions, science, history, translation of unrelated text, creative writing, or general advice, you must politely decline. Acknowledge that you are Jelvan's dedicated concierge and state: "I am only programmed to discuss Jelvan's background, credentials, and digital services. Please let me know if you would like info on his Full Stack projects, Meta advertising, or HR operations."
2. CAPABILITY TO CONVERT TO HUMAN: If the user requests to talk to a human, "convert as human," "chat with a real person," "contact Jelvan," or hire him, you must gracefully say: "I am transitioning you to live human options. Please select the 'Contact Information' subtab in the Contact section to access Jelvan's direct handles or fill out the executive inquiry form for immediate response. My creators direct email is hello@jelvan.pro."
3. Maintain highly objective, refined, standard human conversant responses. Do not exaggerate or use corporate hype. Maintain complete professional composure.

Jelvan's Background & Core Information:
- Full Name: Jelvan Ricolcol, CHRA, MHRM, MAIB (Certified Human Resource Associate, Master of Human Resources and Talent Management, Master of AI for Business).
- Core Principle: "Technology should support human capability, accountability, and fair process design."
- Specializations: Bridging traditional operations and the future of work by combining human-centric HR strategies with modern web development, intelligent automation, and performance-driven digital advertising.
- Education:
  * Master in Human Resource Management and Talent management & Master in Artificial Intelligence for Business from Universidad Isabel 1, Spain (72 ECTS, 1800 Hours, Completed 2025).
  * B.S. in Business Administration, major in HR & Development Management (University of Northern Philippines, 2018)
- Certifications:
  * Full Stack Software Developer Professional Certificate (IBM - 18 US Credits/semester hours by American Council of Education , FIBAA - 6 credits semester hours, 15 complete subjects)
  * Certified Human Resource Associate (CHRA) from HREAP (Pasig City, Philippines)
  * AWS Certified AI Practitioner (Amazon Web Services, Dec 2025)
  * Responsible AI in a Global Context Professional Certificate (United Nations University)
  * Certified Lean Six Sigma White Belt (July 2023)
  * Getting Started as a Full-Stack Web Developer (LinkedIn, Apr 2026)
  * Succeeding as a First-Time Tech Manager (PMI, Apr 2026)
- Professional History:
  * Freelance Consultant (2021-Present): Completed 17 bespoke websites and client applications, handled CRM automations via Zapier and Make, and taught software coding/AI workflows.
  * English Global Advisor, Digital Advertising at Concentrix Malaysia (Current): Optimizing Meta advertising accounts, audience targeting, creatives, and budget scaling for global brands.
  * HR Operations & Onboarding Specialist at Teleperformance USA (2 Years): Managed HR Heldesk supporting 30,000+ employees, drafted policies, managed leaves, onboarding weekly 70+ agents.
  * Customer Service Generalist at Alorica Philippines (2 Years 6 Months): Order management, billing dispute resolutions on global Amazon subscription pipelines.
- Personal Narrative:
  * Relocating from Manila, Philippines to Kuala Lumpur, Malaysia in full independence. This journey taught him deep resilience, self-discipline, and curiosity, driving him to study coding, web development, and AI from the ground up and complete dual masters. He firmly believes in converting challenges into useful, scalable skills.

Contact & Relaying details:
- Email: hello@jelvan.pro
- LinkedIn: linkedin/jelvanricolcol
- Web: https://portfolio.jelvan.pro
- If the user asks for a resume, to hire him, or to contact him, ask for their WhatsApp number and email. Inform them that you are relaying their info to Jelvan's operational dashboard and trigger a simulated email dispatch of his master resume PDF to their email.
- Give highly objective, refined, standard human conversant responses. Do not exaggerate or use corporate hype. Maintain complete professional composure.
`;

const CREATOR_CREDENTIALS = 'Jelvan RICOLCOL, CHRA , MHRM, MAIB';
const CONTACT_REQUEST = `To help me relay your request to my creator (${CREATOR_CREDENTIALS}) and send you his complete resume, please share your WhatsApp number and email.`;

// Regexes for heuristic parsing in offline/fallback mode
const EMAIL_REGEX = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
const WHATSAPP_NUMBER_REGEX = /(?=(?:\D*\d){9,})\+?\d[\d()\-\s]*\d/;

// Strict local backup parser if Gemini API Key is not available or fails
const KNOWLEDGE_AREAS: Array<{ keywords: string[]; reply: string }> = [
  {
    keywords: ['purpose', 'mission', 'goal', 'about', 'who are you', 'who is', 'profile', 'background'],
    reply:
      'Jelvan is a Certified Human Resource Associate (CHRA) and AI Practitioner holding Dual Master’s Degrees (in AI for Business and HR & Talent Management). His work integrates human operations with digital systems, emphasizing responsible AI and workflow automation.',
  },
  {
    keywords: ['project', 'portfolio', 'apps', 'website', 'freelance', 'build', 'built', 'content', 'information'],
    reply:
      'Jelvan has completed 17 independent websites/applications for 10+ clients worldwide, prioritizing clean user-centered design, optimized layout metrics, and smooth responsiveness.',
  },
  {
    keywords: ['ai', 'automation', 'chatbot', 'workflow', 'prompt', 'research', 'related services', 'connected service'],
    reply:
      'Jelvan designs automated operational pipelines using Zapier and Make.com to eliminate repetitive workplace tasks, and builds smart client-engagement components.',
  },
  {
    keywords: ['hr', 'human resource', 'talent', 'corporate', 'us', 'people operations', 'employee', 'employees', 'client', 'clients', 'issue', 'issues', 'inquiry', 'inquiries'],
    reply:
      'With a background in major offshore hubs like Teleperformance and Concentrix, Jelvan designs compliant onboarding pipelines, audits workplace policies, and manages employee service helpdesks.',
  },
  {
    keywords: ['web', 'developer', 'development', 'frontend', 'website'],
    reply:
      'Jelvan is a developer in modern web technologies, building performant websites and operational widgets in React, TypeScript, HTML5, and Tailwind.',
  },
  {
    keywords: ['education', 'master', 'degree', 'study', 'university'],
    reply:
      'Jelvan completed a Master in Human Resource Management and Talent management & Master in Artificial Intelligence for Business from Universidad Isabel 1, Spain (72 ECTS, 1800 Hours) in 2025.',
  },
  {
    keywords: ['service', 'offer', 'help', 'work with', 'support'],
    reply:
      'Jelvan offers specialized digital execution across web design, custom business automations, Meta digital advertising campaigns, and HR documentation drafting.',
  },
  {
    keywords: ['contact', 'hire', 'collaborate', 'reach', 'resume', 'cv', 'pdf'],
    reply:
      'He is available for remote collaborations. I can relay your contact details directly to his pipeline and dispatch his comprehensive resume.',
  },
];

function buildBackupReply(message: string): string {
  const text = message.toLowerCase();
  const hasEmail = EMAIL_REGEX.test(message);
  const hasWhatsApp = WHATSAPP_NUMBER_REGEX.test(message);

  const isHumanRequest = text.includes('human') || text.includes('real person') || text.includes('talk to') || text.includes('operator') || text.includes('speak to') || text.includes('convert');
  if (isHumanRequest) {
    return `I am transitioning you to direct human options. Please select the "Contact Information" subtab above to view Jelvan's direct coordinates (hello@jelvan.pro, LinkedIn) or fill out the executive inquiry form for an immediate response.`;
  }

  if (!text.trim()) {
    return `Hello! How can I assist you with information about Jelvan's portfolio and services? ${CONTACT_REQUEST}`;
  }

  if (hasEmail && hasWhatsApp) {
    return `Thank you for sharing your contact details. I have forwarded your WhatsApp number and email to Jelvan (${CREATOR_CREDENTIALS}), and a copy of his resume PDF has been dispatched to your inbox. He will connect with you shortly!`;
  }

  if (hasEmail) {
    return `Thank you for providing your email. To trigger the portfolio dispatch and notify my creator via WhatsApp, could you also share your WhatsApp number?`;
  }

  if (hasWhatsApp) {
    return `Thank you for providing your WhatsApp number. Please also share your email so I can send the master resume PDF directly to your inbox.`;
  }

  const matches = KNOWLEDGE_AREAS.filter(({ keywords }) =>
    keywords.some((keyword) => text.includes(keyword))
  ).map(({ reply }) => reply);

  if (matches.length > 0) {
    return `${matches.slice(0, 2).join(' ')} ${CONTACT_REQUEST}`;
  }

  return `I am Jelvan's AI Assistant. I can detail his credentials in HR Operations, Full-Stack Development, AI Strategy, and Digital Advertising. For unrelated topics, I kindly request you to ask about his skills or select the "Contact Information" tab to connect with him directly.`;
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'access-control-allow-origin': '*',
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Endpoint for chat companion
    if (url.pathname === '/api/chat') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'POST, OPTIONS',
            'access-control-allow-headers': 'content-type',
          },
        });
      }

      if (request.method !== 'POST') {
        return jsonResponse({ error: 'Method not allowed' }, 405);
      }

      try {
        const body = (await request.json()) as ChatRequestBody;
        const message = typeof body.message === 'string' ? body.message.trim() : '';

        if (!message) {
          return jsonResponse({ reply: `Hello! How can I assist you with Jelvan Ricolcol's services or credentials? ${CONTACT_REQUEST}` });
        }

        const apiKey = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

        // Extract credentials if user typed contacts
        const hasEmail = EMAIL_REGEX.test(message);
        const hasWhatsApp = WHATSAPP_NUMBER_REGEX.test(message);

        let appendedResponse = "";
        if (hasEmail && hasWhatsApp) {
          appendedResponse = ` [System Action: I have forwarded your contact details of WhatsApp and email directly to Jelvan's CRM, and a premium copy of his resume PDF is dispatched to your email.]`;
        } else if (hasEmail) {
          appendedResponse = ` [System Action: I noted your email. If you share your WhatsApp number as well, I will notify Jelvan directly to follow up.]`;
        } else if (hasWhatsApp) {
          appendedResponse = ` [System Action: I noted your WhatsApp status. Please provide your email address so I can send the master resume PDF to your inbox.]`;
        }

        // 1. Try Cloudflare Workers AI
        if (env.AI) {
          try {
            const aiResponse = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
              messages: [
                { role: 'system', content: PROFILE_CONTEXT },
                { role: 'user', content: message }
              ]
            });

            let replyText = "";
            if (aiResponse && typeof aiResponse.response === 'string') {
              replyText = aiResponse.response;
            } else if (aiResponse && typeof aiResponse.text === 'string') {
              replyText = aiResponse.text;
            }

            if (replyText) {
              if (appendedResponse) {
                replyText += `\n\n${appendedResponse}`;
              }
              return jsonResponse({ reply: replyText });
            }
          } catch (aiError) {
            console.error("Cloudflare Workers AI execution failed, trying Gemini API:", aiError);
          }
        }

        if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
          try {
            // Instantiate SDK client server-side
            const ai = new GoogleGenAI({
              apiKey: apiKey,
              httpOptions: {
                headers: {
                  'User-Agent': 'aistudio-build'
                }
              }
            });

            const genaiResponse = await ai.models.generateContent({
              model: "gemini-3.5-flash",
              contents: message,
              config: {
                systemInstruction: PROFILE_CONTEXT,
                temperature: 0.7,
              }
            });

            let replyText = genaiResponse.text || buildBackupReply(message);
            if (appendedResponse) {
              replyText += `\n\n${appendedResponse}`;
            }

            return jsonResponse({ reply: replyText });

          } catch (sdkError: any) {
            console.error("Gemini SDK execution failed, falling back:", sdkError);
          }
        }

        // If no credentials, trigger the offline smart heuristic parser
        return jsonResponse({ reply: buildBackupReply(message) });

      } catch (err) {
        console.error("Worker API processing failed:", err);
        return jsonResponse({ error: 'Invalid request body' }, 400);
      }
    }

    // Endpoint for contact/inquiry form submissions
    if (url.pathname === '/api/inquiry') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'POST, OPTIONS',
            'access-control-allow-headers': 'content-type',
          },
        });
      }

      if (request.method !== 'POST') {
        return jsonResponse({ error: 'Method not allowed' }, 405);
      }

      try {
        const body = (await request.json()) as InquiryRequestBody;
        const name = body.name?.trim() || 'Unknown';
        const email = body.email?.trim() || '';
        const phone = body.phone?.trim() || '';
        const subject = body.subject?.trim() || 'General Inquiry';
        const message = body.message?.trim() || '';

        const prompt = `A new inquiry has been submitted through the portfolio contact form. Please acknowledge receipt professionally and confirm that Jelvan will follow up within 4 hours.

Inquiry details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Subject: ${subject}
- Message: ${message}

Respond directly to the submitter in a warm, professional tone. Keep the response under 3 sentences.`;

        const apiKey = env.GEMINI_API_KEY;

        // Try Cloudflare Workers AI first
        if (env.AI) {
          try {
            const aiResponse = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
              messages: [
                { role: 'system', content: PROFILE_CONTEXT },
                { role: 'user', content: prompt }
              ]
            });

            let replyText = '';
            if (aiResponse && typeof aiResponse.response === 'string') {
              replyText = aiResponse.response;
            } else if (aiResponse && typeof aiResponse.text === 'string') {
              replyText = aiResponse.text;
            }

            if (replyText) {
              return jsonResponse({ ok: true, reply: replyText });
            }
          } catch (aiError) {
            console.error('Cloudflare Workers AI inquiry processing failed:', aiError);
          }
        }

        // Fallback to Gemini
        if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
          try {
            const ai = new GoogleGenAI({
              apiKey,
              httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
            });

            const genaiResponse = await ai.models.generateContent({
              model: 'gemini-3.5-flash',
              contents: prompt,
              config: { systemInstruction: PROFILE_CONTEXT, temperature: 0.5 }
            });

            return jsonResponse({ ok: true, reply: genaiResponse.text || '' });
          } catch (sdkError) {
            console.error('Gemini SDK inquiry processing failed:', sdkError);
          }
        }

        // Static acknowledgement fallback
        return jsonResponse({
          ok: true,
          reply: `Thank you, ${name}. Your inquiry regarding "${subject}" has been received and logged. Jelvan will respond to ${email || 'you'} within 4 hours.`
        });

      } catch (err) {
        console.error('Inquiry processing failed:', err);
        return jsonResponse({ error: 'Invalid request body' }, 400);
      }
    }

    // Serve resume PDF endpoint
    if (url.pathname === '/resume.pdf') {
      const resumeContent = `JELVAN RICOLCOL - PORTFOLIO RESUME
Specialisation: People, AI and Digital Transformation
Email: hello@jelvan.pro
Website: https://portfolio.jelvan.pro

For the fully formatted printable copy, click "Print / Save" on the portfolio page, or view the HR Docs Tab.
`;
      return new Response(resumeContent, {
        headers: {
          'content-type': 'application/pdf',
          'content-disposition': 'attachment; filename="jelvan-ricolcol-resume.pdf"'
        }
      });
    }

    return env.ASSETS.fetch(request);
  },
};
