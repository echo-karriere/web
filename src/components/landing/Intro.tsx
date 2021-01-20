import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Notification } from "../common/Notification";
import { Hero } from "./Hero";

import aboutUrl from "../../assets/about.svg";
import hiringUrl from "../../assets/hiring.svg";
import studentsUrl from "../../assets/students.svg";

export function Intro(): JSX.Element {
  const { apiLanding: data } = useStaticQuery(graphql`
    query IntroPage {
      apiLanding {
        notification
        notification_url
        content_header
        content_text
        about
        for_companies
        for_students
      }
    }
  `);

  return (
    <>
      {data.notification && (
        <Notification message={data.notification} url={data.notification_url} />
      )}
      <Hero />
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {data.content_header}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              {data.content_text}
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Om echo karriere
              </h3>
              <div
                className="mt-3 text-lg text-gray-500"
                dangerouslySetInnerHTML={{ __html: data.about }}
              />

              <dl className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Bredde
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      echo karriere ønsker å vise mulighetene studentene har når
                      de er ferdig med studiene. Derfor har vi et fokus på å ha
                      bedrifter med forskjellige fagretninger, størrelser og
                      lokasjoner i Norge.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Fokus
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      echo karriere er drevet av studenter, for studenter. Vårt
                      mål er å gi IT-studentene i Bergen en fantastisk plattform
                      for jobb etter utdanning.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <img
                className="relative mx-auto"
                width="490"
                src={aboutUrl}
                alt="Four persons standing around with a small dog in front."
              />
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  For studenter
                </h3>
                <div
                  className="mt-3 text-lg text-gray-500"
                  dangerouslySetInnerHTML={{ __html: data.for_students }}
                />

                <dl className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Direkte kontakt med bedrifter
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        På karrieredagene våre møter du og kan snakke direkte
                        med ansatte i bedriftene som deltar, noe du lurer på?
                        Spør i vei.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Se hva som skjer
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Delta på presentasjoner og workshops, bli med på
                        lynintervju og konkurranser i løpet av arrangementet.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <img
                  className="relative mx-auto"
                  width="490"
                  src={studentsUrl}
                  alt="A graduation cap."
                />
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                For bedrifter
              </h3>
              <div
                className="mt-3 text-lg text-gray-500"
                dangerouslySetInnerHTML={{ __html: data.for_companies }}
              />

              <dl className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Vis frem deres bedrift
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      På karrieredagen er det muligheter for
                      konseptpresentasjoner og workshops som er en flott måte å
                      vise frem kompetansen deres og hva som gjør at dere
                      skiller dere ut.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Møt engasjerte studenter
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      echo karriere er en plattform for alle IT-studenter i
                      Bergen &mdash; UiB så vel som HVL. Dere kommer i direkte
                      kontakt med studenter som studerer IT.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Annonser jobber
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Som deltaker av karrieredagen får du muligheten til å
                      reklamere for ledige stillinger direkte på våre nettsider.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <img
                className="relative mx-auto"
                width="490"
                src={hiringUrl}
                alt="Art showing a person looking at online resumes."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
