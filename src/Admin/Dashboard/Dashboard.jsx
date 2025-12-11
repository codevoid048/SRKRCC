import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../Components/ui/card"
import { Button } from "../../Components/ui/button"
import { Users, UserCheck, Calendar, GraduationCap, TrendingUp, Activity, Clock } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Members",
      value: "156",
      change: "+12 this month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Affiliates",
      value: "89",
      change: "+5 this week",
      icon: UserCheck,
      color: "text-green-600",
    },
    {
      title: "Upcoming Events",
      value: "3",
      change: "2 this month",
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      title: "Alumni Network",
      value: "234",
      change: "+8 this year",
      icon: GraduationCap,
      color: "text-orange-600",
    },
  ]

  const recentActivities = [
    { action: "New member registration", user: "John Doe", time: "2 hours ago" },
    { action: "Event created", user: "Admin", time: "5 hours ago" },
    { action: "Alumni profile updated", user: "Jane Smith", time: "1 day ago" },
    { action: "Affiliate approved", user: "Mike Johnson", time: "2 days ago" },
  ]

  const quickActions = [
    { title: "Add New Event", action: "events/new", icon: Calendar },
    { title: "Add Team Member", action: "team/new", icon: Users },
    { title: "Update Homepage", action: "homepage", icon: Activity },
    { title: "Manage Affiliates", action: "affiliates", icon: UserCheck },
  ]

  const handleQuickAction = (action) => {
    console.log("Navigate to:", action)
    // Handle navigation or action here
  }

  const handleViewAllEvents = () => {
    console.log("Navigate to all events")
    // Handle navigation to events page
  }

  return (
    <div className="space-y-8 p-6 max-w-7xl ml-64">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your coding club.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-600">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates and changes across the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-600">by {activity.user}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Clock className="h-3 w-3" />
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>Frequently used management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {quickActions.map((action) => (
                <Button 
                  key={action.title}
                  variant="outline" 
                  className="w-full justify-start gap-3 bg-transparent"
                  onClick={() => handleQuickAction(action.action)}
                >
                  <action.icon className="h-4 w-4" />
                  {action.title}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Events scheduled for the next 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">HackOverflow 2024</h4>
                <p className="text-sm text-gray-600">48-hour hackathon competition</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Dec 15-17, 2024</p>
                <p className="text-xs text-gray-600">3 days remaining</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Web Development Workshop</h4>
                <p className="text-sm text-gray-600">Introduction to React and Next.js</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Dec 20, 2024</p>
                <p className="text-xs text-gray-600">8 days remaining</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button 
              variant="outline" 
              className="w-full bg-transparent"
              onClick={handleViewAllEvents}
            >
              View All Events
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}