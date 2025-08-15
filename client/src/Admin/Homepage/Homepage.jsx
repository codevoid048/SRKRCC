import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Switch } from "../../components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Badge } from "../../components/ui/badge"
import { Plus, Trash2, Upload, Save } from "lucide-react"

export default function HomepageManagement() {
  const [heroData, setHeroData] = useState({
    title: "Welcome to SRKR Coding Club",
    tagline: "Empowering students through code, innovation, and collaboration",
    image: "/hero-image.jpg",
  })

  const [stats, setStats] = useState({
    ebrs: "150+",
    affiliates: "89",
    events: "25+",
    workshops: "40+",
  })

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      quote: "The coding club has been instrumental in my growth as a developer.",
      photo: "/testimonial1.jpg",
    },
    {
      id: 2,
      name: "Priya Patel",
      quote: "Amazing community and learning opportunities!",
      photo: "/testimonial2.jpg",
    },
  ])

  const [joinUsEnabled, setJoinUsEnabled] = useState(true)
  const [aboutContent, setAboutContent] = useState(
    "SRKR Coding Club is a vibrant community of passionate programmers..."
  )

  const [contactInfo, setContactInfo] = useState({
    email: "contact@srkrcodingclub.com",
    phone: "+91 12345 67890",
    address: "SRKR Engineering College, Bhimavaram"
  })

  const handleSave = () => {
    // Save logic here
    console.log("Saving homepage content:", {
      heroData,
      stats,
      testimonials,
      aboutContent,
      joinUsEnabled,
      contactInfo
    })
    alert("Homepage content saved successfully!")
  }

  const addTestimonial = () => {
    const newTestimonial = {
      id: Date.now(),
      name: "",
      quote: "",
      photo: "",
    }
    setTestimonials([...testimonials, newTestimonial])
  }

  const removeTestimonial = (id) => {
    setTestimonials(testimonials.filter((t) => t.id !== id))
  }

  const updateTestimonial = (id, field, value) => {
    setTestimonials(testimonials.map((t) => (t.id === id ? { ...t, [field]: value } : t)))
  }

  const handleFileUpload = (section, field = null) => {
    // Handle file upload logic
    console.log(`File upload for ${section}${field ? ` - ${field}` : ''}`)
    // In a real app, you would handle file upload here
  }

  return (
    <div className="space-y-8 p-6 max-w-7xl ml-64">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Homepage Content</h1>
          <p className="text-gray-600">Manage all content displayed on the homepage</p>
        </div>
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="hero" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="about">About Us</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Main banner content that visitors see first</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hero-title">Title</Label>
                <Input
                  id="hero-title"
                  value={heroData.title}
                  onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-tagline">Tagline</Label>
                <Textarea
                  id="hero-tagline"
                  value={heroData.tagline}
                  onChange={(e) => setHeroData({ ...heroData, tagline: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>Hero Image/Video</Label>
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors"
                  onClick={() => handleFileUpload('hero', 'image')}
                >
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, MP4 up to 10MB</p>
                  {heroData.image && (
                    <p className="text-xs text-blue-600 mt-2">Current: {heroData.image}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Statistics</CardTitle>
              <CardDescription>Update the numbers displayed in statistics cards</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="ebrs">EBRs (Executive Board Representatives)</Label>
                <Input id="ebrs" value={stats.ebrs} onChange={(e) => setStats({ ...stats, ebrs: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="affiliates">Affiliates</Label>
                <Input
                  id="affiliates"
                  value={stats.affiliates}
                  onChange={(e) => setStats({ ...stats, affiliates: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="events">Events</Label>
                <Input
                  id="events"
                  value={stats.events}
                  onChange={(e) => setStats({ ...stats, events: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workshops">Workshops</Label>
                <Input
                  id="workshops"
                  value={stats.workshops}
                  onChange={(e) => setStats({ ...stats, workshops: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Us Section</CardTitle>
              <CardDescription>Main description of the coding club</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="about-content">About Us Content</Label>
                <Textarea
                  id="about-content"
                  value={aboutContent}
                  onChange={(e) => setAboutContent(e.target.value)}
                  rows={8}
                  placeholder="Write about the coding club, its mission, vision, and activities..."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Member Testimonials</CardTitle>
                  <CardDescription>Manage what members say about the club</CardDescription>
                </div>
                <Button onClick={addTestimonial} size="sm" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Testimonial
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Testimonial #{testimonial.id}</Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTestimonial(testimonial.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Member Name</Label>
                      <Input
                        value={testimonial.name}
                        onChange={(e) => updateTestimonial(testimonial.id, "name", e.target.value)}
                        placeholder="Enter member name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Photo</Label>
                      <div 
                        className="border-2 border-dashed border-gray-300 rounded p-3 text-center cursor-pointer hover:border-gray-400 transition-colors"
                        onClick={() => handleFileUpload('testimonial', testimonial.id)}
                      >
                        <Upload className="h-4 w-4 mx-auto text-gray-400 mb-1" />
                        <p className="text-xs text-gray-600">Upload photo</p>
                        {testimonial.photo && (
                          <p className="text-xs text-blue-600 mt-1">Current: {testimonial.photo}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Quote</Label>
                    <Textarea
                      value={testimonial.quote}
                      onChange={(e) => updateTestimonial(testimonial.id, "quote", e.target.value)}
                      placeholder="Enter testimonial quote"
                      rows={3}
                    />
                  </div>
                </div>
              ))}
              
              {testimonials.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No testimonials yet. Add your first testimonial above.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information & Join Us</CardTitle>
              <CardDescription>Manage contact details and registration settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Enable "Ready to Join Us" Section</Label>
                  <p className="text-sm text-gray-600">Show/hide the registration call-to-action section</p>
                </div>
                <Switch checked={joinUsEnabled} onCheckedChange={setJoinUsEnabled} />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input 
                    id="contact-email" 
                    type="email" 
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    placeholder="contact@srkrcodingclub.com" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Contact Phone</Label>
                  <Input 
                    id="contact-phone" 
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    placeholder="+91 12345 67890" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-address">Address</Label>
                  <Textarea 
                    id="contact-address" 
                    value={contactInfo.address}
                    onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                    placeholder="SRKR Engineering College, Bhimavaram" 
                    rows={3} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}