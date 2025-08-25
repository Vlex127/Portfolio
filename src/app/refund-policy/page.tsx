import React from "react";
import Link from "next/link";
import { siteConfig, buildMetadata } from "@/config/site.config";

export const metadata = buildMetadata({
  title: `Refund Policy | ${siteConfig.siteName}`,
  description: "Refund Policy — eligibility, process, and exceptions.",
});

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function RefundPolicy() {
  return (
    <main className="max-w-5xl mx-auto pt-20 sm:pt-24 pb-12 px-4">
      <div className="transition-all duration-300 ease-out">
        <Card>
          <CardHeader>
            <CardTitle>Refund Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-base lg:text-lg space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                Last updated: August 20, 2025.
              </p>

              <p className="mb-4">
                This Refund Policy applies to all purchases and services made
                through <strong>vincentiwuno.kesug.com</strong> and any related
                services provided directly by <strong>Vincent Iwuno</strong>.
              </p>

              <h3 id="toc" className="text-lg font-medium mt-6">
                Table of Contents
              </h3>
              <ul className="list-disc list-inside my-3 space-y-1 text-sm">
                <li>
                  <Link href="#summary" className="underline text-primary">
                    Summary
                  </Link>
                </li>
                <li>
                  <Link href="#scope" className="underline text-primary">
                    Scope
                  </Link>
                </li>
                <li>
                  <Link href="#no-refund" className="underline text-primary">
                    No Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#exceptions" className="underline text-primary">
                    Exceptions
                  </Link>
                </li>
                <li>
                  <Link href="#requests" className="underline text-primary">
                    How to Request a Refund
                  </Link>
                </li>
                <li>
                  <Link href="#payments" className="underline text-primary">
                    Payment Processing & Fees
                  </Link>
                </li>
                <li>
                  <Link href="#disputes" className="underline text-primary">
                    Dispute Resolution
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="underline text-primary">
                    Contact
                  </Link>
                </li>
              </ul>

              <h4 id="summary" className="mt-4 font-semibold">Summary</h4>
              <p className="mb-2 text-sm">
                Payments made for services are generally{" "}
                <strong>non-refundable</strong>. By making a purchase, you
                acknowledge and agree that sales are final, except in limited
                cases outlined below or where required by law.
              </p>

              <h4 id="scope" className="mt-4 font-semibold">Scope</h4>
              <p className="mb-2 text-sm">
                This policy applies to all digital services, consulting,
                deposits, and project-based work purchased directly through
                <strong> vincentiwuno.kesug.com</strong>.
              </p>

              <h4 id="no-refund" className="mt-4 font-semibold">No Refund Policy</h4>
              <p className="mb-2 text-sm">
                Unless otherwise specified, all payments are final and not
                eligible for refund once work has started or services have been
                delivered.
              </p>

              <h4 id="exceptions" className="mt-4 font-semibold">Exceptions</h4>
              <p className="mb-2 text-sm">
                Refunds may be issued in the following limited cases:
              </p>
              <ul className="list-disc list-inside ml-5 mt-2 text-sm">
                <li>Duplicate charges or confirmed billing errors.</li>
                <li>Where required by applicable law or regulations.</li>
                <li>If we fail to deliver services as outlined in a written agreement.</li>
              </ul>

              <h4 id="requests" className="mt-4 font-semibold">How to Request a Refund</h4>
              <p className="mb-2 text-sm">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside ml-5 mt-2 text-sm">
                <li>Provide proof of purchase (invoice or payment confirmation).</li>
                <li>
                  Send an email to{" "}
                  <a
                    className="underline text-primary"
                    href="mailto:vincentayokunle@gmail.com"
                  >
                    vincentayokunle@gmail.com
                  </a>{" "}
                  with details of your request.
                </li>
                <li>
                  Refund requests will be acknowledged within 7 business days,
                  and you may be asked for additional information.
                </li>
                <li>
                  If approved, refunds will be processed to the original payment
                  method. Processing times depend on your payment provider.
                </li>
              </ol>

              <h4 id="payments" className="mt-4 font-semibold">
                Payment Processing & Fees
              </h4>
              <p className="mb-2 text-sm">
                Payments are handled through third-party processors. Any
                transaction fees are non-refundable and outside our control.
              </p>

              <h4 id="disputes" className="mt-4 font-semibold">Dispute Resolution</h4>
              <p className="mb-2 text-sm">
                If a dispute arises, please contact us first to attempt an
                amicable resolution. This policy is governed by the laws of{" "}
                <strong>Nigeria</strong>, but local consumer protection laws may
                also apply if you reside elsewhere.
              </p>

              <h4 id="contact" className="mt-4 font-semibold">Contact</h4>
              <p className="mb-2 text-sm">
                For refund inquiries or questions, reach out at:{" "}
                <a
                  className="underline text-primary"
                  href="mailto:vincentayokunle@gmail.com"
                >
                  vincentayokunle@gmail.com
                </a>{" "}
                or visit{" "}
                <a
                  className="underline text-primary"
                  href="https://vincentiwuno.kesug.com"
                >
                  vincentiwuno.kesug.com
                </a>
                .
              </p>

              <p className="mt-6 text-sm">
                This Refund Policy may be updated from time to time. The {"\"Last updated\""} date reflects the latest revision. Please review
                this page periodically for updates.
              </p>

            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
