'use client'

import { Link } from 'react-router-dom'; // Corrected import for Link
import { BarChart3, BookOpen, FileText, GraduationCap, LightbulbIcon, Medal, PlusCircle, Search, Trophy, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export function Dashboard() {
  const metrics = [
    { title: 'Total Students', value: '15,234', icon: Users },
    { title: 'Research Papers', value: '1,876', icon: BookOpen },
    { title: 'Patents', value: '342', icon: LightbulbIcon },
    { title: 'Competitions Won', value: '523', icon: Trophy },
    { title: 'Innovation Metric', value: '8.7', icon: BarChart3 },
  ];

  const topStudents = [
    { name: 'John Doe', score: 95, medal: 'gold' },
    { name: 'Jane Smith', score: 92, medal: 'silver' },
    { name: 'Bob Johnson', score: 90, medal: '' },
  ];

  const topFaculty = [
    { name: 'Dr. Alice Brown', score: 98, medal: 'gold' },
    { name: 'Prof. Charles Davis', score: 96, medal: 'silver' },
    { name: 'Dr. Eva White', score: 95, medal: '' },
  ];

  const topDepartments = [
    { name: 'Computer Science', score: 9.2 },
    { name: 'Electrical Engineering', score: 9.0 },
    { name: 'Biotechnology', score: 8.8 },
  ];

  const recentActivities = [
    { type: 'Research Paper', title: 'Advancements in Quantum Computing', author: 'Dr. Alice Brown', date: '2023-06-15' },
    { type: 'Patent', title: 'Novel Renewable Energy Storage Method', inventor: 'Prof. Charles Davis', date: '2023-06-10' },
    { type: 'Competition', name: 'International Robotics Challenge', winner: 'Jane Smith', date: '2023-06-05' },
  ];

  return (
    <div className="flex w-screen absolute top-0 left-0 flex-col min-h-screen bg-gray-100 ">
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="ml-2 text-2xl font-bold text-primary">Admin Dashboard</span>
              </div>
              <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/adminranking" className="border-primary text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Input type="text" placeholder="Search..." className="w-64" />
              </div>
              <Button size="icon" variant="ghost" className="ml-3">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Metrics */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {metrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <metric.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rankings */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Top Students */}
            <Card>
              <CardHeader>
                <CardTitle>Top Students</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Innovation Score</TableHead>
                      <TableHead>Medal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topStudents.map((student, index) => (
                      <TableRow key={index}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.score}</TableCell>
                        <TableCell>
                          {student.medal === 'gold' && <Medal className="h-5 w-5 text-yellow-500" />}
                          {student.medal === 'silver' && <Medal className="h-5 w-5 text-gray-400" />}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button variant="link" className="mt-4">Show More</Button>
              </CardContent>
            </Card>

            {/* Top Faculty */}
            <Card>
              <CardHeader>
                <CardTitle>Top Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Innovation Score</TableHead>
                      <TableHead>Medal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topFaculty.map((faculty, index) => (
                      <TableRow key={index}>
                        <TableCell>{faculty.name}</TableCell>
                        <TableCell>{faculty.score}</TableCell>
                        <TableCell>
                          {faculty.medal === 'gold' && <Medal className="h-5 w-5 text-yellow-500" />}
                          {faculty.medal === 'silver' && <Medal className="h-5 w-5 text-gray-400" />}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button variant="link" className="mt-4">Show More</Button>
              </CardContent>
            </Card>

            {/* Top Departments */}
            <Card>
              <CardHeader>
                <CardTitle>Top Departments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Department</TableHead>
                      <TableHead>Innovation Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topDepartments.map((department, index) => (
                      <TableRow key={index}>
                        <TableCell>{department.name}</TableCell>
                        <TableCell>{department.score}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button variant="link" className="mt-4">Show More</Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author / Winner</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivities.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell>{activity.type}</TableCell>
                      <TableCell>{activity.title || activity.name}</TableCell>
                      <TableCell>{activity.author || activity.winner}</TableCell>
                      <TableCell>{activity.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button variant="link" className="mt-4">Show More</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
