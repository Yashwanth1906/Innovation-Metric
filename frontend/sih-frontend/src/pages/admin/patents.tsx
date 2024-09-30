'use client'

import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react'
// Mock data for demonstration
const patents = [
  { id: 1, title: "Advanced Machine Learning Algorithm for Medical Diagnosis", inventor: "Dr. Jane Smith", domain: "AI & Healthcare", department: "Computer Science", description: "A novel machine learning algorithm designed to improve the accuracy of medical diagnoses across various conditions." },
  { id: 2, title: "High-Efficiency Solar Cell Design", inventor: "Prof. John Doe", domain: "Renewable Energy", department: "Environmental Science", description: "An innovative solar cell design that significantly increases energy conversion efficiency in photovoltaic systems." },
  { id: 3, title: "Quantum Error Correction Method", inventor: "Dr. Alice Johnson", domain: "Quantum Computing", department: "Physics", description: "A groundbreaking method for reducing errors in quantum computations, enhancing the stability of quantum systems." },
  { id: 4, title: "CRISPR-based Genetic Therapy Technique", inventor: "Prof. Michael Brown", domain: "Biotechnology", department: "Biology", description: "A refined CRISPR-Cas9 technique for more precise and efficient genetic modifications in therapeutic applications." },
  { id: 5, title: "Smart Urban Water Management System", inventor: "Dr. Emily Chen", domain: "Smart Cities", department: "Environmental Science", description: "An AI-driven system for optimizing water distribution and usage in urban environments, reducing waste and improving sustainability." },
]

const departments = ["All", "Computer Science", "Environmental Science", "Physics", "Biology"]
const domains = ["All", "AI & Healthcare", "Renewable Energy", "Quantum Computing", "Biotechnology", "Smart Cities"]

export function PatentsComponent() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedDomain, setSelectedDomain] = useState("All")

  const filteredPatents = useMemo(() => {
    return patents.filter(patent => 
      (selectedDepartment === "All" || patent.department === selectedDepartment) &&
      (selectedDomain === "All" || patent.domain === selectedDomain)
    )
  }, [selectedDepartment, selectedDomain])

  return (
    <div className="container mx-auto px-4 py-8">
            <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="ml-2 text-2xl font-bold text-primary">Research Paper</span>
              </div>
              <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/rankings" className="border-primary text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Rankings
                </Link>
                <Link to="/enganalysis" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Analytics
                </Link>
                <Link to="/researchpap" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Research Papers
                </Link>
                <Link to="/patents" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Patents
                </Link>
                <Link to="/competitions" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Competitions
                </Link>
              </nav>
            </div>
            
          </div>
        </div>
      </header>
      
      <br></br>
      <h1 className="text-3xl font-bold mb-8 text-center">Institutional Patents</h1>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <Select onValueChange={setSelectedDepartment}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map(dept => (
              <SelectItem key={dept} value={dept}>{dept}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select onValueChange={setSelectedDomain}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Domain" />
          </SelectTrigger>
          <SelectContent>
            {domains.map(domain => (
              <SelectItem key={domain} value={domain}>{domain}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="text-center mb-8 text-lg font-semibold">
        Showing {filteredPatents.length} out of {patents.length} patents
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatents.map(patent => (
          <Card key={patent.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{patent.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-semibold">Inventor:</span> {patent.inventor}
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-semibold">Domain:</span> {patent.domain}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-semibold">Department:</span> {patent.department}
              </p>
              <p className="text-sm">{patent.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}