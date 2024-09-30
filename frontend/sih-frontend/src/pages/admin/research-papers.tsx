'use client'

import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
const papers = [
  { id: 1, title: "Machine Learning in Healthcare", author: "Dr. Jane Smith", domain: "AI & Healthcare", department: "Computer Science", description: "This paper explores the applications of machine learning in improving healthcare outcomes and patient care." },
  { id: 2, title: "Sustainable Energy Solutions", author: "Prof. John Doe", domain: "Renewable Energy", department: "Environmental Science", description: "An in-depth analysis of emerging sustainable energy technologies and their potential impact on reducing carbon emissions." },
  { id: 3, title: "Quantum Computing Advancements", author: "Dr. Alice Johnson", domain: "Quantum Physics", department: "Physics", description: "This research presents recent breakthroughs in quantum computing and their implications for solving complex computational problems." },
  { id: 4, title: "Genetic Engineering Ethics", author: "Prof. Michael Brown", domain: "Bioethics", department: "Biology", description: "An examination of the ethical considerations surrounding genetic engineering and its potential societal impacts." },
  { id: 5, title: "Urban Planning for Climate Resilience", author: "Dr. Emily Chen", domain: "Urban Studies", department: "Environmental Science", description: "This paper proposes innovative urban planning strategies to enhance cities' resilience against climate change effects." },
]

const departments = ["All", "Computer Science", "Environmental Science", "Physics", "Biology"]
const domains = ["All", "AI & Healthcare", "Renewable Energy", "Quantum Physics", "Bioethics", "Urban Studies"]

export function ResearchPapersComponent() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedDomain, setSelectedDomain] = useState("All")

  const filteredPapers = useMemo(() => {
    return papers.filter(paper => 
      (selectedDepartment === "All" || paper.department === selectedDepartment) &&
      (selectedDomain === "All" || paper.domain === selectedDomain)
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
      
      <h1 className="text-3xl font-bold mb-8 text-center">Research paper</h1>
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
        Showing {filteredPapers.length} out of {papers.length} papers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPapers.map(paper => (
          <Card key={paper.id}>
            <CardHeader>
              <CardTitle>{paper.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Author: {paper.author}</p>
              <p className="text-sm text-muted-foreground mb-2">Domain: {paper.domain}</p>
              <p className="text-sm text-muted-foreground mb-4">Department: {paper.department}</p>
              <p className="text-sm">{paper.description}</p>
              <Button className="mt-4" variant="outline">Read More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}