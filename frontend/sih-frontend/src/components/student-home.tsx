'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Heart, MessageCircle, Share2, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

// Mock data for demonstration
const posts = [
  {
    id: 1,
    type: 'research',
    title: "Machine Learning in Healthcare",
    author: "Dr. Jane Smith",
    department: "Computer Science",
    likes: 45,
    comments: 12,
    image: "https://www.datasciencecentral.com/wp-content/uploads/2023/05/machine-learning-in-healthacre.jpg"
  },
  {
    id: 2,
    type: 'patent',
    title: "Advanced Solar Cell Design",
    inventor: "Prof. John Doe",
    department: "Electrical Engineering",
    likes: 38,
    comments: 8,
    image: "https://th.bing.com/th/id/OIP.6Ae3KpYrPJSfwafmqc6cNgHaEc?rs=1&pid=ImgDetMain"
  },
  {
    id: 3,
    type: 'competition',
    title: "National Robotics Championship",
    team: "RoboTech Team",
    department: "Mechanical Engineering",
    likes: 72,
    comments: 25,
    image: "/placeholder.svg?height=200&width=300"
  },
  // Add more mock data as needed
]

function NavBar() {
  return (
    <nav className="w-full top-0 left-0 absolute bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">InnovateX</Link>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-8 w-64"
              />
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/rankings">Rankings</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Achievements</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Compare Achievements
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Analyze and compare achievements across departments and individuals.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/achievements/research">
                          Research Papers
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/achievements/patents">
                          Patents
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/achievements/competitions">
                          Competitions
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes)
  const [liked, setLiked] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState(post.comments)
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    setLikes(likes + (liked ? -1 : 1))
    setLiked(!liked)
  }

  const handleComment = (e) => {
    e.preventDefault()
    if (commentText.trim()) {
      setComments(comments + 1)
      setCommentText('')
    }
  }

  return (
    <Card className="w-screen top-0 left-0 mb-6">
      <CardHeader>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg" alt="Avatar" />
            <AvatarFallback>
              {post.author ? post.author.split(' ').map(n => n[0]).join('') : 
               post.inventor ? post.inventor.split(' ').map(n => n[0]).join('') : 'TM'}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <CardTitle className="text-lg">{post.title}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {post.author || post.inventor || post.team} • {post.department}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-md" />
        <Link to={`/${post.type}/${post.id}`} className="text-blue-500 hover:underline">
          View full {post.type}
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" className="flex items-center" onClick={handleLike}>
          <Heart className={`mr-2 h-4 w-4 ${liked ? 'fill-current text-red-500' : ''}`} />
          {likes}
        </Button>
        <Button variant="ghost" className="flex items-center" onClick={() => setShowComments(!showComments)}>
          <MessageCircle className="mr-2 h-4 w-4" />
          {comments}
        </Button>
        <Button variant="ghost" className="flex items-center">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
      {showComments && (
        <CardContent>
          <form onSubmit={handleComment} className="flex items-center mt-2">
            <Input
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-grow mr-2"
            />
            <Button type="submit">Post</Button>
          </form>
        </CardContent>
      )}
    </Card>
  )
}

export function StudentHomeComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">College Innovation Feed</h1>
        
        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="patents">Patents</TabsTrigger>
            <TabsTrigger value="competitions">Competitions</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              {posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="research">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              {posts.filter(post => post.type === 'research').map(post => (
                <Post key={post.id} post={post} />
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="patents">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              {posts.filter(post => post.type === 'patent').map(post => (
                <Post key={post.id} post={post} />
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="competitions">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              {posts.filter(post => post.type === 'competition').map(post => (
                <Post key={post.id} post={post} />
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
