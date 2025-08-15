import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Switch } from "../../components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Badge } from "../../components/ui/badge"
import { Plus, Trash2, Save, Users, UserPlus, Settings } from "lucide-react"

export default function RegistrationManagement() {
  const [formFields, setFormFields] = useState([
    { id: 1, name: "fullName", label: "Full Name", type: "text", required: true, enabled: true },
    { id: 2, name: "email", label: "Email Address", type: "email", required: true, enabled: true },
    { id: 3, name: "phone", label: "Phone Number", type: "tel", required: true, enabled: true },
    { id: 4, name: "rollNumber", label: "Roll Number", type: "text", required: true, enabled: true },
    { id: 5, name: "year", label: "Academic Year", type: "select", required: true, enabled: true },
    { id: 6, name: "branch", label: "Branch/Department", type: "select", required: true, enabled: true },
    { id: 7, name: "experience", label: "Programming Experience", type: "select", required: false, enabled: true },
    { id: 8, name: "interests", label: "Areas of Interest", type: "checkbox", required: false, enabled: true },
    { id: 9, name: "motivation", label: "Why do you want to join?", type: "textarea", required: false, enabled: true },
  ])

  const [benefits, setBenefits] = useState([
    "Access to exclusive workshops and coding sessions",
    "Priority registration for all club events",
    "Mentorship from senior members and alumni",
    "Networking opportunities with industry professionals",
    "Certificate of affiliation from SRKR Coding Club",
    "Access to club resources and study materials",
    "Participation in inter-college competitions",
    "Career guidance and placement assistance",
  ])

  const [registrationSettings, setRegistrationSettings] = useState({
    isOpen: true,
    maxCapacity: 200,
    currentRegistrations: 153,
    requireApproval: false,
    sendWelcomeEmail: true,
    allowMultipleSubmissions: false,
  })

  const handleSave = () => {
    console.log("Saving registration settings:", {
      formFields,
      benefits,
      registrationSettings
    })
    alert("Registration settings saved successfully!")
  }

  const addFormField = () => {
    const newField = {
      id: Date.now(),
      name: "",
      label: "",
      type: "text",
      required: false,
      enabled: true,
    }
    setFormFields([...formFields, newField])
  }

  const removeFormField = (id) => {
    setFormFields(formFields.filter((field) => field.id !== id))
  }

  const updateFormField = (id, property, value) => {
    setFormFields(formFields.map((field) => (field.id === id ? { ...field, [property]: value } : field)))
  }

  const addBenefit = () => {
    setBenefits([...benefits, ""])
  }

  const removeBenefit = (index) => {
    setBenefits(benefits.filter((_, i) => i !== index))
  }

  const updateBenefit = (index, value) => {
    setBenefits(benefits.map((benefit, i) => (i === index ? value : benefit)))
  }

  const fieldTypes = [
    { value: "text", label: "Text" },
    { value: "email", label: "Email" },
    { value: "tel", label: "Phone" },
    { value: "select", label: "Select" },
    { value: "checkbox", label: "Checkbox" },
    { value: "textarea", label: "Textarea" },
  ]

  return (
    <div className="space-y-8 p-6 max-w-7xl ml-64">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Registration Management</h1>
          <p className="text-gray-600">Configure registration forms, benefits, and settings</p>
        </div>
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      {/* Registration Status Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Registration Status</CardTitle>
            <Settings className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{registrationSettings.isOpen ? "Open" : "Closed"}</div>
            <p className="text-xs text-gray-600">Current status</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
            <Users className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{registrationSettings.currentRegistrations}</div>
            <p className="text-xs text-gray-600">Out of {registrationSettings.maxCapacity} capacity</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Capacity Used</CardTitle>
            <UserPlus className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((registrationSettings.currentRegistrations / registrationSettings.maxCapacity) * 100)}%
            </div>
            <p className="text-xs text-gray-600">
              {registrationSettings.maxCapacity - registrationSettings.currentRegistrations} spots remaining
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Form Fields</CardTitle>
            <Settings className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formFields.filter((f) => f.enabled).length}</div>
            <p className="text-xs text-gray-600">Active fields</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="form" className="space-y-6">
        <TabsList>
          <TabsTrigger value="form">Registration Form</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="form" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Registration Form Fields</CardTitle>
                  <CardDescription>Configure the fields that appear in the registration form</CardDescription>
                </div>
                <Button onClick={addFormField} size="sm" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Field
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {formFields.map((field) => (
                <div key={field.id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant={field.enabled ? "default" : "secondary"}>
                        {field.enabled ? "Enabled" : "Disabled"}
                      </Badge>
                      {field.required && <Badge variant="outline">Required</Badge>}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFormField(field.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label>Field Name</Label>
                      <Input
                        value={field.name}
                        onChange={(e) => updateFormField(field.id, "name", e.target.value)}
                        placeholder="fieldName"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Label</Label>
                      <Input
                        value={field.label}
                        onChange={(e) => updateFormField(field.id, "label", e.target.value)}
                        placeholder="Field Label"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Type</Label>
                      <select
                        value={field.type}
                        onChange={(e) => updateFormField(field.id, "type", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {fieldTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={field.required}
                        onCheckedChange={(checked) => updateFormField(field.id, "required", checked)}
                      />
                      <Label>Required</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={field.enabled}
                        onCheckedChange={(checked) => updateFormField(field.id, "enabled", checked)}
                      />
                      <Label>Enabled</Label>
                    </div>
                  </div>
                </div>
              ))}

              {formFields.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No form fields configured. Add your first field above.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Affiliate Benefits</CardTitle>
                  <CardDescription>Manage the benefits shown to potential affiliates</CardDescription>
                </div>
                <Button onClick={addBenefit} size="sm" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Benefit
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <Input
                      value={benefit}
                      onChange={(e) => updateBenefit(index, e.target.value)}
                      placeholder="Enter benefit description"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeBenefit(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              {benefits.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No benefits configured. Add your first benefit above.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Registration Settings</CardTitle>
              <CardDescription>Configure registration behavior and limits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Registration Open</Label>
                  <p className="text-sm text-gray-600">Allow new registrations</p>
                </div>
                <Switch
                  checked={registrationSettings.isOpen}
                  onCheckedChange={(checked) => setRegistrationSettings({ ...registrationSettings, isOpen: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Require Approval</Label>
                  <p className="text-sm text-gray-600">Manually approve each registration</p>
                </div>
                <Switch
                  checked={registrationSettings.requireApproval}
                  onCheckedChange={(checked) =>
                    setRegistrationSettings({ ...registrationSettings, requireApproval: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Send Welcome Email</Label>
                  <p className="text-sm text-gray-600">Automatically send welcome email to new affiliates</p>
                </div>
                <Switch
                  checked={registrationSettings.sendWelcomeEmail}
                  onCheckedChange={(checked) =>
                    setRegistrationSettings({ ...registrationSettings, sendWelcomeEmail: checked })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-capacity">Maximum Capacity</Label>
                <Input
                  id="max-capacity"
                  type="number"
                  value={registrationSettings.maxCapacity}
                  onChange={(e) =>
                    setRegistrationSettings({
                      ...registrationSettings,
                      maxCapacity: parseInt(e.target.value) || 0,
                    })
                  }
                />
                <p className="text-sm text-gray-600">Maximum number of affiliates allowed</p>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Registration Summary</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Status:</span>
                    <span className={`ml-2 font-medium ${registrationSettings.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                      {registrationSettings.isOpen ? 'Open' : 'Closed'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Capacity:</span>
                    <span className="ml-2 font-medium">
                      {registrationSettings.currentRegistrations}/{registrationSettings.maxCapacity}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Approval Required:</span>
                    <span className="ml-2 font-medium">
                      {registrationSettings.requireApproval ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Welcome Email:</span>
                    <span className="ml-2 font-medium">
                      {registrationSettings.sendWelcomeEmail ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}