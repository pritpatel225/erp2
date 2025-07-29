"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Overview } from "@/components/overview"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { Download, TrendingUp, Users, Package, DollarSign } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Reports & Analytics</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.5%</div>
            <p className="text-xs text-muted-foreground">Compared to last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Retention</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Turnover</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8x</div>
            <p className="text-xs text-muted-foreground">+0.5x from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.8%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Sales Reports</TabsTrigger>
          <TabsTrigger value="inventory">Inventory Reports</TabsTrigger>
          <TabsTrigger value="financial">Financial Reports</TabsTrigger>
          <TabsTrigger value="customer">Customer Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sales Performance</CardTitle>
                <CardDescription>Monthly sales data and trends</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Best selling products this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Laptop Dell XPS 13</p>
                      <p className="text-sm text-muted-foreground">25 units sold</p>
                    </div>
                    <div className="ml-auto font-medium">$24,999</div>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Standing Desk</p>
                      <p className="text-sm text-muted-foreground">12 units sold</p>
                    </div>
                    <div className="ml-auto font-medium">$7,199</div>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Office Chair</p>
                      <p className="text-sm text-muted-foreground">8 units sold</p>
                    </div>
                    <div className="ml-auto font-medium">$2,399</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Stock Levels</CardTitle>
                <CardDescription>Current inventory status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">In Stock</span>
                    <span className="text-sm font-medium">42 items</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Low Stock</span>
                    <span className="text-sm font-medium text-yellow-600">8 items</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Out of Stock</span>
                    <span className="text-sm font-medium text-red-600">3 items</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Inventory Value</CardTitle>
                <CardDescription>Total value by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Electronics</span>
                    <span className="text-sm font-medium">$45,230</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Furniture</span>
                    <span className="text-sm font-medium">$23,450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Office Supplies</span>
                    <span className="text-sm font-medium">$5,670</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Revenue by source</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Product Sales</span>
                    <span className="text-sm font-medium">$125,430</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Services</span>
                    <span className="text-sm font-medium">$45,230</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Subscriptions</span>
                    <span className="text-sm font-medium">$23,450</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expense Categories</CardTitle>
                <CardDescription>Monthly expenses breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Operations</span>
                    <span className="text-sm font-medium">$25,430</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Marketing</span>
                    <span className="text-sm font-medium">$12,230</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Administration</span>
                    <span className="text-sm font-medium">$8,450</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customer" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Customer Segments</CardTitle>
                <CardDescription>Customer distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Enterprise</span>
                    <span className="text-sm font-medium">45 customers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SMB</span>
                    <span className="text-sm font-medium">123 customers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Individual</span>
                    <span className="text-sm font-medium">234 customers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Lifetime Value</CardTitle>
                <CardDescription>Average CLV by segment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Enterprise</span>
                    <span className="text-sm font-medium">$15,430</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SMB</span>
                    <span className="text-sm font-medium">$5,230</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Individual</span>
                    <span className="text-sm font-medium">$1,450</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
