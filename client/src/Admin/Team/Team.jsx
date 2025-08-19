

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Users } from "lucide-react"

import { useNavigate } from "react-router-dom"

export default function TeamManagement() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const [members] = useState([
    {
      id: 1,
      name: "Arjun Reddy",
      role: "Convener",
      category: "Leadership",
      description: "Final year CSE student passionate about full-stack development",
      photo: "/male-student-studying.png",
      email: "arjun@srkr.edu",
    },
    {
      id: 2,
      name: "Sneha Sharma",
      role: "Head",
      category: "Heads of Club",
      description: "AI/ML enthusiast and competitive programmer",
      photo: "/diverse-female-student.png",
      email: "sneha@srkr.edu",
    },
    {
      id: 3,
      name: "Vikram Kumar",
      role: "Core Member",
      category: "Core Members",
      description: "Web development and UI/UX design specialist",
      photo: "/male-developer.png",
      email: "vikram@srkr.edu",
    },
    {
      id: 4,
      name: "Ananya Patel",
      role: "EBR",
      category: "EBRs",
      description: "Third year student, event coordinator",
      photo: "/female-coordinator.png",
      email: "ananya@srkr.edu",
    },
    {
      id: 5,
      name: "Rohit Singh",
      role: "Core Member",
      category: "Core Members",
      description: "Backend developer and database specialist",
      photo: "/placeholder-ornio.png",
      email: "rohit@srkr.edu",
    },
  ])

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "Convener":
        return "bg-purple-100 text-purple-800"
      case "Head":
        return "bg-blue-100 text-blue-800"
      case "Core Member":
        return "bg-green-100 text-green-800"
      case "EBR":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const membersByCategory = filteredMembers.reduce(
    (acc, member) => {
      if (!acc[member.category]) {
        acc[member.category] = []
      }
      acc[member.category].push(member)
      return acc
    },
    {}
  )

  return (
    <div className="space-y-8 p-4 ml-64">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
          <p className="text-muted-foreground">Manage club members, roles, and team structure</p>
        </div>
        <Button className="gap-2" onClick={() => navigate("/admin/team/new")}>
          <Plus className="h-4 w-4" />
          Add New Member
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search members by name, role, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{filteredMembers.length} members</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Members by Category */}
      <div className="space-y-8">
        {Object.entries(membersByCategory).map(([category, categoryMembers]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {category}
                <Badge variant="secondary">{categoryMembers.length}</Badge>
              </CardTitle>
              <CardDescription>
                {category === "Leadership" && "Club conveners and primary leadership"}
                {category === "Heads of Club" && "Department heads and senior coordinators"}
                {category === "Core Members" && "Active contributors and technical leads"}
                {category === "EBRs" && "Executive Board Representatives from different years"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categoryMembers.map((member) => (
                  <div key={member.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={member.photo || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-sm text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => navigate(`/admin/team/${member.id}/edit`)}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Member
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove Member
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <Badge className={getRoleBadgeColor(member.role)}>{member.role}</Badge>

                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No members found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm ? "Try adjusting your search terms." : "Get started by adding your first team member."}
              </p>
              <Button onClick={() => navigate("/admin/team/new")}>
                <Plus className="h-4 w-4 mr-2" />
                Add New Member
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}