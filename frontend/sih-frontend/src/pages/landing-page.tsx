'use client';

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, BarChart3, TrendingUp, Users, Mail } from "lucide-react";
export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <Lightbulb className="h-6 w-6" />
          <span className="sr-only">InnoMetrics</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Measure College Innovation Like Never Before
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  InnoMetrics provides comprehensive analysis of innovation metrics for colleges and universities.
                  Gain insights, track progress, and drive innovation forward.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                <Link to="/signin" className="w-full h-auto">
                  <Button variant="outline" className="w-full h-auto py-4 px-6 flex flex-col items-center">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/000/511/962/original/vector-student-glyph-black-icon.jpg" // Ensure this path is correct
                      alt="Student Icon"
                      width={64}
                      height={64}
                      className="mb-2"
                    />
                    Student
                  </Button>
                </Link>
                <Link to="/admindash" className="w-full h-auto">
                  <Button variant="outline" className="w-full h-auto py-4 px-6 flex flex-col items-center">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/023/544/108/original/university-minimalist-and-flat-logo-illustration-vector.jpg" // Ensure this path is correct
                      alt="University Icon"
                      width={64}
                      height={64}
                      className="mb-2"
                    />
                    University
                  </Button>
                </Link>
                <Link to="/signin" className="w-full h-auto">
                  <Button variant="outline" className="w-full h-auto py-4 px-6 flex flex-col items-center">
                    <img
                      src="https://www.freeiconspng.com/uploads/teacher-classroom-blackboard-png-image-10.png" // Ensure this path is correct
                      alt="Staff Icon"
                      width={64}
                      height={64}
                      className="mb-2"
                    />
                    Staff
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Comprehensive Metrics</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Track and analyze a wide range of innovation indicators across your institution.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <TrendingUp className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Trend Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Identify patterns and trends in innovation activities over time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Benchmarking</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Compare your institution's performance against peers and industry standards.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Innovation Strategy?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get in touch with our team to learn how InnoMetrics can help your institution drive innovation forward.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 InnoMetrics. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
