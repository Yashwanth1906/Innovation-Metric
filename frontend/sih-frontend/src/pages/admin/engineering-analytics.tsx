import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts'
import { GraduationCap } from 'lucide-react'

const departmentColors: { [key: string]: string } = {
  "Computer Science": "#FF6384",
  "Mechanical Engineering": "#36A2EB",
  "Electrical Engineering": "#FFCE56",
  "Civil Engineering": "#4BC0C0",
  "Chemical Engineering": "#9966FF"
}

const researchPapersData = [
  { name: "Computer Science", value: 180 },
  { name: "Mechanical Engineering", value: 80 },
  { name: "Electrical Engineering", value: 100 },
  { name: "Civil Engineering", value: 70 },
  { name: "Chemical Engineering", value: 60 }
]

const patentsData = [
  { name: "Computer Science", value: 45 },
  { name: "Mechanical Engineering", value: 20 },
  { name: "Electrical Engineering", value: 25 },
  { name: "Civil Engineering", value: 15 },
  { name: "Chemical Engineering", value: 10 }
]

const innovationMetricsData = [
  { name: "Computer Science", value: 950 },
  { name: "Mechanical Engineering", value: 600 },
  { name: "Electrical Engineering", value: 750 },
  { name: "Civil Engineering", value: 550 },
  { name: "Chemical Engineering", value: 500 }
]

const monthlyProgressData = [
  { name: "Jan", "Computer Science": 85, "Mechanical Engineering": 55, "Electrical Engineering": 65, "Civil Engineering": 50, "Chemical Engineering": 45 },
  { name: "Feb", "Computer Science": 90, "Mechanical Engineering": 60, "Electrical Engineering": 70, "Civil Engineering": 55, "Chemical Engineering": 50 },
  { name: "Mar", "Computer Science": 95, "Mechanical Engineering": 58, "Electrical Engineering": 68, "Civil Engineering": 53, "Chemical Engineering": 48 },
  { name: "Apr", "Computer Science": 100, "Mechanical Engineering": 62, "Electrical Engineering": 72, "Civil Engineering": 57, "Chemical Engineering": 52 },
  { name: "May", "Computer Science": 105, "Mechanical Engineering": 59, "Electrical Engineering": 69, "Civil Engineering": 54, "Chemical Engineering": 49 },
  { name: "Jun", "Computer Science": 110, "Mechanical Engineering": 63, "Electrical Engineering": 73, "Civil Engineering": 58, "Chemical Engineering": 53 }
]

const yearlyProgressData = [
  { year: 2019, "Computer Science": 800, "Mechanical Engineering": 550, "Electrical Engineering": 650, "Civil Engineering": 500, "Chemical Engineering": 450 },
  { year: 2020, "Computer Science": 850, "Mechanical Engineering": 580, "Electrical Engineering": 680, "Civil Engineering": 520, "Chemical Engineering": 470 },
  { year: 2021, "Computer Science": 900, "Mechanical Engineering": 560, "Electrical Engineering": 660, "Civil Engineering": 510, "Chemical Engineering": 460 },
  { year: 2022, "Computer Science": 950, "Mechanical Engineering": 600, "Electrical Engineering": 700, "Civil Engineering": 550, "Chemical Engineering": 500 }
]

const competitionData = [
  { name: "Computer Science", participated: 60, won: 40 },
  { name: "Mechanical Engineering", participated: 40, won: 20 },
  { name: "Electrical Engineering", participated: 45, won: 25 },
  { name: "Civil Engineering", participated: 35, won: 18 },
  { name: "Chemical Engineering", participated: 30, won: 15 }
]

export default function EngineeringAnalytics() {
  const [timeframe, setTimeframe] = useState<string>("monthly");

  const renderPieChart = (data: any[], dataKey = "value") => (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120} // Increased outer radius for larger pie chart
          fill="#8884d8"
          dataKey={dataKey}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={departmentColors[entry.name]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderProgressChart = (data: any[]) => (
    <ResponsiveContainer width="100%" height={400}> {/* Increased height for line chart */}
      <LineChart data={data}>
        <XAxis dataKey={timeframe === "monthly" ? "name" : "year"} />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(departmentColors).map((dept) => (
          <Line type="monotone" dataKey={dept} stroke={departmentColors[dept]} key={dept} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );

  const renderCompetitionChart = () => (
    <ResponsiveContainer width="100%" height={400}> {/* Increased height for bar chart */}
      <BarChart data={competitionData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="participated" fill="#8884d8" name="Participated" />
        <Bar dataKey="won" fill="#82ca9d" name="Won" />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="w-full bg-card shadow-sm">
        <div className="w-full px-8"> {/* Increased padding */}
          <div className="flex justify-between h-16 items-center">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <GraduationCap className="h-10 w-10 text-primary" /> {/* Larger icon */}
                <span className="ml-2 text-3xl font-bold text-primary">Analytics</span> {/* Larger font size */}
              </div>
              <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="/rankings" className="border-primary text-primary inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                  Rankings
                </a>
                <a href="/enganalysis" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                  Analytics
                </a>
                <a href="/researchpap" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                  Research Papers
                </a>
                <a href="/patents" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                  Patents
                </a>
                <a href="/competitions" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                  Competitions
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full px-8 py-8"> {/* Increased padding */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Engineering Department Analytics</h1> {/* Larger font size */}
        </div>

        <Tabs defaultValue="overview" className="space-y-8"> {/* Increased vertical spacing */}
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
            <TabsTrigger value="competitions">Competitions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Increased grid gap */}
              <Card>
                <CardHeader>
                  <CardTitle>Research Papers Distribution</CardTitle>
                </CardHeader>
                <CardContent>{renderPieChart(researchPapersData)}</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Patents Distribution</CardTitle>
                </CardHeader>
                <CardContent>{renderPieChart(patentsData)}</CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Innovation Metrics Contribution</CardTitle>
              </CardHeader>
              <CardContent>{renderPieChart(innovationMetricsData)}</CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-8">
            <div className="flex justify-end mb-4">
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Department Progress Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                {renderProgressChart(timeframe === "monthly" ? monthlyProgressData : yearlyProgressData)}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitions" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Competitions Participated vs Won</CardTitle>
              </CardHeader>
              <CardContent>{renderCompetitionChart()}</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
