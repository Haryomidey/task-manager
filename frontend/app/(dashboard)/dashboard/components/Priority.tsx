import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Priority() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Choose task priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Task priority</SelectLabel>
          <SelectItem value="apple">Low</SelectItem>
          <SelectItem value="banana">Medium</SelectItem>
          <SelectItem value="blueberry">High</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
