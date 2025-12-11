import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../Components/ui/card"
import { Button } from "../../Components/ui/button"
import { Input } from "../../Components/ui/input"     
import { Badge } from "../../Components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../Components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../Components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventsManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  const [upcomingEvents] = useState([
    {
      id: 1,
      name: "HackOverflow 2024",
      date: "2024-12-15",
      endDate: "2024-12-17",
      location: "Main Auditorium",
      status: "Upcoming",
      registrations: 156,
      description: "48-hour hackathon competition for innovative solutions",
    },
    {
      id: 2,
      name: "Web Development Workshop",
      date: "2024-12-20",
      endDate: "2024-12-20",
      location: "Computer Lab 1",
      status: "Upcoming",
      registrations: 45,
      description: "Introduction to React and Next.js framework",
    },
    {
      id: 3,
      name: "AI/ML Bootcamp",
      date: "2024-12-25",
      endDate: "2024-12-27",
      location: "Seminar Hall",
      status: "Draft",
      registrations: 0,
      description: "Comprehensive machine learning workshop series",
    },
  ])

  const [pastEvents] = useState([
    {
      id: 4,
      name: "HackOverflow 2023",
      date: "2023-11-15",
      endDate: "2023-11-17",
      location: "Main Auditorium",
      status: "Completed",
      participants: 142,
      winners: {
        first: "Team Alpha - Smart Campus Solution",
        second: "Team Beta - EcoTrack App",
        third: "Team Gamma - StudyBuddy Platform",
      },
    },
    {
      id: 5,
      name: "IconCoderz 2023",
      date: "2023-10-10",
      endDate: "2023-10-10",
      location: "Computer Lab 2",
      status: "Completed",
      participants: 89,
      winners: {
        expert: "Rahul Sharma - Portfolio Website",
        beginner: "Priya Patel - Todo App",
      },
    },
  ])

  const getStatusBadge = (status) => {
    switch (status) {
      case "Upcoming":
        return <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>
      case "Ongoing":
        return <Badge className="bg-green-100 text-green-800">Ongoing</Badge>
      case "Completed":
        return <Badge className="bg-gray-100 text-gray-800">Completed</Badge>
      case "Draft":
        return <Badge variant="outline">Draft</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const handleAddNewEvent = () => {
    console.log("Add new event clicked")
    // Handle add new event action
  }

  const handleEditEvent = (eventId) => {
    console.log("Edit event:", eventId)
    // Handle edit event action
  }

  const handleViewRegistrations = (eventId) => {
    console.log("View registrations for event:", eventId)
    // Handle view registrations action
  }

  const handleDeleteEvent = (eventId) => {
    console.log("Delete event:", eventId)
    // Handle delete event action
  }

  const handleViewGallery = (eventId) => {
    console.log("View gallery for event:", eventId)
    // Handle view gallery action
  }

  const handleViewFeedback = (eventId) => {
    console.log("View feedback for event:", eventId)
    // Handle view feedback action
  }

  const filteredUpcomingEvents = upcomingEvents.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredPastEvents = pastEvents.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-8 p-6 max-w-7xl ml-64">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events Management</h1>
          <p className="text-gray-600">Manage all club events, workshops, and competitions</p>
        </div>
        <Button className="flex items-center gap-2" onClick={handleAddNewEvent}>
          <Plus className="h-4 w-4" />
          Add New Event
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search events by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid gap-6">
            {filteredUpcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-3">
                        {event.name}
                        {getStatusBadge(event.status)}
                      </CardTitle>
                      <CardDescription className="mt-2">{event.description}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditEvent(event.id)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Event
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleViewRegistrations(event.id)}>
                          View Registrations
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="text-red-600"
                          onClick={() => handleDeleteEvent(event.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Event
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-600" />
                      <div>
                        <p className="text-sm font-medium">
                          {formatDate(event.date)}
                          {event.endDate !== event.date && ` - ${formatDate(event.endDate)}`}
                        </p>
                        <p className="text-xs text-gray-600">Event Date</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-600" />
                      <div>
                        <p className="text-sm font-medium">{event.location}</p>
                        <p className="text-xs text-gray-600">Venue</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-600" />
                      <div>
                        <p className="text-sm font-medium">{event.registrations}</p>
                        <p className="text-xs text-gray-600">Registrations</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <div>
                        <p className="text-sm font-medium">
                          {Math.ceil((new Date(event.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}{" "}
                          days
                        </p>
                        <p className="text-xs text-gray-600">Remaining</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-6">
          <div className="grid gap-6">
            {filteredPastEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-3">
                        {event.name}
                        {getStatusBadge(event.status)}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {formatDate(event.date)}
                        {event.endDate !== event.date && ` - ${formatDate(event.endDate)}`}
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditEvent(event.id)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Archive
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleViewGallery(event.id)}>
                          View Gallery
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleViewFeedback(event.id)}>
                          View Feedback
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{event.participants} participants</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Winners:</h4>
                      <div className="space-y-1 text-sm">
                        {event.winners.first && (
                          <p>
                            <span className="font-medium">🥇 1st Place:</span> {event.winners.first}
                          </p>
                        )}
                        {event.winners.second && (
                          <p>
                            <span className="font-medium">🥈 2nd Place:</span> {event.winners.second}
                          </p>
                        )}
                        {event.winners.third && (
                          <p>
                            <span className="font-medium">🥉 3rd Place:</span> {event.winners.third}
                          </p>
                        )}
                        {event.winners.expert && (
                          <p>
                            <span className="font-medium">🏆 Expert Category:</span> {event.winners.expert}
                          </p>
                        )}
                        {event.winners.beginner && (
                          <p>
                            <span className="font-medium">🌟 Beginner Category:</span> {event.winners.beginner}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Empty states */}
      {filteredUpcomingEvents.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming events found</h3>
          <p className="text-gray-600">Try adjusting your search terms.</p>
        </div>
      )}

      {filteredPastEvents.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No past events found</h3>
          <p className="text-gray-600">Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  )
}