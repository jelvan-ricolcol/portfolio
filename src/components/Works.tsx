import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'proj-01',
    title: 'authenticator-app-operava',
    category: 'Secure Authentication Platform',
    tagline: 'Secure authentication and identity vault system',
    desc: 'A full-stack identity platform focused on secure authentication, protected account management, and vault-style credential workflows for modern web apps.',
    details: [
      'Includes frontend, server, and database-connected flows for account lifecycle management and protected access controls.',
      'Implements authentication-first UX patterns with route protection, secure sessions, and identity-oriented dashboard interactions.',
      'Ships with dedicated security-focused documentation and architecture notes to support safer deployment and maintenance.'
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Express', 'Tailwind CSS v4'],
    cover: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/authenticator-app-operava',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Full Stack', label: 'Application Type' }
  },
  {
    id: 'proj-02',
    title: 'onlinebookstore',
    category: 'Commerce Experience Showcase',
    tagline: 'Interactive bookstore showcase',
    desc: 'A storefront-inspired web experience that presents books, browsing flows, and order visibility with smooth motion and modern commerce UI structure.',
    details: [
      'Demonstrates retail-style product discovery, category navigation, and cart-friendly user journeys.',
      'Applies order-tracking interaction patterns and status-based UI updates for customer-facing shopping flows.',
      'Uses animated transitions and component-driven layouts to keep browsing responsive and visually engaging.'
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS v4', 'Motion'],
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/onlinebookstore',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Commerce UI', label: 'Experience Pattern' }
  },
  {
    id: 'proj-03',
    title: 'learning-management-system-aiai',
    category: 'Education & AI Learning Platform',
    tagline: 'LMS and AI learning studio',
    desc: 'An education-focused platform combining a learning management system with AI-assisted study workflows and multi-dashboard visibility.',
    details: [
      'Provides student and instructor dashboard structures to support course progress, analytics, and classroom management.',
      'Integrates AI studio concepts for guided learning, content exploration, and adaptive educational interactions.',
      'Uses chart-driven interfaces for educational metrics, activity summaries, and progress reporting.'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    cover: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/learning-management-system-aiai',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Multi Dashboard', label: 'System Design' }
  },
  {
    id: 'proj-04',
    title: 'bolekstore',
    category: 'Retail Storefront & Customizer',
    tagline: 'Clothing customizer and storefront',
    desc: 'A fashion retail experience with interactive product customization, storefront browsing, and checkout-oriented user journeys.',
    details: [
      'Supports customization-centric product interactions for style, options, and personalized purchase selections.',
      'Implements commerce-style UI behavior for catalog browsing, product detail exploration, and action-driven conversion flows.',
      'Uses animated transitions to improve engagement during shopping and configuration workflows.'
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS v4', 'Motion'],
    cover: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/bolekstore',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Customizer', label: 'Core Feature' }
  },
  {
    id: 'proj-05',
    title: 'Institute-school-AI',
    category: 'Academic Portal & LMS Structure',
    tagline: 'Academic institution portal',
    desc: 'A school-centered digital platform that combines a public campus portal with LMS-style modules for education operations and learner access.',
    details: [
      'Presents institution-facing pages for campus information, programs, announcements, and education-focused public communication.',
      'Includes LMS-oriented structures for course workflows, student interaction spaces, and academic operational dashboards.',
      'Uses data-visual components to communicate progress, performance summaries, and educational insights.'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    cover: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/Institute-school-AI',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Campus + LMS', label: 'Platform Scope' }
  },
  {
    id: 'proj-06',
    title: 'Saas-bolek-workspace',
    category: 'Workspace Brand Repository',
    tagline: 'Workspace / domain-level brand repo',
    desc: 'A workspace-level repository documenting the product presence and brand structure of the Bolek Workspace public and suite domains.',
    details: [
      'Covers the public-facing `suite.bolekworkspace.com` site positioning and domain-level messaging structure.',
      'Documents `suite.bolekworkspace.com` as the application workspace surface for product and service workflows.',
      'Acts as a source for workspace branding, system context, and product-facing documentation assets.'
    ],
    tech: ['Repository Documentation', 'Web Platform', 'Domain Architecture', 'Brand Systems'],
    cover: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/Saas-bolek-workspace',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: '2 Domains', label: 'Workspace Coverage' }
  },
  {
    id: 'proj-07',
    title: 'personalized-business-html-email-formats',
    category: 'Email Marketing & Business Communication',
    tagline: 'Personalized business HTML email formats',
    desc: 'A repository focused on crafting responsive, branded, and personalized HTML email formats for business communication and outreach.',
    details: [
      'Includes reusable email templates for welcome, follow-up, announcement, and promotional business messaging.',
      'Structures responsive HTML layouts for cross-client compatibility and polished presentation across devices.',
      'Supports personalization patterns that adapt messaging, branding, and call-to-action content for different audiences.'
    ],
    tech: ['HTML', 'CSS', 'Email Templates', 'Responsive Design'],
    cover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200&h=900',
    url: 'https://github.com/jelvan-ricolcol/personalized-business-html-email-formats',
    linkLabel: 'Open Repository',
    status: 'Public',
    stats: { value: 'Email Format', label: 'Content Type' }
  }
];

const HR_DOCS = [
  {
    id: 'hr-01',
    title: 'Workplace Policy for Generative AI Integration',
    category: 'AI Operational Guidelines',
    summary: 'A standard framework governing safe, ethical, and responsible employee usage of AI LLMs (Gemini, ChatGPT) to optimize business output while strictly preventing client data leakage.',
    updated: 'May 2026',
    author: 'Jelvan Ricolcol, M.S. AI for Business',
    tags: ['AI Strategy', 'Data Privacy', 'Operations Compliance'],
    sections: [
      {
        title: '1.0 Purpose & Vision',
        content: 'This policy establishes safe and highly effective operating procedures for employee interaction with Generative AI (including Large Language Models, AI Assistants, and automated work systems).'
      },
      {
        title: '2.0 Guiding Principles',
        bullets: [
          'Human-in-the-Loop: AI tools are strictly assistive. Real humans remain fully accountable for all finalized strategies, reports, and codebases.',
          'Ethics and Fairness: Deployed workflows must prevent discriminatory outputs, hallucinations, and bias.',
          'Information Integrity: All generative outputs must be audited and verified before client-facing deployment.'
        ]
      }
    ]
  }
];

export default function Works() {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);
  const toggleDoc = (id: string) => setExpandedDoc(expandedDoc === id ? null : id);

  return <div />;
}
