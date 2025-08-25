import React from "react";
import Link from "next/link";
import { siteConfig, buildMetadata } from "@/config/site.config";

export const metadata = buildMetadata({
  title: `Privacy Policy | ${siteConfig.siteName}`,
  description: "Privacy Policy — how we collect, use, and protect your information.",
});

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto pt-20 sm:pt-24 pb-12 px-4">
      <div className="transition-all duration-300 ease-out">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-base lg:text-lg space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                Last updated: August 20, 2025
              </p>

              <p className="mb-4">
                This Privacy Policy explains how{" "}
                <strong>vincentiwuno.kesug.com</strong> (“we”, “us”, or “Vincent Iwuno”) collects, uses,
                and protects your personal information when you visit or use our
                website and services. By accessing our Site, you confirm that
                you have read and understood this Policy.
              </p>

              <p className="mb-4 text-sm">
                This Policy applies to{" "}
                <strong>vincentiwuno.kesug.com</strong> and any related
                services, applications, or digital properties owned or operated
                by <strong>Vincent Iwuno</strong>. For
                clarity, “we”, “us”, and “our” refer to Vincent Iwuno.
              </p>

              <p className="mb-2 text-sm font-medium">
                Minimal Collection Statement
              </p>
              <p className="mb-2 text-sm">
                We only collect personal information when it is necessary to
                provide a requested service, required by law, or voluntarily
                submitted (e.g., contact forms, purchases). We aim to collect
                the minimum data needed and retain it only as long as required.
              </p>

              <h3 id="toc" className="text-lg font-medium mt-6">
                Table of Contents
              </h3>
              <ul className="list-disc list-inside my-3 space-y-1 text-sm">
                <li><Link href="#collection" className="underline text-primary">Information We Collect</Link></li>
                <li><Link href="#use" className="underline text-primary">How We Use Information</Link></li>
                <li><Link href="#sharing" className="underline text-primary">Sharing & Third Parties</Link></li>
                <li><Link href="#cookies" className="underline text-primary">Cookies & Tracking</Link></li>
                <li><Link href="#security" className="underline text-primary">Security</Link></li>
                <li><Link href="#rights" className="underline text-primary">Your Rights</Link></li>
                <li><Link href="#international" className="underline text-primary">International Transfers</Link></li>
                <li><Link href="#contact" className="underline text-primary">Contact</Link></li>
              </ul>

              <h4 id="collection" className="mt-4 font-semibold">Information We Collect</h4>
              <p className="mb-2 text-sm">
                We collect information you provide directly (e.g., via forms,
                service requests, or purchases), which may include your name,
                email, phone, project details, and payment information. We also
                collect technical data (IP address, browser, device type, and
                pages visited) through logs and analytics. We may create
                aggregated or anonymized data for analysis.
              </p>

              <h4 id="use" className="mt-4 font-semibold">How We Use Information</h4>
                        <div className="mb-2 text-sm">
            <p>Information is used to:</p>
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>Provide and improve our services and Site.</li>
              <li>Respond to inquiries, proposals, and requests.</li>
              <li>Process payments and manage billing.</li>
            </ul>
          </div>
              

              <h4 id="sharing" className="mt-4 font-semibold">Sharing & Third Parties</h4>
              <p className="mb-2 text-sm">
                We share information only with trusted service providers (e.g.,
                hosting, analytics, payment processors) who are contractually
                bound to protect your data. We may disclose information as
                required by law, to enforce terms, or in cases of acquisition or
                business transfer.
              </p>

              <h4 id="cookies" className="mt-4 font-semibold">Cookies & Tracking</h4>
              <p className="mb-2 text-sm">
                Cookies help us enable core functionality, remember preferences,
                and analyze site traffic. You may control cookies via browser
                settings. Third-party services (e.g., Google Analytics) may
                place cookies subject to their policies.
              </p>

              <h4 id="security" className="mt-4 font-semibold">Security</h4>
              <p className="mb-2 text-sm">
                We use encryption (HTTPS), access controls, and secure hosting
                to protect your data. While we take precautions, no system is
                100% secure. Report any security concerns immediately to{" "}
                <a className="underline text-primary" href="mailto:vincentayokunle@gmail.com">
                  vincentayokunle@gmail.com
                </a>.
              </p>

              <h4 id="rights" className="mt-4 font-semibold">Your Rights</h4>
              <p className="mb-2 text-sm">
                Depending on your jurisdiction, you may have rights to access,
                update, delete, or restrict processing of your personal data. To
                exercise these rights, email{" "}
                <a className="underline text-primary" href="mailto:vincentayokunle@gmail.com">
                  vincentayokunle@gmail.com
                </a>. We may require identity verification.
              </p>

              <h4 id="international" className="mt-4 font-semibold">International Transfers</h4>
              <p className="mb-2 text-sm">
                Our Site is accessible worldwide, and personal data may be
                transferred internationally. Where required, we implement
                safeguards (e.g., standard contractual clauses) to ensure
                compliance with data protection laws.
              </p>

              <h4 id="contact" className="mt-4 font-semibold">Contact</h4>
              <p className="mb-2 text-sm">
                For privacy questions or requests, email:{" "}
                <a className="underline text-primary" href="mailto:vincentayokunle@gmail.com">
                  vincentayokunle@gmail.com
                </a>.
              </p>

              <p className="mt-6 text-sm">
                This Privacy Policy may be updated from time to time. The “Last
                updated” date above indicates the latest revision.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
