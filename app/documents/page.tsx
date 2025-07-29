"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, FileText, Download, Eye, Upload } from "lucide-react"

const documentsData = [
  {
    id: "DOC001",
    name: "Q4 Financial Report",
    type: "Report",
    size: "2.4 MB",
    uploadDate: "2024-01-15",
    uploadedBy: "John Doe",
    status: "Active",
    category: "Financial",
  },
  {
    id: "DOC002",
    name: "Supplier Contract - Dell",
    type: "Contract",
    size: "1.8 MB",
    uploadDate: "2024-01-12",
    uploadedBy: "Sarah Johnson",
    status: "Active",
    category: "Legal",
  },
  {
    id: "DOC003",
    name: "Employee Handbook 2024",
    type: "Policy",
    size: "5.2 MB",
    uploadDate: "2024-01-10",
    uploadedBy: "HR Department",
    status: "Active",
    category: "HR",
  },
  {
    id: "DOC004",
    name: "Product Catalog",
    type: "Catalog",
    size: "12.5 MB",
    uploadDate: "2024-01-08",
    uploadedBy: "Marketing Team",
    status: "Draft",
    category: "Marketing",
  },
]

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge variant="default">Active</Badge>
      case "Draft":
        return <Badge variant="secondary">Draft</Badge>
      case "Archived":
        return <Badge variant="outline">Archived</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    return <FileText className="h-4 w-4" />
  }

  const filteredDocuments = documentsData.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalDocuments = documentsData.length
  const activeDocuments = documentsData.filter((doc) => doc.status === "Active").length
  const totalSize = documentsData.reduce((sum, doc) => {
    const size = Number.parseFloat(doc.size.split(" ")[0])
    return sum + size
  }, 0)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Document Management</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDocuments}</div>
            <p className="text-xs text-muted-foreground">+3 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeDocuments}</div>
            <p className="text-xs text-muted-foreground">75% of total documents</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSize.toFixed(1)} MB</div>
            <p className="text-xs text-muted-foreground">12% of 200 MB limit</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead>Uploaded By</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.map((document) => (
              <TableRow key={document.id}>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(document.type)}
                    <div>
                      <div className="font-medium">{document.name}</div>
                      <div className="text-sm text-muted-foreground">{document.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{document.type}</TableCell>
                <TableCell>{document.category}</TableCell>
                <TableCell>{document.size}</TableCell>
                <TableCell>{document.uploadDate}</TableCell>
                <TableCell>{document.uploadedBy}</TableCell>
                <TableCell>{getStatusBadge(document.status)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
