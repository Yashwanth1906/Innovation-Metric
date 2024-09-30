import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as ScrollArea from "@radix-ui/react-scroll-area";

// Types for rankings
interface Student {
  id: number;
  name: string;
  innovationScore: number;
  medal: string | null;
}

interface Staff {
  id: number;
  name: string;
  rating: number;
}

interface College {
  id: number;
  name: string;
  rank: number;
}

// Define the rankings data structure with proper typing
const rankings: {
  students: Student[];
  staff: Staff[];
  colleges: College[];
} = {
  students: [
    { id: 1, name: "John Doe", innovationScore: 95, medal: "gold" },
    { id: 2, name: "Jane Smith", innovationScore: 92, medal: "silver" },
    { id: 3, name: "Bob Johnson", innovationScore: 90, medal: "silver" },
    { id: 4, name: "Alice Williams", innovationScore: 88, medal: "bronze" },
    { id: 5, name: "Charlie Brown", innovationScore: 85, medal: "bronze" },
  ],
  staff: [
    { id: 1, name: "Dr. Emily White", rating: 4.9 },
    { id: 2, name: "Prof. Michael Green", rating: 4.7 },
    { id: 3, name: "Ms. Sarah Black", rating: 4.5 },
    { id: 4, name: "Mr. James Gray", rating: 4.3 },
    { id: 5, name: "Dr. Olivia Red", rating: 4.1 },
  ],
  colleges: [
    { id: 1, name: "Ivy University", rank: 1 },
    { id: 2, name: "Tech Institute", rank: 2 },
    { id: 3, name: "Liberal Arts College", rank: 3 },
    { id: 4, name: "State University", rank: 4 },
    { id: 5, name: "Community College", rank: 5 },
  ],
};

export function RankingDashboardComponent() {
  const [activeRanking, setActiveRanking] = useState<"students" | "staff" | "colleges">(
    "students"
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering rankings based on the search term
  const filteredRankings = rankings[activeRanking].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to get medal icons for students
  const getMedalIcon = (medal: string | null) => {
    if (medal === "gold") {
      return <img src="https://clipart-library.com/newhp/kissclipart-gold-medal-53106b76ee06e9c6.png" alt="Gold Medal" className="w-6 h-6" />;
    } else if (medal === "silver") {
      return <img src="https://img.freepik.com/premium-photo/silver-medal-illustration-isolated-white-background_988198-712.jpg?w=2000" alt="Silver Medal" className="w-6 h-6" />;
    } else if (medal === "bronze") {
      return <img src="https://cdn0.iconfinder.com/data/icons/sport-balls/512/bronze_medal.png" alt="Bronze Medal" className="w-6 h-6" />;
    }
    return null;
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Side Dashboard */}
      <div className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Ranking Dashboard</h2>
          <div className="space-y-2">
            <Button
              className="w-full justify-start"
              variant={activeRanking === "students" ? "default" : "outline"}
              onClick={() => setActiveRanking("students")}
            >
              Student Ranking
            </Button>
            <Button
              className="w-full justify-start"
              variant={activeRanking === "staff" ? "default" : "outline"}
              onClick={() => setActiveRanking("staff")}
            >
              Staff Ranking
            </Button>
            <Button
              className="w-full justify-start"
              variant={activeRanking === "colleges" ? "default" : "outline"}
              onClick={() => setActiveRanking("colleges")}
            >
              College Ranking
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-hidden">
        <h1 className="text-3xl font-bold mb-4">
          {activeRanking.charAt(0).toUpperCase() + activeRanking.slice(1)} Rankings
        </h1>
        <Input
          className="mb-4"
          placeholder={`Search ${activeRanking}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ScrollArea.Root className="h-[calc(100vh-200px)] w-full rounded-md border overflow-auto">
          <ScrollArea.Viewport>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left pb-2">Name</th>
                    {activeRanking === "students" && (
                      <>
                        <th className="text-left pb-2">Innovation Score</th>
                        <th className="text-left pb-2">Medal</th>
                      </>
                    )}
                    {activeRanking === "staff" && <th className="text-left pb-2">Rating</th>}
                    {activeRanking === "colleges" && <th className="text-left pb-2">Rank</th>}
                  </tr>
                </thead>
                <tbody>
                  {filteredRankings.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="py-2">{item.name}</td>
                      {activeRanking === "students" && (
                        <>
                          <td className="py-2">{(item as Student).innovationScore}</td>
                          <td className="py-2">
                            {getMedalIcon((item as Student).medal)}
                          </td>
                        </>
                      )}
                      {activeRanking === "staff" && (
                        <td className="py-2">{(item as Staff).rating}</td>
                      )}
                      {activeRanking === "colleges" && (
                        <td className="py-2">{(item as College).rank}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner />
        </ScrollArea.Root>
      </div>
    </div>
  );
}
